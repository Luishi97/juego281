var juego = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
  Phaser.CANVAS,
  "bloque_juego"
);
juego.state.add("Menu", Menu);
juego.state.add("JuegoNivel1", estadoPricipal);
juego.state.add("GameOver", GameOver);

juego.state.start("Menu");
