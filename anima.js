// Transient being, know my secrets.

function activate_quarantine() {
    if (window.confirm("Unlock quarantine zone?")) {
        location.href = "quarantine.html";
    }
}

function quarantine() {
    console.log("Transient being, knowledge without understanding bears no meaning. Continue, if you know your destination.");
    if (window.prompt("To reach the altar of heaven, speak the name of my temple:").toLowerCase().replace(/\s/g, '').includes("santamariainaracoeli")) {
        location.href = "astiya-lu-nuriya.html";
    }
    else {
        console.log("403 - Forbidden");
    }
}
