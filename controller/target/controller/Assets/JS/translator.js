function showEn() {
    var enElements = document.getElementsByClassName("en");
    enElements.append(document.getElementsByClassName("en-button"));
    var ruElements = document.getElementsByClassName("ru");
    ruElements.append(document.getElementsByClassName("ru-button"));
    for (var i = 0; i < ruElements.length; i++) {
        enElements[i].style.display = "block";
        ruElements[i].style.display = "none";
    }
}

function showRu() {
    var enElements = document.getElementsByClassName("en");
    enElements.append(document.getElementsByClassName("en-button"));
    var ruElements = document.getElementsByClassName("ru");
    ruElements.append(document.getElementsByClassName("ru-button"));
    for (var i = 0; i < ruElements.length; i++) {
        enElements[i].style.display = "none";
        ruElements[i].style.display = "block";
    }
}

function selectLanguage(){
    var e = document.getElementById("languagesSelect");
    var value = e.value;
    if(value == 'en'){
        showEn()
    }else if(value == 'ru'){
        showRu()
    }


    console.log(strUser);
}

document.addEventListener("DOMContentLoaded", () => {

    showEn()

});

