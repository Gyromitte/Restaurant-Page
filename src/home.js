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

const homeInfo = document.createElement('home-info');
homeInfo.id = "Home-info";
homeInfo.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis tempor congue. Quisque metus magna, semper id dolor quis, efficitur iaculis lorem. Vestibulum euismod odio lectus, sit amet aliquam mi feugiat at. Quisque in risus quis lectus vehicula venenatis. Vivamus condimentum fringilla ipsum quis porta. Nullam eget lobortis leo. Sed fermentum quis nibh eget accumsan. Vestibulum non tellus quam.";
content.appendChild(homeInfo);

const homeImage = document.createElement('img');
homeImage.id = "Home-image";
homeImage.src = "images/home-image.jpg";
homeImage.alt = "home-Image";
homeInfo.appendChild(homeImage);




