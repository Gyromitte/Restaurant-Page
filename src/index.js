showHomeTab();

function clearContent(){
    document.getElementById('content').innerHTML = "";
}

const Home = document.getElementById('selected');
Home.addEventListener('click', e=>{
    clearContent();
    showHomeTab();
});


Menu.addEventListener('click', e=>{
    clearContent();
    showMenuTab();
});


Contact.addEventListener('click', e=>{
    clearContent();
    showContactTab();
});