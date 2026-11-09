# Matthi & Nana-Michelle — setup guide

## Testing it in a real browser

The file is a single self-contained `.html`. No server, no build step, no dependencies to install.

1. Download `matthi-nana-wedding.html`.
2. Double-click it, or drag it onto a Chrome/Safari/Firefox window.
3. It opens and works immediately — photo uploads, RSVPs, gifts, seating, everything.

Data is saved in the browser's own storage, so anything you enter stays there when you reopen the file **on that same computer and browser**. It does not yet sync between devices — that happens when you host it (below).

To test on your phone: put the file in Google Drive or Dropbox, open the link on your phone, and choose "open in browser".

To clear everything and start fresh, open the browser console (F12) and run `localStorage.clear()`, then reload.

## Putting it online (so guests can actually use it)

Any static host works. Cheapest reliable options:

- **Netlify Drop** — go to app.netlify.com/drop, drag the file in, done in 30 seconds. Free. Rename the file to `index.html` first.
- **Cloudflare Pages** or **GitHub Pages** — same idea, free, custom domain supported.
- A `.co.za` domain costs about R100/year. Point it at whichever host you pick.

### Making everyone's data land in one place

Supabase is already wired in. **Données & sauvegarde** tab, three steps:

1. Create a free project at supabase.com. Open **SQL Editor → New query**, paste the SQL shown in that tab, click **Run**. Once only.
2. In Supabase go to **Project Settings → API**. Copy the **Project URL** and the **anon public** key into the two boxes. Paste the **service_role** key into the admin box.
3. Click **Tester la connexion**, then **Enregistrer et activer**, then **Envoyer les données de ce navigateur vers la base**.

From that moment every RSVP, gift, guest-book note and uploaded photo lands in one database that you and Matthi both see, from any device. The desk refreshes itself every minute while it's open, and there's a **Rafraîchir** button.

**About the three keys.** The Project URL and anon key are designed to be public and live in the website file. The service_role key is different: it is saved only in the browser you paste it into and is never written into the file or sent to guests. Paste it on your machine and Matthi's, nowhere else. Without it you can read everything but not change the site content — which is exactly what protects the guest list from being rewritten by a stranger.

**What the SQL does.** Guests can read the site and write only their own reply, gift, note or photo. Everything else — guest list, schedule, registry, settings, seating — can only be changed with the service_role key.

One honest limit: anyone who views the page source can read the anon key and therefore read the guest list. That's normal for a wedding site and fine for names and allergy notes. If you want the list genuinely private, it needs a small serverless function in front of it — tell me and I'll add one.

## Backing it up

**Données & sauvegarde → Exporter tout** writes one JSON file containing everything: guest list, replies, gifts, floor plan, photos, words, appearance. **Importer un fichier** restores it, with a tick box for whether to overwrite what's already there.

Do this weekly, and before any big change. It's also how you move everything to a new laptop.

## The guest list

The 17 households from your spreadsheet are loaded, codes MM-1001 to MM-1017, all on the groom's side. The wedding is set in Durban, KwaZulu-Natal. Three numbers are tracked per invitation:

- **Places** — seats invited (your Number column)
- **Attendus** — your own estimate of who will really come (your Reality column)
- **Confirmé de vive voix** — your Confirmed Y

The dashboard shows all three side by side against the online replies, so you can watch your estimate meet reality instead of guessing.

### Keeping it in step with the spreadsheet

**Invités → Coller depuis votre feuille de calcul**. Copy the rows in Google Sheets, paste them in, click Importer. Four columns: Name, Number, Reality, Confirmed. A name already on the list is updated; a new name becomes a new invitation with its own code. Header and total rows are ignored.

That's the loop: keep working in your sheet, paste whenever it changes.

## Sending invitations

**Invitations** tab. Pick a household, a language, which photograph goes on the card, and how many moments to print. Sending itself, on a laptop or a phone, is described in **Sending invitations (laptop or phone)** at the end of this guide.

The message always carries a direct link, `https://mathi-nana.com/#rsvp?c=MN-1001`, which opens their reply page with the code already filled in. The QR on the card points at the same place.

### Tracking

The table on that tab shows three things per household: whether the invitation went out (and by WhatsApp, e-mail or both), whether they have replied, and which contact details are missing (no number, no e-mail).

## Access to the couple's desk

Footer of any page → "Espace des mariés" → code **1205**.
Change the code under **Textes → Code d'accès**.

## Changing how it looks — no code

**Apparence** tab. Everything visual lives here:

- Four ready-made palettes (vintage blue, midnight & gold, earth & ivory, garden & sage). One click changes the whole site.
- Or set the six colours yourself with colour pickers.
- Choose the homepage artwork: arch & string lights, garden, safari, seaside, ballroom, blue hour.
- Lay a real photograph over the artwork once you have one.
- Wallpaper pattern on/off, and how strong.
- Falling petals on/off.
- Monogram initials.
- Tick boxes to show or hide any section of the site.
- **"Show the family colour palette publicly"** — off by default. The family blues stay private; guests only see their own dress guidance.

## What to fill in before sending anything to guests

| Where | What |
|---|---|
| Contenu | Wedding date, RSVP deadline, city, site address, contact email |
| Contenu → Le lieu | Venue name, exact Durban address, Google Maps link, description |
| Contenu → Coordonnées bancaires | **Real bank details** — currently placeholders (FNB / 0000 000 000) |
| Contenu → Lien de diffusion | Livestream URL for family in Kinshasa (add closer to the day) |
| Cadeaux | Honeymoon goal (currently R60 000) and the blurb |
| Demoiselles & garçons | Real names, roles and photos for the bridesmaids and groomsmen |
| Photos | Replace the drawn placeholder scenes with real photographs |
| Photos | Venue photo (becomes the homepage background) and gallery images |
| Invités | Add phone numbers and e-mail addresses so the invitations can go out |

## Notes

- Photos are compressed automatically on upload (about 60–90 KB each), so the file stays fast even with a full gallery.
- The QR code on each invitation opens that household's RSVP page directly, with their code pre-filled.
- The floor plan is drag-and-drop. Move tables to match the real room, then print it for the door.
- Guest-uploaded gallery photos and guest-book messages are held for approval before they appear publicly.


## The photographs

The 23 images from the proposal shoot are already in the site, compressed and placed:

- **Home page** — four of them cross-fade slowly behind your names: the staircase, the kiss, the knee, her laugh.
- **Notre histoire** — the eye-to-eye frame, in the arched mount.
- **Le lieu** — the landscape kiss as the venue header, until you have a venue photo.
- **Le cortège** — real portraits of Mathithia and Nana-Michelle. The rest of the party still shows drawn cards until you add their photos.
- **Galerie** — all 23 under *Séance de fiançailles*, with French and English captions. The two earlier living-room photos sit under *La dot*.
- **Crédit** — Media Beyond Vision, linked to their site, under the gallery.

Everything above is a normal photo in the desk, so you can re-tick, re-caption, re-sort or delete any of it.

### Adding more

1. Desk → **Photos**. Pick a destination (Accueil & histoire, Galerie, Le lieu), pick an album, select all the files at once. A counter shows progress; they're compressed automatically.
2. Under each photo you get:
   - **Accueil** — tick it to put that photo on the home page. Tick two to five and they cross-fade slowly behind your names, with a gentle zoom.
   - **Mettre dans l'histoire** — makes that photo the one beside your story on the home page.
   - **Album** — Séance de fiançailles, La dot, Le mariage, or your own. Albums become filter buttons on the Galerie page as soon as two are in use.
   - **Légende** — shown on hover and in the lightbox.
4. **Assombrissement** controls how dark the home-page photo sits behind the text. Lower for a brighter photo, higher if the names are hard to read.
5. **Crédit photographe** puts a credit line under the gallery, linked to their site.

## About the artwork

Everything that isn't a photograph is drawn in SVG by the site itself — the scene behind the home-page photos, the wreath, the crest, the wallpaper, the ornaments, the registry icons, and the portrait cards for wedding-party members who don't have a photo yet. No stock imagery anywhere.

## Where the photographs live

They are no longer inside the HTML. The file is **238 KB**; the 33 images are served separately, which is why the page now opens almost instantly even on a weak signal.

The site works out where to fetch them, in this order:

1. **Photos → Où sont rangées les photos** — if you type an address there, it wins.
2. Otherwise your Supabase project, at `<your-project>/storage/v1/object/public/photos/`.
3. Otherwise a `media/` folder sitting next to `index.html`.

That means both routes work with no configuration: upload the folder to Supabase Storage, or just commit `media/` beside the HTML on GitHub Pages. Supabase is faster for guests far away; the folder is simpler.

### Putting them in Supabase Storage

1. Supabase → **Storage** → **New bucket** → name it exactly `photos` → tick **Public bucket** → Save.
2. Unzip `photos.zip`. Drag the **contents** of the `media` folder in — the 33 files themselves, not the folder.
3. In the site: **Photos → Vérifier qu'une image se charge**. Green tag means done.

### Clearing the old copies out of the database

The earlier version pushed the images into table rows. They are dead weight now:

```sql
delete from wedding_store where key like 'photo:%';
```

## Gifts that several people can give

Each registry item has a tick box in **Cadeaux → Modifier la liste**:

**Plusieurs personnes peuvent l'offrir** — the item never closes. Each person gives the listed price, as many times as it takes. The card shows "Toujours disponible · déjà offert 3 fois", and the button reads "Offrir aussi". Three people giving R1 000 for the kettle means R3 000 to you, and the kettle stays on the list.

Leave it unticked and the item behaves as before: it closes the moment it is funded, so nobody gives the same thing twice.

Two buttons apply it in bulk: **Tout ouvrir au partage** and **Tout refermer après financement**.

Separately, **Ne se ferme jamais** is what drives "Un geste libre" — never closes, and the giver chooses the amount.

Items set to shareable are excluded from the "x of y items gifted" counter, since they can't be completed.


## When something does not save

Open the desk. The top bar shows the **site version** (r7 or later) and, under it, one line:

- Green: "Base connectée, modifications enregistrées". Everything you change is in the database.
- Red: "Pas enregistré dans la base". The change exists only in this browser and says why (an HTTP code). Paste the `service_role` key under **Données & sauvegarde**, then **Réessayer maintenant**.

**Données & sauvegarde → Lancer la vérification** tests four things and prints a tick or a cross for each:

1. Reading the database.
2. Writing with your admin key, then reading it back.
3. The connection exactly as a guest gets it.
4. A guest sending a reply.

If row 3 or 4 fails, click **Télécharger connection.json**, put that file in `public/` beside `index.html`, and push. Guests then connect with the values your own browser proved correct.

**Photos → Vérifier les images** loads every shipped photograph and lists any that are missing from the deployed `media/` folder. There are 35.


## Finding a guest

Matching ignores accents, capitals and word order, and forgives one wrong letter.

- **Guests, on the RSVP page:** a first name, a surname, a full name, or the code (MN-1001, mn1001 and "MN 1001" all work). At least three letters. If several households match they choose theirs; if more than six match they are asked to add detail, so nobody can scroll through the whole list.
- **Guests, on the seat finder:** same matching. If several people match, every one is shown.
- **You, under Invités:** a search box at the top that also reads phone numbers, groups and e-mail, plus filters for side, online reply (awaiting, coming, declined), invitation (to send, sent) and group. The count above the list shows households and seats for what you are looking at. Your filters survive adding or deleting a guest.
- **You, under Plan de salle:** a search box above the list of people still to seat.


## Confirming gifts from your bank statement

Gifts stay "Annoncé" until you confirm them. Instead of ticking row by row:

1. Open the Capitec statement (PDF from the app or Internet Banking) and copy the lines for the period.
2. **Cadeaux → Rapprochement avec le relevé bancaire**, paste, **Analyser le relevé**.
3. The site looks for each `WG-` reference and its amount and sorts what it finds:
   - **Prêts à confirmer** (ticked): reference and amount both match.
   - **À vérifier** (not ticked): reference found, amount different or unreadable. Ticking keeps the statement amount and notes the difference.
   - **Reçus sans avoir été annoncés** (not ticked): a guest paid but never pressed "J'ai payé". Check the name and amount, tick, and the gift is created as received.
   - **Références inconnues** and **Annoncés mais pas encore vus**: for information.
4. **Appliquer la sélection.** Nothing changes before this button.

It copes with references the bank shortened, dropped hyphens, and an amount printed on the next line. Running the same statement twice is safe.


## How guests reply

The reply page asks one thing. A guest finds their invitation by name or code, sees "Invitation pour N personnes" (N is the seat count you set), and answers **Oui, nous serons là** or **Non, nous ne pourrons pas venir**. If yes, one optional box asks whether anyone is allergic to any food. That is all.

- The answer covers everyone on the invitation. Guests cannot add, remove or name people. To change how many people an invitation covers, edit it under **Invités**.
- There is no menu choice yet. When the menu is final, tell me and I will add it.
- Nothing about shuttles, rooms or flights is asked or promised anywhere on the site.
- **Réponses** shows households coming, people coming, households declined, no reply yet and allergies reported, with the allergy list ready to pass to the caterer. **Exporter les réponses** gives one row per invitation.
- Replies sent before this change still display; their meal, travel and song answers are simply no longer shown.


## Sending invitations (laptop or phone)

Open **Invitations**, pick a household, and check the two contact boxes: **WhatsApp** and **E-mail**. You can type them right there; they are saved to the guest list.

- Numbers can be typed any way you like: `082 123 4567`, `+27 82 123 4567` and `0027 82 123 4567` all become the international form WhatsApp needs. Numbers from other countries need their `+` (for example `+243 81 234 5678`).
- The button says what it will do: **Envoyer par WhatsApp et e-mail** when the household has both, or just one channel when it has only one. **WhatsApp seulement** and **E-mail seulement** override it.
- **On a laptop:** one click opens WhatsApp (Web or the app) and an e-mail draft, each with the message filled in, and copies the card. Paste the card with **Ctrl+V** (Cmd+V on a Mac) into each, then press Send. If the browser blocks a window, the result panel gives you a button for it. If it cannot copy the card, it downloads it instead.
- **On a phone:** the share sheet opens with the card attached. The e-mail is a tap-to-open button in the result panel.
- **Open the e-mail with** chooses Gmail, Outlook.com or your mail app. The choice is remembered on that computer.
- Each channel is tracked separately (a WhatsApp tag and an E-mail tag with the date). **Annuler** in the result panel undoes it, and **Foyer suivant à envoyer** jumps to the next household you have not sent to.
- The site opens the windows but cannot press Send for you, and an e-mail draft cannot carry an attachment, so the card is pasted. Sending e-mail with the card attached automatically would need a mail-sending service (an account, a verified sending address and a small server function). Say if you want that.


## What a guest sees when they give a gift

1. They press **Offrir** on a gift and give an amount, **their name (required)**, an optional e-mail or WhatsApp, and an optional note.
2. The next screen shows your bank details (Capitec, SWIFT, Western Union or M-Pesa) and a **reference built automatically from the gift and the name they gave**, for example `WG-KETTLE-TANTE-MARIE`. They cannot edit it, only copy it. You will read it on your bank statement.
3. After they make the transfer in their own banking app, they press **J'ai payé**.
4. The same window turns into a thank-you screen with a green tick, the gift, their name, the amount and the reference, and says that Mathi and Nana will confirm it as soon as the transfer reaches them.
5. The gift is marked straight away: a fixed-price gift shows **Déjà offert**, a shared gift shows its new total, and the counters move.

**"J'ai payé" is the guest's own statement, not a bank confirmation.** The site cannot see your bank account, so it records the gift as **Annoncé** until you confirm it, which is why the screen says you will confirm receipt instead of announcing a successful payment. You confirm in **Cadeaux** by ticking the row, or in one go with **Rapprochement avec le relevé bancaire**. If someone presses the button without paying, cancel the row with the cross and the item opens again. A genuine "payment successful" screen, shown by the payment itself, is only possible with a payment provider (Paystack or PayFast).

The code before the name is set per gift under **Cadeaux → Modifier la liste → Code de référence**. The defaults are short and readable (SOFA, KETTLE, FRIDGE) so the name survives if a bank shortens the reference.


## Sending on a laptop: what actually happens now

Browsers only reliably allow **one** window to open itself per click; a second one is often silently blocked, which is why e-mail never arrived before. So **Envoyer par WhatsApp et e-mail** opens WhatsApp automatically, and shows a gold **Ouvrir E-mail** button for the second one — a real click always works, where a second automatic window may not. The card is always downloaded as a backup, whatever happens with the clipboard; drag it into the chat and the e-mail if pasting doesn't work.

## Giving a gift without an invitation

Three ways in:
- Three buttons sit right under the couple's names on the home page, in this order: **Répondre**, **Offrir un cadeau**, **Programme**. A second reminder band further down the home page speaks directly to anyone who can't attend.
- **Invitations → Pour ceux qui ne sont pas invités, ou qui ne peuvent pas venir** gives a plain link (`mathi-nana.com/#registry`) with a WhatsApp button and a copy button, for forwarding to anyone.
- The registry page itself has a small "Partager la liste par WhatsApp" link at the foot of the explainer, for guests who want to pass it on themselves.

No code or invitation is needed to give a gift; it never was.

## The floor plan: everyone has a seat already

**Every invited guest now has a provisional seat the moment the plan is drawn** — you don't have to wait for replies. A "non" reply removes those seats automatically; a "oui" changes nothing. This is why the seat finder works immediately: it was only ever searching confirmed replies before, and none existed yet.

- 20 tables, 202 seats, each carrying a small mark: the top table shows the couple's own photograph, the rest carry a drawn icon (heart, dove, teacup, lantern, wine glass, and more).
- **Placer par foyer** now fills the roomiest table when a household doesn't fit anywhere whole, instead of skipping it.
- A search box above the floor plan in **Plan de salle** finds anyone already seated and highlights their table — separate from the search for people still waiting to be placed.
- Click a table's name or its icon dropdown in the list below the plan to rename it or change its mark.

## PayFast

Not wired in yet. It needs a real PayFast merchant account in Sibabalwe's name, plus a small server (a Cloudflare Worker) to confirm payments safely — neither of those can be set up from inside this file. Say when you're ready and I'll build the Worker and the button together with the setup steps. Gifts stay on EFT until then.


## r17: date, dress code, party, and two real bugs fixed

- **Traditional wedding moved to Friday 5 March** (was Thursday 4th).
- **Dress code is now two tiers, both for everyone:** vintage blue for the morning blessing and the whole traditional day, elegant dress (not blue-restricted) for the white ceremony and the evening. There is no family-only palette any more — `showPalette` defaults to public. If a guest list saved before this change still carried the old wording or a hidden palette, it's healed automatically on load.
- **The traditional wedding no longer appears on the public Programme page at all.** It only ever shows on the personal invitation of a household in the "famille" group. Any already-saved household outside that group has had e1/e2 (the traditional events) quietly removed from their invited list — nothing else about them changed.
- **Wedding party restructured** with real roles: Plamedi and Jenny as maids of honour, Benedicte and Ephraim as chief bridesmaids, Gemima/Eleanor/Andrea/Claudia/Kenayah as bridesmaids, Alidore/Great as flower boys, Owe/Chanty as flower girls, Leona as ring bearer, and Nicolas Kolela added as a groomsman. Seven real photos are in (Andrea, Benedicte, Eleanor, Ephraim, Jenny, Kenayah, Kevin) — ship `photos-new.zip` into `public/media/` alongside the existing photos.
- **Two real bugs fixed:** gallery thumbnails rendering as a thin bar on some phones (a stray HTML placeholder attribute was being read as the real height), and the lightbox close button landing on top of the next/previous arrows instead of its own corner.
- **The guest's name on the invitation card is bigger again** (82px, bold) — the clear second focal point after the couple's names.
- The groom's own photo is unchanged; the one sent this round was cropped and a replacement is expected.


## r18: the card overlap, seats that find themselves, and five smaller things

- **The invitation card's bottom was overlapping itself.** Enlarging the guest's name in r17 pushed everything below it down, but the reply/QR/code section was still anchored to a fixed distance from the bottom edge — so it collided with the name and events text once a card ran long. The whole bottom section is now built relative to whatever is above it, with the canvas made taller (1950px) to give it room. Tested against a long two-line household name, a long venue name, and the full event list together — nothing can collide now.
- **Tables and seating now heal themselves, no admin click required.** If a browser is still holding the old 5-table layout, it's replaced with the real 20-table one automatically, and the whole guest list is seated the first time this happens — only once, and only written to the database from the couple's own browser (never from a guest's). A room that's deliberately been cleared stays cleared.
- **Wedding party order:** the best man now leads the groomsmen, and the chief bridesmaids lead the bride's side, ahead of the maids of honour.
- **Party photos** now share a consistent headroom (`object-position`) so faces line up across a row, rather than each photo keeping whatever framing its source happened to have.
- **Contact address** is now danielm@yebaai.com.
- A note on the "WIFE'S BEST MAN" and "Girls & Boys" you may have seen: that was Chrome's own Google Translate running over the French page, not the site's real English text. The site's built-in FR/EN toggle (top right) gives the correct wording; Google Translate can mistranslate roles it doesn't recognise.


## r19: the data-loss bug, and the layout fixes from Mathi's walkthrough

**The serious one.** Adding, editing or deleting a guest could silently fail to save if the browser didn't have a working admin key — the page would look fine, then the change would vanish on refresh. `save()` now actually reports success or failure, and every guest-list action (add, edit, delete, paste-import) shows a hard, blocking alert the instant a save fails, naming the real reason. Nothing can quietly disappear again without you being told at the moment it happens.

If you're still missing guests or replies from before this fix: open **Données & sauvegarde → Lancer la vérification** to confirm this browser's admin key actually works, then check Supabase directly — `select * from wedding_store where key = 'w:guests'` for the guest list, `select * from wedding_store where key like 'rsvp:%'` for replies — since that's the only way to know what's really stored versus what a browser was only showing locally.

- **Table cards:** the little icon badge was overlapping the table name on two-line names. Circles are bigger now and the badge sits fully clear of the text.
- **Contact e-mail:** the old Gmail address heals automatically now too, the same way everything else does.
- **Wedding party order:** Benedicte now leads the bride's side (as the principal), and across both sides, everyone with a photo comes before everyone without one.
- **Three photos re-cropped:** Ephraim's had a lot of dead ceiling above her head; Eleanor's was a full-length shot out of scale with the rest of the row; the groom's photo is now a clean, forward-facing crop with proper headroom. A genuine full-length *solo* shot of him, matching the bride's, isn't possible from the shoot material — every frame has them together — so this is the best available until a new photo arrives.


## r20: the real fix for the recurring save bug

Every admin write used to need the Supabase `service_role` key, a 200-character secret, pasted into each browser by hand, with no way to tell it was missing until the save silently failed. That fragility was the root cause behind nearly every "it disappeared on refresh" report, Sibabalwe's lost guest record included.

**New design.** The real secret now lives only inside a small Cloudflare Worker, stored as an encrypted Cloudflare secret, never in the HTML file, never in a browser, never visible to a guest. Your browser sends a short passphrase you choose instead, the Worker checks it, and only then writes to Supabase.

### One-time setup (you, not guests, need to do this once)

1. In your project folder, add the attached `worker.js` next to your `public/` folder.
2. Update `wrangler.jsonc` to point at it:
   ```jsonc
   {
     "name": "matthi-nana",
     "compatibility_date": "2026-10-23",
     "main": "worker.js",
     "assets": { "directory": "./public", "binding": "ASSETS" }
   }
   ```
3. Set two secrets (run each, paste the value when prompted):
   ```
   wrangler secret put SUPABASE_SERVICE_KEY
   ```
   (paste the service_role key from Supabase, Settings, API Keys, Legacy keys)
   ```
   wrangler secret put ADMIN_PASSPHRASE
   ```
   (choose a long, memorable phrase here, not the public 1205 code. 20+ characters.)
4. One more secret, the project URL (not sensitive, but the Worker needs it):
   ```
   wrangler secret put SUPABASE_URL
   ```
   (paste https://jmbkkjwpvhwpvawmsbbi.supabase.co)
5. Deploy as usual: git add -A, commit, push.
6. On the live site: footer, 1205, Donnees and sauvegarde, type your new passphrase into the field (now labelled "Phrase de passe d'administration"), Enregistrer et activer, Lancer la verification. All four rows should tick.
7. Repeat step 6 on Mathi's browser, and anyone else's who manages the site. Same passphrase, typed in, nothing to copy-paste.

From here, adding, editing or deleting a guest works the same as always on the desk, nothing about day-to-day use changes, only what's happening underneath.

### Also fixed in this round

Deleting a gift, a guestbook note or rejecting a reply was quietly broken by an early version of this change, since Supabase's rules give the public key no delete permission at all, on any kind of row, so every delete (not just guest-list ones) needed the same proxy. Fixed before anything shipped.
