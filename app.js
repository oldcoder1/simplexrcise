let box = document.querySelector('.box')
let cevron = document.querySelector('.icon')
let sheet = document.querySelector('.sheet')

box.addEventListener('click', function(){
if(sheet.classList.contains('change')){
    sheet.classList.remove('change')
    cevron.classList.remove('circle')
}
else{
    sheet.classList.add('change')
    cevron.classList.add('circle')
}


});