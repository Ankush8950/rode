
// window.addEventListener('scroll',function(){
//     let navbar = document.querySelector('#navbar')
//         navbar.classList.toggle('sticky',window.screenY > 0)
//         console.log(navbar)

// })
// navbar
let menuItems = document.getElementById('menuItems')
let menubtn = document.getElementById('menubtn')
let closebtn = document.getElementById('closebtn')


menubtn.addEventListener('click', function () {
    menuItems.classList.toggle('hidden')
})
closebtn.addEventListener('click', function () {
    menuItems.classList.toggle('hidden')
})


// Accordion menu
let accordionHeader = document.getElementsByClassName('accordion-header')
let minus = document.getElementsByClassName('minus')
let plus = document.getElementsByClassName('plus')

let i;

for (i = 0; i < accordionHeader.length; i++){
    accordionHeader[i].addEventListener('click',function(){
        console.log('hey')
        this.classList.toggle('active')
        let accordionContent = this.nextElementSibling;
        if (accordionContent.style.display === 'block'){
            accordionContent.style.display = 'none'
        } 
        else{
            accordionContent.style.display = "block";
        }
    
    })
}