var images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "/brackets.svg",
  "/error_404.svg",
  "/perfil.jpg",
  "/skillsbg.svg",
)
