var teclas = {
  UP: 38,
  DOWN: 40,
  RIGTH: 39,
  LEFTH: 37
};
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var lienzo = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149,149,151,151);
function dibujarLinea(color, xInicial, yinicial, xFinal, yFinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xInicial, yinicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
  }
function dibujarTeclado(evento)
{
  var colorcito = "blue"
  var movimiento = 1;
  switch (evento.keyCode) {
    case teclas.UP: dibujarLinea(colorcito, x, y, x, y-movimiento); y= y-movimiento; break;
    case teclas.DOWN: dibujarLinea(colorcito, x, y, x, y+movimiento); y= y+movimiento; break;
    case teclas.RIGTH: dibujarLinea(colorcito, x + movimiento, y, x, y); x= x+movimiento; break;
    case teclas.LEFTH: dibujarLinea(colorcito, x-movimiento, y, x, y); x= x-movimiento; break;
  }

}
