# README

My [personal super simple page](https://antonhedstrom.github.io) / [antonhedstrom.se](https://antonhedstrom.se).

Served via [Github pages](https://pages.github.com/).

# Development

Npm package `serve` is being used to serve the content in this folder. Install deps with `npm install`.

```sh
npm run dev
```

## Styling

_NOTE_: Do not change the `main.css` directly.

Scss files can be built using:

```sh
npm run build
```

or `npm run dev` in order to watch changes in scss folder.

# Deploy

Built files should be commited in order to be served via Github pages.

"Deploy" by pushing to github (master branch).

Following npm script will build css, do a deploy commit and push to origin master:

```sh
npm run deploy
```
