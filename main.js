let btn1 =document.querySelector('#btn1');
let ul1 =document.querySelector('.ul1');

let btn2 =document.querySelector('#btn2');
let ul2 =document.querySelector('.ul2');

let btn3 =document.querySelector('#btn3');
let ul3 =document.querySelector('.ul3');


btn1.addEventListener('click',function(){
    ul1.classList.toggle('hide')
})      
btn2.addEventListener('click', function(){
    ul2.classList.toggle('hide1')
});

btn3.addEventListener('click', function(){
    ul3.classList.toggle('hide2')
});


