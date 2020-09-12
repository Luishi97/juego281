let fondoJuego;
let boton;
var juego = new Phaser.Game(1366, 657, Phaser.CANVAS, "bloque_juego");
let rect;
const estadoPricipal = {
  preload: function () {
    //Carga todos los recursos
    juego.load.image("fondo", "./assets/escenarios/nivel1.jpeg");
    juego.load.image('rocket','./assets/personajes/Rocket.jpeg');
    juego.load.image('btnPlay', './assets/interfaz/btn_play.png');
  },


  create: function () {
    //Mostrar en pantalle
    fondoJuego = juego.add.tileSprite(0, 0, 1366, 657, "fondo");
    boton = juego.add.sprite(juego.width/2, juego.height/2, "btnPlay");
    boton.anchor.setTo(.5, .5)
    
    //juego.add.sprite(0, 0, "rocket");
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
