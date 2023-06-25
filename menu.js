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
function girarAtomo() {
    let element = document.getElementById("atomo_legal");
    element.style.animation = "girando 1.2s ease-in-out 1 forwards";
    element.style.top = "45vh";
    setTimeout(naoGirarAtomo, 1200);
}
function naoGirarAtomo() {
    let element = document.getElementById("atomo_legal");
    element.style.animation = "flutuando 0.7s ease-in-out infinite alternate";
}
