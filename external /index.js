document.addEventListener ("DOMContentLoaded", function(){
    const knop=document.getElementById ("Hallo");

    knop.addEventListener ("click", function(){
        this.innerText = this.innerText === "Hallo!" ? "Tot ziens!" : "Hallo!";
    });
});