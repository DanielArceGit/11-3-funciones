// border color portrait image
document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.imagePortrait');

    img.addEventListener('click', function() {
        if (this.style.border === '2px solid red') {
            this.style.border = '0 solid transparent';
        } else {
            this.style.border = '2px solid red';
        }
    });
});

// calculate total
function calculateTotal () {
    const quantity1 = parseInt(document.getElementById("quantity-sticker1").value) || 0;
    const quantity2 = parseInt(document.getElementById("quantity-sticker2").value) || 0;
    const quantity3 = parseInt(document.getElementById("quantity-sticker3").value) || 0;

    const quantityFinal = quantity1 + quantity2 + quantity3;

    let resultSpan = document.querySelector('.amountResult');

    if (quantityFinal > 10) {
        resultSpan.textContent = "demasiados";
    }
    else {
        resultSpan.textContent = quantityFinal;
    }
}

// password function
function password () {
    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;
    const pass3 = document.getElementById("password3").value;

    const combinedPass = pass1 + pass2 + pass3;

    let resultParagraph = document.querySelector('.passwordResult');

    if (combinedPass === '911') {
        resultParagraph.textContent = "La contraseña 1 es correcta.";
    }
    else if (combinedPass === '714') {
    resultParagraph.textContent = "La contraseña 2 es correcta.";
    }
    else {
    resultParagraph.textContent = "La contraseña es incorrecta"
    }
}

// page reset
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("quantity-sticker1").value = "";
    document.getElementById("quantity-sticker2").value = "";
    document.getElementById("quantity-sticker3").value = "";


    document.getElementById("password1").selectedIndex = 0;
    document.getElementById("password2").selectedIndex = 0;
    document.getElementById("password3").selectedIndex = 0;
});