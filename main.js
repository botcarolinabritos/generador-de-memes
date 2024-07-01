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

// const botonCerrar = document.querySelector("#button_close");
// botonCerrar.addEventListener("click", function(){
//     botonCerrar
//         .parentElement
//         .parentElement
//         .classList
//         .toggle("hidden");
// });


            // MODO OSCURO , MODO CLARO //


const botonModoOscuro = document.querySelector("#button_dark");
botonModoOscuro.addEventListener("click", function(){
    document.querySelector(".box_all_container").classList.toggle("header_background_light");
    botonImagen.classList.toggle("color_buttons_black");
    botonTexto.classList.toggle("color_buttons_black");
    botonModoOscuro.classList.toggle("color_buttons_black");
    
    if (botonModoOscuro.innerHTML == 'Modo oscuro') {
        botonModoOscuro.innerHTML = 'Modo claro';
    }
    else {
        botonModoOscuro.innerHTML = 'Modo oscuro';
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
    let element = document.createElement("meme");
    element.setAttribute("src", campoUrl.value);
    element.setAttribute("alt", "image.png");
    contenedorDescarga.appendChild(element);
}
);