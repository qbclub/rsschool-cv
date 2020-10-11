let menuItem = document.querySelectorAll('.menuItem')
let paginatorButton = document.querySelectorAll('.paginator_button')
let paginatorNumber = document.querySelectorAll('.paginator_button_number')

console.dir(paginatorNumber[0])

menuItem.forEach(element => {
    element.addEventListener('click', setActiveClass)
});

paginatorButton.forEach(element => {
    element.addEventListener('click', navigate)
});

function setActiveClass(e) {
    menuItem.forEach(element => {
        element.className = 'menuItem'
    });
    e.target.className = 'menuItem active'

    console.dir(e.target)
}

function navigate(e) {

    if (e.target == paginatorButton[2]) {
        paginatorNumber[0].innerHTML++
        paginatorButton[0].disabled = false
        paginatorButton[1].disabled = false
    }
    if (e.target == paginatorButton[3]) {
        paginatorNumber[0].innerHTML = 10
        paginatorButton[0].disabled = false
        paginatorButton[1].disabled = false
    }
    if (e.target == paginatorButton[1]) {
        paginatorNumber[0].innerHTML--
        paginatorButton[2].disabled = false
        paginatorButton[3].disabled = false
    }
    if (e.target == paginatorButton[0]) {
        paginatorNumber[0].innerHTML = 1
        paginatorButton[2].disabled = false
        paginatorButton[3].disabled = false
    }   

    if (paginatorNumber[0].innerHTML == 10) {
        paginatorButton[3].disabled = true
        paginatorButton[2].disabled = true
    }
    if (paginatorNumber[0].innerHTML == 1) {
        paginatorButton[0].disabled = true
        paginatorButton[1].disabled = true
    }

}