function hideTransition( array ){
    
    for (let i = 0; i < array.length; ++i) {
        let card = array[i];
        card.classList.add("transition-all")
    }

    window.addEventListener("scroll", function () {
        for (let i = 0; i < array.length; ++i) {
            let card = array[i];
            card.classList.add("transition-all")

            let position = card.getBoundingClientRect();
            if (position.bottom <= window.innerHeight) {
               showElement(card)
            }else {
                hideElement(card)
            }
        }
    });

   
}

function hideElement(element){
    element.classList.add("-translate-x-20");
    element.classList.add("opacity-0");

}
function showElement(element){
    element.classList.remove("-translate-x-20");
    element.classList.remove("opacity-0");

}