function aparecerMenu() {
    let element = document.getElementById("itens");
    element.removeAttribute("hidden");
    element.style.display = "flex";
}
function sumirMenu() {
    let element = document.getElementById("itens");
    element.setAttribute("hidden", "");
    element.style.display = "none";
}