function init(){

    let btn=document.querySelector("button");
    btn.addEventListener("click",placePhrase)

    displayStoredPhrase();
    // localStorage.clear();

}

function getHtmlName(){
    let input=document.querySelector("input")
    let name = input.classList
    return name
}

function getInput(){
    let input=document.querySelector("input")
    let phrase=input.value
    input.value=""
    return phrase
}


function placePhrase() {
    let phrase = getInput();
    if (phrase === "") {
        console.log("nope");
        return;
    }

    let name = getHtmlName();
    let stored = localStorage.getItem(name) || "";
    let newStorage = stored ? stored + "|" + phrase : phrase;
    localStorage.setItem(name, newStorage); //save under page's name

    let frame = document.querySelector("div");
    frame.insertAdjacentHTML("beforeend", `<p>${phrase}</p>`);
}


function displayStoredPhrase() {
    let name=getHtmlName()
    let stored = localStorage.getItem(name)
    if (!stored) return;
    let phrases = stored.split("|")

    let frame=document.querySelector("div")
    
    phrases.forEach(phrase => {
        frame.insertAdjacentHTML("beforeend", `<p>${phrase}</p>`);
    });
}

init()
