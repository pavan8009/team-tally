# Team Tally — install guide

A phone app for your group's shared expenses. Same setup as your badminton app: **GitHub Pages + Firebase**.

## 1. Connect Firebase (5 minutes)
1. Open the Firebase console and pick your badminton project (or create a new one).
2. **Project settings → Your apps → Web app → Config**. Copy the values into `config.js`.
3. Set `groupId` in `config.js` (already `goa-waves`). Each group gets its own space.
4. **Firestore Database → Rules**: copy the Team Tally block from `firestore.rules` into your rules, keep your badminton rules below it, then **Publish**.
   These rules block permanent deletes, so nobody can wipe the data. Deleted items stay in *Settings → Recently deleted*.

## 2. Put it online
1. Create a GitHub repo (e.g. `team-tally`) and upload **every file in this folder** (keep the `icons` folder).
2. Repo **Settings → Pages → Deploy from branch → main / root → Save**.
3. Your link: `https://<your-github-name>.github.io/team-tally/`

## 3. Bring back your Goa Waves data
Open the link. On the first screen tap **Restore Goa Waves data**. Your 17 people and the villa booking come back exactly as entered.
(The same data is in `backup.json`, and in *Settings → Restore from a backup file*.)

## 4. Share with the team
Post the link in the WhatsApp group.
- **Android (Chrome):** tap **Install** on the banner, or ⋮ → *Install app*.
- **iPhone (Safari):** Share → *Add to Home Screen*.
It opens full screen with its own icon, and keeps working offline; changes sync when the signal is back.

## Keeping data safe
- Firestore keeps everything in the cloud and syncs live to every phone.
- Deletes are "soft": restore anything from *Settings → Recently deleted*.
- *Settings → Download a backup* saves a JSON file. Do this after big trips.

## Updating the app later
Upload new files to the repo, and change `VERSION` in `sw.js` so phones pick up the update.
