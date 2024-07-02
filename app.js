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