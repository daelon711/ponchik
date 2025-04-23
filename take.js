
function init(){
    let ponchiks=document.querySelectorAll("div")
    ponchiks.forEach(girl => girl.addEventListener("click",goToPage))
}

const names=["elene","kato","keta","nini"]

function goToPage(e){
    let girlName = e.currentTarget.getAttribute("id");

    if (names.includes(girlName)){
        window.location.href = `people/${girlName}.html`;
    }
}









init()

// see where its clicked adnd grab according
//  name is what its clicked on