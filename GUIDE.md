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

One honest limit: anyone who views the page source can read the anon key and therefore read the guest list. That's normal for a wedding site and fine for names and meal choices. If you want the list genuinely private, it needs a small serverless function in front of it — tell me and I'll add one.

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
| Invités | Add phone numbers so the WhatsApp invitations work |

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

## File size

The file is now about 2.8 MB, because the photographs are embedded inside it. That is fine for a static host and loads in a few seconds on a normal connection, but it is slow on a weak mobile signal.

If you want it faster, the fix is to serve the images as separate files instead of embedding them — either as a folder of JPEGs next to the HTML, or through Supabase Storage. Say the word and I'll split them out.

## Gifts that several people can give

Each registry item has a tick box in **Cadeaux → Modifier la liste**:

**Plusieurs personnes peuvent l'offrir** — the item never closes. Each person gives the listed price, as many times as it takes. The card shows "Toujours disponible · déjà offert 3 fois", and the button reads "Offrir aussi". Three people giving R1 000 for the kettle means R3 000 to you, and the kettle stays on the list.

Leave it unticked and the item behaves as before: it closes the moment it is funded, so nobody gives the same thing twice.

Two buttons apply it in bulk: **Tout ouvrir au partage** and **Tout refermer après financement**.

Separately, **Ne se ferme jamais** is what drives "Un geste libre" — never closes, and the giver chooses the amount.

Items set to shareable are excluded from the "x of y items gifted" counter, since they can't be completed.
