const content = document.getElementById('content');

const header = document.createElement('header');
header.innerText = "SUSHI N GADA";
content.appendChild(header);

const sushiLogo = document.createElement('img');
sushiLogo.id = "Sushi-logo";
sushiLogo.src = "images/Sushi-logo.png";
header.appendChild(sushiLogo);

function createButtons (nameButton){
    let newButton = document.createElement('button');
    newButton.classList = "Header-buttons";
    newButton.innerText = nameButton;
    header.appendChild(newButton);
}
createButtons("Home");
createButtons("Menu");
createButtons("Contact");


