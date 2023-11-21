const menu_mobiles_desktops = document.getElementById("navbar-mobiles-desktops");
const menu_mobile_content = document.getElementById("navbar-mobiles-desktops-content");

let showMenu = false;

function clickMenu(){
    showMenu = !showMenu 

    if(showMenu){
        menu_mobile_content.style.right = 0
        menu_mobile_content.style.opacity = 1
    }else{
        menu_mobile_content.style.right = "-80%"
        menu_mobile_content.style.opacity = 0.5 
    }
}


function clickItems(){
    alert('Funcionalidade em construção')
}

function buttonEntrar(){
    window.location.href = "index_login.html"
}



let menu = false;

function closeMenu(){
    menu = false

    if(menu === true){
        menu_mobile_content.style.right = 0
        menu_mobile_content.style.opacity = 1
    }else{
        menu_mobile_content.style.right = "-80%"
        menu_mobile_content.style.opacity = 0.5 
    }
}