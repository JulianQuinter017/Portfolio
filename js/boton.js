
const bMore = document.querySelector("#bMore");
const links = document.querySelector('#links');

const btnSummary1 = document.querySelector('#btn1');
const icon11 = document.querySelector('#btn1-1');
const icon12 = document.querySelector('#btn1-2');

const btnSummary2 = document.querySelector('#btn2');
const icon21 = document.querySelector('#btn2-1');
const icon22 = document.querySelector('#btn2-2');

const btnSummary3 = document.querySelector('#btn3');
const icon31 = document.querySelector('#btn3-1');
const icon32 = document.querySelector('#btn3-2');

const details = document.querySelectorAll('.details');

bMore.addEventListener('click', e =>{
    links.classList.toggle('collapsed');
})

btnSummary1.addEventListener('click', e =>{

    let display = icon11.getAttribute('style');

    if(display == null || display == 'display: none;'){
        icon11.setAttribute('style','display: inline;');
        icon12.setAttribute('style','display: none;');
    }
    else{
        icon11.setAttribute('style','display: none;');
        icon12.setAttribute('style','display: inline;');
    }
})

btnSummary2.addEventListener('click', e =>{

    let display2 = icon21.getAttribute('style');

    if(display2 == null || display2 == 'display: inline;'){
        icon21.setAttribute('style','display: none;');
        icon22.setAttribute('style','display: inline;');
    }
    else{
        icon21.setAttribute('style','display: inline;');
        icon22.setAttribute('style','display: none;');
    }
})

btnSummary3.addEventListener('click', e =>{

    let display3 = icon31.getAttribute('style');

    if(display3 == null || display3 == 'display: inline;'){
        icon31.setAttribute('style','display: none;');
        icon32.setAttribute('style','display: inline;');
    }
    else{
        icon31.setAttribute('style','display: inline;');
        icon32.setAttribute('style','display: none;');
    }
})