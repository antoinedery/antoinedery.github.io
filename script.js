function selectNav(id) {
    var slides = document.getElementsByClassName("selectedNav");
    for (var i = 0; i < slides.length; i++) 
        slides.item(i).classList.remove("selectedNav")
    
    if(slides.length == 0)
        document.getElementById(id).click
    document.getElementById(id).classList.add("selectedNav");
}

function selectLanguageEn() {
    window.location.href='/en/#home'
    var slides = document.getElementsByClassName("selectedLanguage");
    for (var i = 0; i < slides.length; i++) 
        slides.item(i).classList.remove("selectedLanguage")
    
    if(slides.length == 0)
        document.getElementById('en').click
    document.getElementById('en').classList.add("selectedLanguage");
}

function selectLanguageFr() {
    window.location.href='/fr/#home'
    var slides = document.getElementsByClassName("selectedLanguage");
    for (var i = 0; i < slides.length; i++) 
        slides.item(i).classList.remove("selectedLanguage")
    
    if(slides.length == 0)
        document.getElementById('fr').click
    document.getElementById('fr').classList.add("selectedLanguage");
}