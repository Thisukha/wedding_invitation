# Christine & Mayukha Wedding Invitation

A luxury, mobile-first digital wedding invitation built with React and Vite for free GitHub Pages hosting.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

The project is configured for the repository base path:

```js
base: '/wedding_invitation/'
```

The included GitHub Actions workflow in `.github/workflows/deploy.yml` publishes the `dist` folder to GitHub Pages.

## Wedding details included

- Christine Ernadno
- Mayukha De Silva
- 27th January 2027
- Venue link shared via Google Maps
- Local RSVP preview mode without backend storage

## Notes

This is currently a frontend-only invitation and intentionally does not save RSVP data anywhere.