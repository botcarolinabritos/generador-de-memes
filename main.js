            // PANELES OCULTOS //


const tabImg = document.querySelector("#tab_img");
const tabText = document.querySelector("#tab_text");
tabImg.classList.add("hidden");
tabText.classList.add("hidden");

const botonImagen = document.querySelector("#button_img");
botonImagen.addEventListener("click", function(){
    tabImg.classList.toggle("hidden");
});

const botonTexto = document.querySelector("#button_text");
botonTexto.addEventListener("click", function(){
    tabText.classList.toggle("hidden");
})


            // BOTON CERRAR //

const botonCerrarImg = document.getElementById("button_close_img");
botonCerrarImg.addEventListener("click", function(e){
    // console.log(botonCerrar.parentElement.parentElement);
    botonCerrarImg
        .parentElement
        .parentElement
        .classList
        .toggle("hidden");
});


const botonCerrarTxt = document.getElementById("button_close_txt");
botonCerrarTxt.addEventListener("click", function(e){
    // console.log(botonCerrar.parentElement.parentElement);
    botonCerrarTxt
        .parentElement
        .parentElement
        .classList
        .toggle("hidden");
});




            // MODO OSCURO , MODO CLARO //


const botonModoOscuro = document.querySelector("#button_dark_light");
botonModoOscuro.addEventListener("click", function(){
    document.querySelector(".box_all_container").classList.toggle("header_background_light");
    botonImagen.classList.toggle("color_buttons_black");
    botonTexto.classList.toggle("color_buttons_black");
    botonModoOscuro.classList.toggle("color_buttons_black");
    
    botonModoOscuro.addEventListener("click" , function() {
        botonModoOscuro.innerHTML = `<img
                                src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah.png" alt="external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah" /> Modo oscuro`;
    });  


    document.querySelector(".columns_sections").classList.toggle("main_background_light");
    
    [...document.getElementsByTagName("label")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

    [...document.getElementsByTagName("legend")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

    [...document.getElementsByTagName("select")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

    [...document.querySelectorAll(".right_side_box")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

    [...document.getElementsByTagName("section")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

    [...document.querySelectorAll(".panel_buttons")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });
});



            // BOTON DESCARGA MEME//


const botonDescarga = document.getElementById("box_meme");
const contenedorDescarga = document.getElementById("btn_download");

function descargarMeme () {
    domtoimage.toBlob(contenedorDescarga).then(function (blob) {
        saveAs(blob, 'meme.png');
    })
}

botonDescarga.addEventListener("click", descargarMeme);




            // URL //


const campoUrl = document.getElementById("link_input");
const miMeme = document.getElementById("img_meme");

campoUrl.addEventListener("change", function() {
    miMeme.setAttribute("src", campoUrl.value);
    miMeme.setAttribute("alt", "image.png");}
);


            // FILTROS //

const sliderOpac = document.getElementById("slider_opacity");
const sliderBril = document.getElementById("slider_brightness");
const sliderBlor = document.getElementById("slider_blur");
const sliderContr = document.getElementById("slider_contrast");
const sliderGris = document.getElementById("slider_grayscale");
const sliderSepia = document.getElementById("slider_sepia");
const sliderHue = document.getElementById("slider_hue");
const sliderSatur = document.getElementById("slider_saturation");
const sliderInver = document.getElementById("slider_invert");
// const miMeme = document.getElementById("img_meme");

function actualizarFiltros() {
    const brillo = `brightness(${sliderBril.value})`;
    const desenfoque = `blur(${sliderBlor.value}px)`;
    const contraste = `contrast(${sliderContr.value}%)`;
    const grises = `grayscale(${sliderGris.value}%)`;
    const sepia = `sepia(${sliderSepia.value}%)`;
    const hue = `hue-rotate(${sliderHue.value}deg)`;
    const saturado = `saturate(${sliderSatur.value}%)`;
    const negativo = `invert(${sliderInver.value})`;
    
    const filtros = `${brillo} ${desenfoque} ${contraste} ${grises} ${sepia} ${hue} ${saturado} ${negativo}`;

    if (miMeme != null) {
        miMeme.style.filter = filtros;
        miMeme.style.opacity = sliderOpac.value;
    }
}

sliderOpac.addEventListener("input", actualizarFiltros);
sliderBril.addEventListener("input", actualizarFiltros);
sliderBlor.addEventListener("input", actualizarFiltros);
sliderContr.addEventListener("input", actualizarFiltros);
sliderGris.addEventListener("input", actualizarFiltros);
sliderSepia.addEventListener("input", actualizarFiltros);
sliderHue.addEventListener("input", actualizarFiltros);
sliderSatur.addEventListener("input", actualizarFiltros);
sliderInver.addEventListener("input", actualizarFiltros);

// actualizarFiltros();



                // OCULTAR TEXTO SUPERIOR E INFERIOR //



const supText = document.querySelector(".top_txt");
const infText = document.querySelector(".bottom_txt");

const checkSup = document.getElementById("check_sup_txt");
checkSup.addEventListener("click", function() {
    supText.classList.toggle("hidden");
});

const checkInf = document.getElementById("check_inf_txt");
checkInf.addEventListener("click", function() {
    infText.classList.toggle("hidden");
});



                // CAMBIAR TEXTO SUPERIOR E INFERIOR //


const campoSup = document.querySelectorAll("#text_area")[0];
const campoInf = document.querySelectorAll("#text_area")[1];

campoSup.addEventListener("change", function() {
    supText.children[0].innerHTML = campoSup.value;
});

campoInf.addEventListener("change", function() {
    infText.children[0].innerHTML = campoInf.value;
});