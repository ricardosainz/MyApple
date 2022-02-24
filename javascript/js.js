
// saber si el usuario es mayor o menor de edad
/*var edad = prompt("Escribe tu edad");
if (edad<18){
    alert("Para realizar una compra necesitamos el permiso de tus tutores");
} else {
    alert("¡Ya puedes empezar conseguir tus productos favoritos!");
} */

// validaciones formulario

    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
    myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

        myInput.onkeyup = function() {
            var lowerCaseLetters = /[a-z]/g;
            if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }


        var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

        var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

        if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

}


// menú desplegable iniciar sesion
function desplegable1() {
    // Cogemos la etiqueta li y lo alternamos con el toggle con la clase show que hemos creado en css (que hace que se vean las subsecciones)
    document.getElementById("myDropdown").classList.toggle("show");
}

// menú desplegable redes sociales
function desplegable2() {
    // Cogemos la etiqueta li y lo alternamos con el toggle con la clase show que hemos creado en css (que hace que se vean las subsecciones)
    document.getElementById("myDropdown2").classList.toggle("show2");
}

// menú desplegable soporte
function desplegable3() {
    // Cogemos la etiqueta li y lo alternamos con el toggle con la clase show que hemos creado en css (que hace que se vean las subsecciones)
    document.getElementById("myDropdown3").classList.toggle("show3");
}

// animación de scroll
function apareceScroll(){
    let html = document.getElementsByTagName("html")[0]; // cogemos todo el html
    let fotoAparece = document.getElementsByClassName("fotosScroll"); // almacenamos en fotoAparece los elementos de las clases zoom
    document.addEventListener("scroll",function(){
        let topVent = html.scrollTop;
        for(let i=0; i< fotoAparece.length; i++){
            let topfotoAparece = fotoAparece[i].offsetTop; // topfotoAparece = pixeles que aparecen al hacer scroll
            if(topVent>topfotoAparece - 300){
                fotoAparece[i].style.opacity = "1";
            }
        }
    })
}
apareceScroll();