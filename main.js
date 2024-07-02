            //PANELES OCULTOS//


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


const botonModoOscuro = document.querySelector("#button_dark");
botonModoOscuro.addEventListener("click", function(){
    document.querySelector(".box_all_container").classList.toggle("header_background_light");
    botonImagen.classList.toggle("color_buttons_black");
    botonTexto.classList.toggle("color_buttons_black");
    botonModoOscuro.classList.toggle("color_buttons_black");
    
    if (botonModoOscuro.innerHTML == 'Modo oscuro') {
        botonModoOscuro.innerHTML = `<img
                            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah.png"
                            alt="external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah" /> Modo claro` ;
    }
    else {
        botonModoOscuro.innerHTML = `<img
                            src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah.png"
                            alt="external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah" /> Modo oscuro`;
    }
    document.querySelector(".columns_sections").classList.toggle("main_background_light");
    // tabImg.classList.toggle("main_background_light").toggle("color_buttons_black");
});


            // BOTON DESCARGA //


const botonDescarga = document.querySelector(".button_download");
const contenedorDescarga = document.querySelector(".all_text_box");

function descargarMeme () {
    domtoimage.toBlob(contenedorDescarga).then(function (blob) {
        saveAs(blob, 'meme.png')
    }
);
}

botonDescarga.addEventListener("click", descargarMeme);


            // URL //


const campoUrl = document.getElementById("link_input");

campoUrl.addEventListener("change", function() {
    let element = document.createElement("img");
    element.setAttribute("src", campoUrl.value);
    element.setAttribute("alt", "image.png");
    element.setAttribute("id", "img_meme");
    console.log(element);
    document.querySelector(".img_medium").appendChild(element);

}
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
            const imagen = document.getElementById("img_meme");
            
            // Funcion para actualizar los filtros en todo momento
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
                imagen.style.filter = filtros;
                imagen.style.opacity = sliderOpac.value;
            }
            
            // Agregado de eventos para cada uno de los sliders
            sliderOpac.addEventListener("input", actualizarFiltros);
            sliderBril.addEventListener("input", actualizarFiltros);
            sliderBlor.addEventListener("input", actualizarFiltros);
            sliderContr.addEventListener("input", actualizarFiltros);
            sliderGris.addEventListener("input", actualizarFiltros);
            sliderSepia.addEventListener("input", actualizarFiltros);
            sliderHue.addEventListener("input", actualizarFiltros);
            sliderSatur.addEventListener("input", actualizarFiltros);
            sliderInver.addEventListener("input", actualizarFiltros);
            
            // Inicializacion con los valores actuales
            actualizarFiltros();



