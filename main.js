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
botonCerrarImg.addEventListener("click", function(){
    botonCerrarImg
        .parentElement
        .parentElement
        .classList
        .toggle("hidden");
});


const botonCerrarTxt = document.getElementById("button_close_txt");
botonCerrarTxt.addEventListener("click", function(){
    botonCerrarTxt
        .parentElement
        .parentElement
        .classList
        .toggle("hidden");
});


            // MODO CLARO , MODO OSCURO 
            // nota: el error que ocurre, es que al hacer click en el botón Modo claro, no efectúa el cambio de texto a "Modo oscuro" inmediatamente, hay que clickear dos veces para que aparezca, y una vez que lo hace no vuelve a su valor default, queda aplicado el texto "Modo oscuro".
            //

const botonModoClaro = document.querySelector("#button_light_dark");

botonModoClaro.addEventListener("click", function() {
        botonModoClaro.innerHTML = `<img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah.png" alt="external-idea-bulb-coding-tanah-basah-basic-outline-tanah-basah" /> Modo oscuro`;
});

botonModoClaro.addEventListener("click", function(){
    document.querySelector(".box_all_container").classList.toggle("header_background_light");
    botonImagen.classList.toggle("header_background_light");
    botonTexto.classList.toggle("header_background_light");
    botonModoClaro.classList.toggle("header_background_light");
    tabImg.classList.toggle("header_background_light");
    tabText.classList.toggle("header_background_light");
    restablecerFiltros.classList.toggle("header_background_light");
    document.querySelector(".container_meme_box").classList.toggle("main_background_light");
    document.querySelector(".right_side_box_img").classList.toggle("header_background_light");
    document.querySelector(".right_side_box_txt").classList.toggle("header_background_light");
    
    [...document.getElementsByTagName("label")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

    [...document.getElementsByTagName("select")].forEach((element) => {
        element.classList.toggle("header_background_light");
    });

});


            // BOTON DESCARGA MEME//


const botonDescarga = document.getElementById("btn_download");
const contenedorDescarga = document.getElementById("box_meme");

function descargarMeme () {
    domtoimage.toBlob(contenedorDescarga).then(function (blob) {
        saveAs(blob, 'meme.png');
    })
}

botonDescarga.addEventListener("click", descargarMeme);



                        //  IMAGEN //

            // URL //


const campoUrl = document.getElementById("link_input");
const miMeme = document.getElementById("img_meme");

campoUrl.addEventListener("change", function() {
    miMeme.setAttribute("src", campoUrl.value);
    miMeme.setAttribute("alt", "image.png");
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




            // RESTABLECER FILTROS //


const restablecerFiltros = document.getElementById("restore_btn");

restablecerFiltros.addEventListener("click", function() {
    miMeme.style.filter = "none";


    sliderOpac.value = 1;
    sliderBril.value = 1;
    sliderBlor.value = 0;
    sliderContr.value = 0;
    sliderGris.value = 0;
    sliderSepia.value = 0;
    sliderHue.value = 0;
    sliderSatur.value = 100;
    sliderInver.value = 0;

    restablecerFiltros();
})



                    //  TEXTO


            // CAMBIAR TEXTO SUPERIOR E INFERIOR //


const campoSup = document.querySelectorAll("#text_area")[0];
const campoInf = document.querySelectorAll("#text_area")[1];

campoSup.addEventListener("change", function() {
    supText.children[0].innerHTML = campoSup.value;
});

campoInf.addEventListener("change", function() {
    infText.children[0].innerHTML = campoInf.value;
});



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



            // FUENTE //

const fontOptions = document.getElementById("font_options");

fontOptions.addEventListener("change" , (e) => {
    supText.style.fontFamily = e.target.value;
    infText.style.fontFamily = e.target.value;
})


            // TAMAÑO DE FUENTE 
            
            // TOMA EL CODIGO, NO HAY ERROR EN CONSOLA
            // PERO NO APLICA EL CAMBIO //

const sizeTxt = document.getElementById("font_size_txt");

sizeTxt.addEventListener("input", function(e) {
    let fontSize = this.value;
    supText.style.fontSize = fontSize + "px";
    infText.style.fontSize = fontSize + "px";
})


            // COLOR FUENTE
            //se aplica el cambio, pero una vez que cambio de color, se borra el texto y se superpone el texto del color elegido//

const txtSupParrafo = document.getElementById("txt_sup_inf");
const txtInfParrafo = document.getElementById("txt_inf_sup");
const colorTexto = document.getElementById("color");
const colorFondoTxt = document.getElementById("bground_color_txt");

colorTexto.addEventListener("input", function() {
    txtSupParrafo.textContent = colorTexto.value;
    txtSupParrafo.style.color = colorTexto.value;
    txtInfParrafo.textContent = colorTexto.value;
    txtInfParrafo.style.color = colorTexto.value;
    console.log(colorTexto);
});


            //FONDO COLOR //

colorFondoTxt.addEventListener("input", function() {
    console.log(colorFondoTxt);
    contenedorDescarga.style.backgroundColor = colorFondoTxt.value;
});

            // FONDO TEXTO TRANSPARENTE //


const checkTransparente = document.getElementById("check_transparent");

checkTransparente.addEventListener("click", function() {
    supText.classList.toggle("background_transparent");
})

checkTransparente.addEventListener("click", function() {
    infText.classList.toggle("background_transparent");
})




// const intelineado = document.getElementById("intelineado")
// intelineado.addEventListener("click",function(e){
//     const intelineado1 =intelineado.value;
//     text_superior.style.lineHeight = intelineado1;
//     text_inferior.style.lineHeight= intelineado1;
//     console.log("funcionando", intelineado1)