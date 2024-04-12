
const images = document.querySelectorAll(".galeria .img");
const imagesArray = Array.from(images);
const buttonRight = document.querySelector(".fa-solid.fa-angle-right");
const buttonLeft = document.querySelector(".fa-solid.fa-angle-left");
const containers = document.querySelectorAll(".project");

images.forEach(item => {
    
    item.onclick = () => {

        if(item.className != 'img selected'){
            images.forEach(element => {
                element.className = 'img';
            });
            item.className = 'img selected';
        }
        
        loadContent();
    }
});

// buttonRight.onclick = () => {

//     let find = false;
//     let arraySize = (imagesArray.length-1);
//     let index = 0;

//     imagesArray.forEach(item => {

//         if(item.className == 'img selected' && find == false){

//             let strIndex = item.getAttribute('id');
//             strIndex = strIndex.substring(0, strIndex.length - 3);
//             let intIndex = (parseInt(strIndex) + 1);
//             strIndex = intIndex.toString();

//             images.forEach(element => {

//                 element.className = 'img';
//                 let strId2 = element.getAttribute('id');
//                 strId2 = strId2.substring(0, strId2.length - 3);

//                 if(strId2 == strIndex && strId2 != imagesArray.length){

//                     element.className = 'img selected';
//                     find = true;
//                 }
//             });
//         }
//         else if(index == arraySize){

//             index -= 1;
//             console.log(index);
//         }
//     });
//     loadContent();
// }

// buttonLeft.onclick = () => {

//     let find = false;
//     let arraySize = (imagesArray.length-1);
//     let index = 0;

//     imagesArray.forEach(item => {

//         if(item.className == 'img selected' && find == false){

//             let strIndex = item.getAttribute('id');
//             strIndex = strIndex.substring(0, strIndex.length - 3);
//             let intIndex = (parseInt(strIndex) - 1);
//             strIndex = intIndex.toString();

//             images.forEach(element => {

//                 element.className = 'img';
//                 let strId2 = element.getAttribute('id');
//                 strId2 = strId2.substring(0, strId2.length - 3);

//                 if(strId2 == strIndex && strId2 != imagesArray.length){

//                     element.className = 'img selected';
//                     find = true;
//                 }
//             });
//         }
//         else if(index == arraySize){

//             index -= 1;
//             console.log(index);
//         }
//     });
//     loadContent();
// }

function loadContent(){

    images.forEach(item => {
        
        if(item.className == 'img selected'){

            let idMarked = item.getAttribute('id');
            idMarked = idMarked.substring(0, idMarked.length - 3);

            containers.forEach(element => {
                
                let idCont = element.getAttribute('id');
                idCont = idCont.substring(0, idCont.length - 3);
                element.setAttribute('class','project');

                if(idCont == idMarked){

                    element.setAttribute('class','project visible');
                }
            });
        }
    });
}