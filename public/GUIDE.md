# mathi-nana.com — reference

Build shown in the desk footer: **r20**. If it shows anything else, the latest file isn't live — redeploy before anything else.

## Deploying

```
cd ~/Desktop/Mathi\ \&\ Michelle
cp ~/Downloads/matthi-nana-wedding.html public/index.html
# unzip any photo zip you've been given into public/media/, overwriting existing files
git add -A && git commit -m "Update" && git push
```
Cloudflare rebuilds in under a minute. Hard-reload (Cmd+Shift+R) before checking anything.

## The admin desk

Footer → `1205` → opens the desk. Tabs: Tableau de bord, Invités, Invitations, Réponses, Plan de salle, Cadeaux, Photos, Demoiselles & garçons, Livre d'or, Prestataires, Apparence, Données & sauvegarde, Textes.

**Saving requires a passphrase**, set once per device under **Données & sauvegarde**. It is not the public `1205` code — it's a separate, longer phrase you chose when the admin proxy (`worker.js`) was deployed. Without it, reads work but nothing you change will save, and you'll get a hard alert the moment that happens (not a silent failure).

**First thing to check if anything seems wrong:** Données & sauvegarde → **Lancer la vérification**. Four rows, each should tick:
1. Reading the database
2. Writing with the passphrase, then reading it back
3. The connection exactly as a guest gets it
4. A guest sending a reply

If row 2 fails, the passphrase on this device is missing or wrong — type it in and save. If it's never worked at all, the Worker itself may not be deployed; see `worker.js`'s own deploy notes (sent separately when that was built).

## Guests

- 99 households are built into the file, codes MN-1001 to MN-1099. Add, edit or delete from **Invités**; paste-import is also there.
- **A reply with no matching guest record heals itself automatically** — the moment the page loads, any reply that doesn't match a household is rebuilt into one from the reply's own data, saved, and marked **reconstruit** in the guest list so you know to check its side/group/seat count. This is what brought Sibabalwe back.
- The guest list, once loaded, overrides the file's own defaults. If you ever need to wipe local changes and go back to the shipped 99, that's **Remettre à la version du site**, tick only **Invités**.

## Seating

- 20 tables, 202 seats. Every invited guest gets a **provisional seat automatically** the first time the room is ever drawn — you don't have to click anything. A "non" reply frees the seat; a "oui" changes nothing.
- **Plan de salle** has two separate search boxes: one above the plan finds anyone already seated and highlights their table; one in the "to place" pool searches people not yet assigned.
- The public **"Trouver ma place"** box on the Venue page works the same way, for guests.

## Gifts

- 63 items from the registry, priced in rand with a dollar equivalent underneath.
- A guest's reference is built automatically from the gift and their name (e.g. `WG-KETTLE-TANTE-MARIE`) — nothing for them to type.
- **Cadeaux → Rapprochement avec le relevé bancaire**: paste lines from a real bank statement, it matches references and amounts and shows what it found before changing anything.
- A gift a guest marks "J'ai payé" is recorded as **Annoncé**, not **Reçu** — the site has no way to see your bank account. Confirm receipt yourself, by hand or via the statement match.

## Sending invitations

- One click on **Envoyer par WhatsApp et e-mail** opens WhatsApp automatically (only one window can open itself per click, by browser design); a second, unmissable button opens the e-mail. The card is downloaded as a backup every time regardless of what the clipboard does.
- A direct, no-code gift link (`mathi-nana.com/#registry`) is shareable from Invitations or right on the registry page, for anyone not on the guest list at all.

## Content

- **Textes**: site address, venue, bank details, dress code, contact e-mail. A changed default (e.g. a corrected e-mail address) heals automatically into any already-saved copy — you don't need to re-save it yourself after a content update ships.
- The traditional wedding (5 March) only ever appears on the personal invitation of a household in the **famille** group, and never on the public Programme page.
- Dress code: vintage blue for everyone, morning through the whole traditional day; elegant dress, not colour-restricted, for the white ceremony and evening.

## Known limits

- No payment gateway. Gifts are EFT only; adding a real payment provider needs its own merchant account and was deliberately not built without one.
- The groom has no solo full-length photo matching the bride's — every available shoot frame has them together.
