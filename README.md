# GameZone — Base Website

This is the base website before adding individual games. It includes a responsive dark-neon homepage, mobile layout, game library area, search, category filters, and a small game registry.

## Folder structure
- `index.html` — homepage
- `css/style.css` — design and responsive layout
- `js/app.js` — creates game cards, search, and category filtering
- `js/games.js` — registry where each completed game is listed
- `games/` — each game will have its own folder, for example `games/snake/index.html`, `style.css`, and `game.js`
- `assets/images/` and `assets/sounds/` — optional media

## Run / preview
Open `index.html` in a modern browser. For best testing, use a local static server or upload the folder to a static hosting provider. No build process is required.

## Add each game later
1. Create a folder inside `games/` for the new game.
2. Add that game's `index.html`, `style.css`, and `game.js`.
3. Add a registry entry in `js/games.js` with its name, category, description, folder, icon, accent, tagline, controls, and mode.
4. Test desktop and mobile controls, then upload the changed files to hosting.

## Online publishing
This archive has not been published to the internet. To get a live URL, upload the extracted folder to a static hosting provider such as Netlify, GitHub Pages, or Cloudflare Pages. Hosting account setup and upload are still required.
