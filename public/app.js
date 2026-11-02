// C2: Lägg till ärendedata, DOM-rendering och formulärhantering steg för steg.


const tickets = [
    {id: 1, title: "WiFi fungerar ej", description: "Datorn kan ej ansluta till WiFi-närtverket, trots att datorn är ansluten", status: "Nytt"},
    {id: 2, title: "Skärmen fungerar inte", description: "Skrivaren är påslagen men skriver inte ut dokumentet. Utskriften ligger kvar i datorns utskriftskö", status: "Pågår"},
    {id: 3, title: "Skärmen saknade bild", description: "Skärmen visade ingen bild trots att datorn var påslagen. Problemet löstes genom att ansluta bildkabeln ordentligt.", status: "Klart"}
];

/*First simple DOM exercise: Append a first ticket to the list*/ 
const ticketList = document.querySelector("#ticket-list");

for (element of tickets){
    item = document.createElement("li");
    item.textContent = element.title + " - " + element.status;
    item.classList.add("ticket");
    ticketList.appendChild(item);
}

