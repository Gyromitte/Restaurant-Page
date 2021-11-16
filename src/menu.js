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

const menuInfo = document.createElement('div');
menuInfo.id = "Menu-info";
content.appendChild(menuInfo);

const tabTitle = document.createElement('p');
tabTitle.classList = "tab-title";
tabTitle.innerText = "Menu";
menuInfo.appendChild(tabTitle);

const menuContent = document.createElement('menu');
menuInfo.appendChild(menuContent);

function createMenuImages(nameItem, source){
    let newImage = document.createElement('div');
    newImage.classList = "menu-images-container";
    menuContent.appendChild(newImage);
    let image = document.createElement('img');
    image.classList = "menu-images";
    image.src = source;
    newImage.innerText = nameItem;
    newImage.appendChild(image);
}

createMenuImages("Individual Nigiri's", "images/menu/salmon-nigiri.jpg");
createMenuImages("California Roll's", "images/menu/california-roll.jpg");
createMenuImages("Makizushi", "images/menu/makizushi.jpg");

