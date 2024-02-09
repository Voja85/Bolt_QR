function humburger() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function fetch() {/* color in text*/
    var get = document.getElementById("get").value;
    document.getElementById("put").value = get;
}

function fetchput() {/* text in color*/
    var put = document.getElementById("put").value;
    document.getElementById("get").value = put;
}

function fetchin() {/* color in text*/
    var getin = document.getElementById("get-in").value;
    document.getElementById("put-in").value = getin;
}

function fetchputin() {/* text in color*/
    var putin = document.getElementById("put-in").value;
    document.getElementById("get-in").value = putin;
}

function fetchinner() {/* color in text*/
    var getinner = document.getElementById("get-inner").value;
    document.getElementById("put-inner").value = getinner;
}

function fetchputinner() {/* text in color*/
    var putinner = document.getElementById("put-inner").value;
    document.getElementById("get-inner").value = putinner;
}

function fetchouter() {/* color in text*/
    var getouter = document.getElementById("get-outer").value;
    document.getElementById("put-outer").value = getouter;
}

function fetchputouter() {/* text in color*/
    var putouter = document.getElementById("put-outer").value;
    document.getElementById("get-outer").value = putouter;
}

function fetchfilein() {/* text in value*/
    var filein = document.getElementById("file-in").value;
    document.getElementById("file").value = filein;
}

function fetchfile() {/* text in percent*/
    var filein = document.getElementById("file-in").value;
    document.getElementById("file-in").value = filein + "%";
}

