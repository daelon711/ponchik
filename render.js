function init(){

    let btn=document.querySelector("button"); //main button for entering
    btn.addEventListener("click",placePhraseInStorage) //places phrase into storage
    
    displayStoredPhrase(); //gets that stored phrase and puts it to p list
    onButtonDelete();
    // localStorage.clear();

}

function getInputClass(){ //returns classclassName
    let input=document.querySelector("input")
    let className = input.classList.value
    return className
}

function getInputReady(){ //returns phrase
    let input=document.querySelector("input")
    let phrase=input.value
    input.value=""
    return phrase
}


function placePhraseInStorage() { //places phrase in storage
    let phrase = getInputReady();
    if (phrase === "") {alert("nope"); return;}


    let className = getInputClass(); // for keta or kato differentiation
    console.log(className)
    let stored = localStorage.getItem(className) || "";
    let newStorage = stored ? stored + "|" + phrase : phrase;
    localStorage.setItem(className, newStorage); //key,value; save under page's className

    
}


function displayStoredPhrase() {//from local storage gets item, splits it by | and places on page
    let className=getInputClass()
    let stored = localStorage.getItem(className)
    if (!stored) return;
    let phrases = stored.split("|")

    let frame=document.querySelector("form+div")
    
    phrases.forEach(phrase => {
        frame.insertAdjacentHTML("beforeend",`<div><p>${phrase}</p><button><i class="fa-solid fa-hand-sparkles"></i></button></div>` );
    });
    
}

function onButtonDelete(){
    let container=document.querySelector("form + div")
    let buttons=document.querySelectorAll("div div button")
    let ps=document.querySelectorAll("div div p")

    container.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON" || e.target.tagName==="I"){
            let btn=e.target.closest("button")
        
            let parag=btn.parentElement.querySelector("p")
            let phrase=parag.textContent
            let className=getInputClass()

            deleteFromStorage(className,phrase)
            parag.remove()
            btn.remove()

        }
        return
    })
}

function deleteFromStorage(className, phraseToDelete) {
        let stored = localStorage.getItem(className);
        if (!stored) return;
    
        let updated = stored
            .split("|")
            .filter(phrase => phrase !== phraseToDelete)
            .join("|");
    
        localStorage.setItem(className, updated);
}
    
    // let className=getInputClass()
    // for (let i = 0; i < buttons.length; i++) {
    //     let keyPhrase = ps[i].textContent; 
    //     buttons[i].addEventListener("click",()=>{
    //         let stored=localStorage.getItem(className)
    //         if (!stored) return;
    //         let newStored=stored.split("|").filter(phrase=>phrase!==keyPhrase).join("|")
    //         localStorage.setItem(className,newStored)
    //         // displayStoredPhrase()
    //         buttons[i].closest("p").remove();
        
    //     })
    // }

    //get button clicked, match it in there, get key name from storage and delete that part

    






init()

