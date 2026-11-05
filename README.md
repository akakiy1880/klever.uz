# klever.uz

Сайт клуба KLEVER. Статическая страница на GitHub Pages.

Тексты и цены меняются прямо в `index.html`, сборка для этого не нужна.

Если в `index.html` появились новые классы Tailwind или изменён `src/input.css`, пересоберите стили и закоммитьте `assets/css/site.css`:

```sh
npm install
npm run build
```

При изменении страницы обновите `lastmod` в `sitemap.xml`.
