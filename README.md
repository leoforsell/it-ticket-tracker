# IT Ticket Tracker

Ett lärandeprojekt av Leo Forsell: bygg en liten IT-ärendehanterare med JavaScript och utveckla en portfolio för praktik med programmering.

## Aktuell status

Sidan har struktur i HTML och utseende i CSS. Ärendelistan genereras från en JavaScript-array. Formuläret skapar nya ärenden, och tomma rubriker avvisas.

Valideringsmeddelanden visas för närvarande endast i webbläsarens konsol. Nya ärenden försvinner när sidan laddas om. Backend, databas, automatiserade tester och CI är ännu inte implementerade.

Nästa steg är att visa detaljer för varje ärende, möjliggöra statusändringar och spara ärenden i localStorage så att de finns kvar efter omladdning.

## Börja här

Läs [portfolio-planen](PORTFOLIO_PLAN_WEB_DEVELOPMENT.md) för projektets mål och kommande uppgifter. Aktuellt fokus är C2.4: dokumentation och förberedelse av en kort demonstration inför Misa IT.

## Projektfiler

- `public/index.html`: sidans struktur.
- `public/styles.css`: sidans utseende.
- `public/app.js`: hanterar ärendedata, visar ärendelistan och skapar nya ärenden via formuläret med kontroll av tomma rubriker. 
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
