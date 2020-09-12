let fondoJuego;
var juego = new Phaser.Game(1200, 650, Phaser.CANVAS, "bloque_juego");
let rect;
const estadoPricipal = {
  preload: function () {
    //Carga todos los recursos
    juego.load.image("fondo", "./assets/escenarios/nivel1.jpeg");
  },

  create: function () {
    //Mostrar en pantalle
    fondoJuego = juego.add.tileSprite(0, 0, 1200, 650, "fondo", {
      frameWidth: 100,
      frameHeight: 100,
    });
    //fondoJuego.scale.setTo(2.5, 1.7);
    // rect = new Phaser.Rectangle(0, 0, 1200, 650);
    // fondoJuego.alignIn(rect, Phaser.TOP_LEFT);
  },

  update: function () {
    //animamos el juego
    //fondoJuego.tilePosition.x -= 1;
  },
};

juego.state.add("principal", estadoPricipal);
juego.state.start("principal");
