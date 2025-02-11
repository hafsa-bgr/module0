document.addEventListener ("DOMContentLoaded", function(){
    const knop=document.getElementById ("begroeting");

    knop.addEventListener ("click", function(){
        this.innerText = this.innerText === "Hallo!" ? "Tot ziens!" : "Hallo!";
    });
});