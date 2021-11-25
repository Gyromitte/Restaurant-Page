import {showHomeTab} from './home.js';
import {showMenuTab} from './menu.js';
import {showContactTab} from './contact.js';

showHomeTab();

function reAsignEvents(){

const Home = document.getElementById('Home');
Home.addEventListener('click', e=>{
    clearContent();
    showHomeTab();
    reAsignEvents();
});

const Menu = document.getElementById('Menu');
Menu.addEventListener('click', e=>{
    clearContent();
    showMenuTab();
    reAsignEvents();
});

const Contact = document.getElementById('Contact');
Contact.addEventListener('click', e=>{
    clearContent();
    showContactTab();
    reAsignEvents();
});
}

reAsignEvents();
function clearContent(){
    document.getElementById('content').innerHTML = "";
}

