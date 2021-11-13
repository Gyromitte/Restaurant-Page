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
//Changes the color of the button to demostrate that is selected
const Menu = document.getElementById('Menu');
Menu.id = "selected";

createButtons("Contact");

