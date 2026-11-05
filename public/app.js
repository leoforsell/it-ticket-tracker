// C2: Lägg till ärendedata, DOM-rendering och formulärhantering steg för steg.


const tickets = [
    {id: 1, title: "WiFi fungerar ej", description: "Datorn kan ej ansluta till WiFi-närtverket, trots att datorn är ansluten", status: "Nytt"},
    {id: 2, title: "Skärmen fungerar inte", description: "Skrivaren är påslagen men skriver inte ut dokumentet. Utskriften ligger kvar i datorns utskriftskö", status: "Pågår"},
    {id: 3, title: "Skärmen saknade bild", description: "Skärmen visade ingen bild trots att datorn var påslagen. Problemet löstes genom att ansluta bildkabeln ordentligt.", status: "Klart"}
];

/*First simple DOM exercise: Append a first ticket to the list*/ 
const ticketList = document.querySelector("#ticket-list");

function showTicketDetails(ticket){
    console.log(ticket);
    const ticketDetails = document.querySelector("#ticket-details");
    const id = document.createElement("p");
    id.textContent = "Ärendenummer: " + ticket.id;
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const status = document.createElement("p");
    const button = document.createElement("button");
    function handleClick(){
        button.type = "button";
        ticket.status = "Klart";
        renderTickets(tickets);
        showTicketDetails(ticket);
        console.log(ticket.status);
    }
    button.textContent = "Markera som klart";
    button.addEventListener("click", handleClick);
    title.textContent = ticket.title;
    description.textContent = ticket.description;
    status.textContent = "Status: " + ticket.status;   
    
    const label = document.createElement("label");
    label.textContent = "Status";
    label.htmlFor = "status";
    
    const dropdown = document.createElement("select");
    dropdown.id = "status";
    
    const firstStatus = document.createElement("option");
    firstStatus.textContent = "Nytt";
    
    const secondStatus = document.createElement("option");
    secondStatus.textContent = "Pågår";
    
    const thirdStatus = document.createElement("option");
    thirdStatus.textContent = "Klart";
    
    dropdown.appendChild(firstStatus);
    dropdown.appendChild(secondStatus);
    dropdown.appendChild(thirdStatus);
    
    dropdown.value = ticket.status;
    
    ticketDetails.replaceChildren(title, id, description, status, label, dropdown, button);
    
    function handleSelect(){
        ticket.status = dropdown.value;
        renderTickets(tickets);
        showTicketDetails(ticket);
    }

    dropdown.addEventListener("change", handleSelect);
}

function renderTickets(tickets){
    ticketList.replaceChildren();

    for (const element of tickets){
        const item = document.createElement("li");
        item.textContent = element.title + " - " + element.status;
        item.classList.add("ticket");
        const button = document.createElement("button");
        button.textContent = "Visa detaljer";
        button.type = "button";
        item.appendChild(button);
        ticketList.appendChild(item);
        button.addEventListener("click",() => {
            showTicketDetails(element);
        })
    }
}


const form = document.querySelector("form");

const titleInput = document.querySelector("#ticket-title");

const descriptionInput = document.querySelector("#ticket-description");

renderTickets(tickets);

/*A function for handling the form submission*/
function handleSubmission(event){
    event.preventDefault();
    
    const title = titleInput.value.trim();
    
    if(title === ""){
        console.log("Ange en rubrik.");
        return;
    }

    const newTicket = {
        id : tickets.length + 1,
        title: title,
        description: descriptionInput.value.trim(),
        status: "Nytt"
    };

    tickets.push(newTicket);
    renderTickets(tickets);
    console.log(newTicket);

};

console.log(tickets.length);

form.addEventListener("submit", handleSubmission);








