// The only two secrets this file ever touches are read from Cloudflare's encrypted
// secret store (env.ADMIN_PASSPHRASE, env.SUPABASE_SERVICE_KEY) — set once with
// `wrangler secret put`, never written into this file, never sent to a browser.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/admin") return handleAdmin(request, env);
    return env.ASSETS.fetch(request);
  }
};

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};
const json = (obj, status) => new Response(JSON.stringify(obj),
  {status, headers: Object.assign({"Content-Type":"application/json"}, CORS)});

async function handleAdmin(request, env) {
  if (request.method === "OPTIONS") return new Response(null, {headers: CORS});
  if (request.method !== "POST") return json({ok:false, error:"method"}, 405);
  if (!env.ADMIN_PASSPHRASE || !env.SUPABASE_SERVICE_KEY || !env.SUPABASE_URL)
    return json({ok:false, error:"not_configured"}, 500);

  let body;
  try { body = await request.json(); } catch (e) { return json({ok:false, error:"bad_json"}, 400); }
  const { pass, op, key, value } = body || {};

  // A constant-time-ish compare is pointless over the network (timing noise dominates),
  // so the real defence is simply requiring a passphrase long enough that guessing is
  // impractical — see the deploy notes for the length this expects.
  if (typeof pass !== "string" || pass !== env.ADMIN_PASSPHRASE)
    return json({ok:false, error:"wrong_pass"}, 401);
  if (typeof key !== "string") return json({ok:false, error:"missing key"}, 400);
  // Writing new content (set) is restricted to w: keys — guests insert and update their
  // own rsvp:/gift:/book:/photo: rows directly, with the public key, under RLS. But that
  // policy grants no DELETE at all on any prefix, so every delete is an admin action and
  // is allowed here regardless of prefix.
  if (op === "set" && !key.startsWith("w:"))
    return json({ok:false, error:"only w: keys may be set through this endpoint"}, 400);

  const base = env.SUPABASE_URL.replace(/\/+$/, "");
  const svcHeaders = {
    apikey: env.SUPABASE_SERVICE_KEY,
    Authorization: "Bearer " + env.SUPABASE_SERVICE_KEY,
    "Content-Type": "application/json"
  };
  try {
    if (op === "set") {
      if (value === undefined) return json({ok:false, error:"missing value"}, 400);
      const r = await fetch(base + "/rest/v1/wedding_store?on_conflict=key", {
        method: "POST",
        headers: Object.assign({}, svcHeaders, {"Prefer": "resolution=merge-duplicates,return=minimal"}),
        body: JSON.stringify({key, value, updated_at: new Date().toISOString()})
      });
      if (!r.ok) return json({ok:false, error: (await r.text()).slice(0,200)}, r.status);
      return json({ok:true});
    }
    if (op === "delete") {
      const r = await fetch(base + "/rest/v1/wedding_store?key=eq." + encodeURIComponent(key),
        {method: "DELETE", headers: svcHeaders});
      if (!r.ok) return json({ok:false, error: (await r.text()).slice(0,200)}, r.status);
      return json({ok:true});
    }
    return json({ok:false, error:"unknown op"}, 400);
  } catch (e) {
    return json({ok:false, error:String(e && e.message || e)}, 500);
  }
}
