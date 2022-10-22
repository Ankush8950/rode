
// window.addEventListener('scroll',function(){
//     let navbar = document.querySelector('#navbar')
//         navbar.classList.toggle('sticky',window.screenY > 0)
//         console.log(navbar)

// })

let menuItems = document.getElementById('menuItems')
let menubtn = document.getElementById('menubtn')
let closebtn = document.getElementById('closebtn')


menubtn.addEventListener('click', function () {
    menuItems.classList.toggle('hidden')
})
closebtn.addEventListener('click', function () {
    menuItems.classList.toggle('hidden')
})


// const accordionHeader = document.querySelectorAll(".accordion-header");
// const plus = document.getElementsByClassName('plus')
// const minus = document.getElementsByClassName('minus')
   
// accordionHeader.forEach((header)=>{
//     header.addEventListener('click',function(){
//         const accordionContent = header.parentElement.querySelector(".accordion-content");
//         let accordionMaxHeight = accordionContent.style.maxHeight;
//         console.log(accordionMaxHeight);


//         if (accordionMaxHeight == '0px' || accordionMaxHeight.length == 0){
//             accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
//             header.classList.remove(plus)
//             header.classList.add(minus)
//         }
//     })
// })

