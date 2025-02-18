document.getElementById("themaKnop").addEventListener("click", function() {
    console.log("button clicked!");
    var body = document.body;
    var button = document.getElementById("themaKnop");
    
    body.classList.toggle("dark-theme");
    
    if (body.classList.contains("dark-theme")) {
        button.textContent = "Licht thema";
    } else {
        button.textContent = "Donker thema";
    }
});
