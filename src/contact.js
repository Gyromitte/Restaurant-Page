function showContactTab(){

const content = document.getElementById('content');

const header = document.createElement('header');
header.innerText = "SUSHI N GADA";
content.appendChild(header);

const sushiLogo = document.createElement('img');
sushiLogo.id = "Sushi-logo";
sushiLogo.src = "images/Sushi-logo.png";
sushiLogo.alt = "Sushi-logo";
header.appendChild(sushiLogo);

function createButtons (nameButton){
    let newButton = document.createElement('button');
    newButton.classList = "Header-buttons";
    newButton.innerText = nameButton;
    newButton.id = nameButton;
    header.appendChild(newButton);
}

createButtons("Home");
createButtons("Menu");
createButtons("Contact");
//Changes the color of the button to demostrate that is selected
const Contact = document.getElementById('Contact');
Contact.id = "selected";

const contactTab = document.createElement("contact-tab");
content.appendChild(contactTab);

const tabTitle = document.createElement('p');
tabTitle.classList = "tab-title";
tabTitle.innerText = "Contact";
contactTab.appendChild(tabTitle);

const contact = document.createElement('contact');
content.appendChild(contact);

const phoneImage = document.createElement('img');
phoneImage.src = "images/contact.png";
phoneImage.alt = "phone-image";
contact.appendChild(phoneImage);

const contactNumber = document.createElement('p');
contactNumber.innerText = "87-89-86-69-42-01";
contact.appendChild(contactNumber);
}

