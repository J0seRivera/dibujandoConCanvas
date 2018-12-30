var estado = 0;          // estado del click
var colorLinea = "blue";    // color a la linea
var gLinea = document.getElementById("grosor_linea");
var button = document.getElementById("bAceptar");
var cLinea = document.getElementById("color_linea");
var bColor = document.getElementById("bColor");

button.addEventListener("click",dibujarLinea);
bColor.addEventListener("click",dibujarLinea);

var area = document.getElementById("area_de_dibujo");
var papel = area.getContext("2d");
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
// dibujo del borde
var colorBorde = "black"
var ancho = area.width - 1;
var alto = area.height - 1;
dibujarLinea(colorBorde, 1, 1, ancho, 1, papel)
dibujarLinea(colorBorde, ancho, 1, ancho, alto, papel)
dibujarLinea(colorBorde, 1, alto,  ancho, alto, papel)
dibujarLinea(colorBorde, 1, 1, 1, alto, papel)
// Funcion para mousemove
function dibujarMouse(evento){
  if (estado == 1)
  {   // solo se dibujara si esta el click del mouse presionado
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}
// Funcion para mousedown
function presionarMouse(evento){
  estado = 1;         //click presionado
  x = evento.layerX;
  y = evento.layerY;
}
// Funcion para mouseup
function soltarMouse(evento){
  estado = 0;         // click suelto
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  var numero = parseInt(gLinea.value);
  var color = cLinea.value;
  lienzo.beginPath();                  // Inicia el trazo
  lienzo.strokeStyle = color;          // Estilo de trazo (color)
  lienzo.lineWidth = numero;                // Ancho de la linea
  lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
  lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
  lienzo.stroke();                     // Dibuja con el estio de trazo
  lienzo.closePath();                  // Cierra el dibujo
}
