const firstTicket = {
    id: 1,
    title: "WiFi funkar ej",
    description: "Datorn kan inte ansluta till WiFi-nätverket, trots att datorn är ansluten",
    status: "Nytt"
};

const secondTicket = {
    id: 2,
    title: "Skrivaren fungerar ej",
    description: "Det går inte att skriva ut dokumentet. Skrivaren är påslagen, men reagerar inte när en utskrift skickas.",
    status: "Pågår"
};

const thirdTicket = {
    id: 3,
    title: "Skärmen saknade bild",
    description: "Skärmen visade ingen bild trots att datorn var påslagen. Bildkabeln satt löst och problemet löstes när den anslöts ordentligt.",
    status: "Klart"
};

const tickets = [firstTicket, secondTicket, thirdTicket];

function getTitle(ticket) {
    return ticket.title;
}

console.log(tickets.length);

console.log(tickets[2]);

console.log(getTitle(tickets[2]));

for (const ticket of tickets){
    console.log(ticket.title);
}
