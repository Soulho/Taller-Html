let menuVisible = false;
//show or hide menu according to size
function showHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
//Hide menu on click
function select(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Habilites effect
function habilitiesEffect(){
    var skills = document.getElementById("skills");
    var distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance >= 300){
        let abilities = document.getElementsByClassName("progress");
        abilities[0].classList.add("python");
        abilities[1].classList.add("java");
        abilities[2].classList.add("javaScript");
        abilities[3].classList.add("htmlcss");
        abilities[4].classList.add("c");
        abilities[5].classList.add("communication");
        abilities[6].classList.add("teamwork");
        abilities[7].classList.add("dedication");
        abilities[8].classList.add("leadership");
        abilities[9].classList.add("ei");
        
    }
}

//Scrolling to use the efect
window.onscroll = function(){
    habilitiesEffect();
}