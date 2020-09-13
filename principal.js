let fondoJuego;
let boton;
let rocket;
let grood;
let cursores;
let musica;
const movimiento = [1, 0, 2, 0, 1];

var juego = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
  Phaser.CANVAS,
  "bloque_juego"
);
const estadoPricipal = {
  preload: function () {
    //Carga todos los recursos
    juego.load.image("fondo", "./assets/escenarios/nivel1.jpeg");
    juego.load.image("fondo2", "./assets/escenarios/nivel2.jpeg");
    juego.load.spritesheet(
      "rocket",
      "./assets/personajes/RocketTr.png",
      280,
      249
    );
    juego.load.spritesheet("grood", "./assets/personajes/GroodTr.png");
    juego.load.image("btnPlay", "./assets/interfaz/btn_play.png");
    juego.load.audio("background", ["./assets/sonidos/fondo.mp3"]);
  },

  create: function () {
    //Fondo del juego
    fondoJuego = juego.add.tileSprite(
      0,
      0,
      window.innerWidth / 2,
      window.innerHeight / 2,
      "fondo"
    );
    fondoJuego.scale.setTo(3, 2);
    fondoJuego = juego.add.tileSprite(
      window.innerWidth / 2,
      0,
      window.innerWidth / 2,
      window.innerWidth / 2,
      "fondo2"
    );

    //sonidos del juego
    musica = juego.add.audio("background");
    musica.play();

    //rocket
    rocket = juego.add.sprite(0, 0, "rocket");
    rocket.scale.setTo(0.7, 0.7);
    rocket.frame = 1;
    rocket.animations.add("rocketWalkRight", movimiento, 6.5, true);
    rocket.animations.add("rocketWalkLeft", movimiento.reverse(), 6.5, true);

    //grood
    grood = juego.add.sprite(1000, window.innerHeight, "grood");
    grood.scale.setTo(0.3, 0.3);
    grood.anchor.setTo(1, 1);

    //fisicas
    juego.physics.startSystem(Phaser.Physics.ARCADE);
    juego.physics.arcade.enable(rocket);
    rocket.body.collideWorldBounds = true;

    //boton cursores
    cursores = juego.input.keyboard.createCursorKeys();

    //boton play
    boton = juego.add.sprite(juego.width / 2, juego.height / 2, "btnPlay");
    boton.anchor.setTo(0.5, 0.5);
  },

  update: function () {
    //animamos el juego
    if (cursores.right.isDown) {
      rocket.position.x += 2;
      rocket.scale.setTo(0.7, 0.7);
      rocket.animations.play("rocketWalkRight");
    }
    if (cursores.left.isDown) {
      rocket.position.x -= 2;
      rocket.scale.setTo(-0.7, 0.7);
      rocket.animations.play("rocketWalkLeft");
    }
    if (cursores.right.isUp) {
      rocket.animations.stop("rocketWalkRight");
    }
    if (cursores.left.isUp) {
      rocket.animations.stop("rocketWalkLeft");
    }
  },
};

juego.state.add("principal", estadoPricipal);
juego.state.start("principal");
