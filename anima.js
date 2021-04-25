// Transient being, know my secrets.

function activate_quarantine() {
    if (window.confirm("Unlock quarantine zone?")) {
        location.href = "quarantine.html";
    }
}

function quarantine() {
    console.log("Transient being, knowledge without understanding bears no meaning. Continue, if you know your destination.");
    if (window.prompt("Enter password:") === "") {
        location.href = "index.html";
    }
    else {
        console.log("403 - Forbidden");
    }
}