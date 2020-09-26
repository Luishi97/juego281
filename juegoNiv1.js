let fondoJuego;
let rocket;
let grood;
let cursores;
let musica;
let direccion = 1;
let ramas;
let latas;
let animacion;
let tiempoRama = 0;
let tiempoLata = 0;
let puntaje = 0;

const movimiento = [1, 0, 2, 0, 1];

const estadoPricipal = {
  preload: function () {
    //Carga todos los recursos
    juego.load.image("fondo", "./assets/escenarios/nivel1.jpeg");
    juego.load.spritesheet(
      "rocket",
      "./assets/personajes/RocketTr.png",
      280,
      249
    );
    juego.load.audio("background", ["./assets/sonidos/fondo.mp3"]);
    juego.load.spritesheet("grood", "./assets/personajes/GroodTr.png");

    juego.load.image("rama", "./assets/objetos/rama.png");
    juego.load.image("lata", "./assets/objetos/lata.png");
  },

  create: function () {
    //Fondo del juego
    fondoJuego = juego.add.tileSprite(
      0,
      0,
      window.innerWidth,
      window.innerHeight,
      "fondo"
    );
    fondoJuego.anchor.setTo(0, 0);
    fondoJuego.scale.setTo(2);

    //sonidos del juego
    musica = juego.add.audio("background");
    musica.play();

    //ramas
    ramas = juego.add.group();
    ramas.enableBody = true;
    ramas.physicsBodyType = Phaser.Physics.ARCADE;
    ramas.createMultiple(10, "rama");
    ramas.setAll("anchor.x", 0.5);
    ramas.setAll("anchor.y", 1);
    ramas.setAll("scale.x", 0.3);
    ramas.setAll("scale.y", 0.3);
    ramas.setAll("outOfBoundsKill", true);
    ramas.setAll("checkWorldBounds", true);

    //latas
    latas = juego.add.group();
    latas.enableBody = true;
    latas.physicsBodyType = Phaser.Physics.ARCADE;
    latas.createMultiple(10, "lata");
    latas.setAll("anchor.x", 0.5);
    latas.setAll("anchor.y", 1);
    latas.setAll("scale.x", 0.2);
    latas.setAll("scale.y", 0.2);
    latas.setAll("outOfBoundsKill", true);
    latas.setAll("checkWorldBounds", true);

    //rocket
    rocket = juego.add.sprite(0, 0, "rocket");
    rocket.scale.setTo(0.7, 0.7);
    rocket.frame = 1;
    rocket.anchor.setTo(0.5, 0);
    rocket.animations.add("rocketWalkRight", movimiento, 6.5, true);
    rocket.enableBody = true;
    rocket.physicsBodyType = Phaser.Physics.ARCADE;

    //rocket.animations.add("groodWalkLeft", movimiento.reverse(), 6.5, true);
    animacion = juego.add
      .tween(rocket)
      .to(
        { x: window.innerWidth },
        7000,
        Phaser.Easing.Linear.None,
        true,
        0,
        7000,
        true
      );

    animacion.onRepeat.add(girar, this);

    //grood
    grood = juego.add.sprite(1000, window.innerHeight, "grood");
    grood.scale.setTo(0.3, 0.3);
    grood.anchor.setTo(1, 1);

    grood.physicsBodyType = Phaser.Physics.ARCADE;

    //fisicas
    juego.physics.startSystem(Phaser.Physics.ARCADE);
    juego.physics.arcade.enable(grood);
    grood.body.collideWorldBounds = true;

    //boton cursores
    cursores = juego.input.keyboard.createCursorKeys();
  },

  update: function () {
    rocket.animations.play("rocketWalkRight");

    //animamos el juego
    if (cursores.right.isDown) {
      grood.position.x += 5;
      grood.scale.setTo(-0.3, 0.3);
    }
    if (cursores.left.isDown) {
      grood.position.x -= 5;
      grood.scale.setTo(0.3, 0.3);
    }
    if (cursores.right.isUp) {
      grood.animations.stop("groodWalkRight");
    }
    if (cursores.left.isUp) {
      grood.animations.stop("groodWalkLeft");
    }

    let rama;
    if (juego.time.now > tiempoRama) {
      rama = ramas.getFirstExists(false);
    }
    if (rama) {
      rama.reset(rocket.x, rocket.y);
      rama.body.velocity.y = 300;
      tiempoRama = juego.time.now + 3500;
    }

    let lata;
    if (juego.time.now > tiempoLata) {
      lata = latas.getFirstExists(false);
    }
    if (lata) {
      lata.reset(rocket.x, rocket.y);
      lata.body.velocity.y = 300;
      tiempoLata = juego.time.now + 5000;
    }
  },
};

function girar() {
  direccion *= -1;
  rocket.scale.setTo(direccion * 0.7, 0.7);
}

// function dropear() {
//   let rama;
//   // animacion.delay(100);
//   if (juego.time.now > tiempoRama) {
//     rama = ramas.getFirstExists(false);
//   }
//   if (rama) {
//     rama.reset(rocket.x, rocket.y);
//     rama.body.velocity.y = 300;
//     tiempoRama = juego.time.now + 1000;
//   }
// }

// juego.state.add("principal", estadoPricipal);
// juego.state.start("principal");
