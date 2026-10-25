# IT Ticket Tracker

Ett lärandeprojekt av Leo Forsell: bygg en liten IT-ärendehanterare med JavaScript och utveckla en portfolio för praktik med programmering.

## Aktuell status

Projektet är förberett med en plan och grundfiler. Startsidan är en enkel platshållare. Ärendeformulär, ärendelista, backend, databas, tester och CI är ännu inte implementerade.

## Börja här

Läs [portfolio-planen](PORTFOLIO_PLAN_WEB_DEVELOPMENT.md), särskilt avsnittet **Första dagen: måndag 26 oktober**.

Repo och grundfiler är redan skapade. Börja med att fylla i [projektbriefen](docs/project-brief.md) och skissa formuläret och ärendelistan. Fortsätt sedan med HTML i `public/index.html`.

## Projektfiler

- `public/index.html`: sidans struktur.
- `public/styles.css`: sidans utseende.
- `public/app.js`: framtida interaktivitet.
- `docs/project-brief.md`: mål, avgränsning och skiss.
- `PORTFOLIO_PLAN_WEB_DEVELOPMENT.md`: uppgifter, inläsning och klart-kriterier.

## Titta på startsidan

Öppna `public/index.html` i webbläsaren. I detta skede behövs ingen npm-installation.

När lokal lagring och server införs i planen ska sidan köras via en lokal HTTP-server. Startinstruktionerna uppdateras när det finns fungerande serverkod.

## Planerad första version

- Skapa ärenden med rubrik och beskrivning.
- Visa lista och ett ärendes detaljer.
- Ändra status mellan Nytt, Pågår och Klart.
- Spara ärenden i SQLite via ett Express-API.
- Kontrollera kärnflöden med Playwright och GitHub Actions.

Teknikerna är planerade; README uppdateras efter faktiskt genomfört arbete. Appen ska använda fiktiva demodata.

## Tidigare arbete

[SauceDemo och Playwright](https://github.com/leoforsell/saucedemo-playwright-framework) är ett separat projekt med tidigare testarbete.
