# Bharath Kumar — Portfolio

Live site: **https://heybharathhere.github.io**

A fast, dark-themed portfolio with a live "run the pipeline" data-visualization. Built with plain HTML, CSS, and JavaScript — no build step, no frameworks.

## How to change what the site says

Everything you'd want to edit lives in **one file: `data.js`**.

Open it, change the text between the `"quotes"`, save, and re-upload it. That's it — you never need to touch the other files.

- **Name, role, tagline** → top of `data.js`
- **Social links / email** → the `social` block (leave any as `""` to hide it)
- **About + highlight stats** → the `about` block
- **Skills** → the `skills` list (add/remove groups and items)
- **Projects** → the `projects` list (copy a block to add one; each shows Problem → Approach → Result on click)
- **Pipeline demo numbers** → the `pipeline` block
- **Experience timeline** → the `experience` list

## How to change the colors

Open `style.css`, and near the top edit these two lines:

```css
--accent:#38bdf8;      /* primary highlight */
--accent-2:#34d399;    /* secondary highlight */
```

Change those hex values and the whole site recolors.

## How to publish an update

1. Edit the file (usually `data.js`)
2. In your repo: **Add file → Upload files** (or open the file and use the ✏️ pencil), then **Commit changes**
3. Wait ~1 minute for the **Actions** tab to show a green ✓
4. Refresh your live URL

## Files

| File | What it is |
|------|-----------|
| `index.html` | Page shell (loads everything) |
| `data.js` | **Your content — edit this** |
| `style.css` | Styling and colors |
| `script.js` | Renders the content and runs the animations |
