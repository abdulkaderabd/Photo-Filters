

let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("huerotate");


let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector('span');
let imgebox = document.querySelector('.imge-box');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

function resetValue() {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    huerotate.value = '0';

}

window.onload = function () {
    download.style.display = 'none';
    reset.style.display = 'none';
    imgebox.style.display = 'none';
}

upload.onchange = function () {
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    imgebox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    }
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none';
    }
}



let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter = `hue-rotate(${huerotate.value}deg)
        blur(${blur.value}px)
         grayscale(${grayscale.value}) 
         sepia(${sepia.value}) 
         brightness(${brightness.value}%)
          contrast(${contrast.value}%) 
          saturate(${saturate.value}%)`;



        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })

})

download.onclick = function () {
    download.href = canvas.toDataURL('image/jpeg');

}