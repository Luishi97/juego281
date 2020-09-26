var juego = new Phaser.Game(
  window.innerWidth,
  window.innerHeight,
  Phaser.CANVAS,
  "bloque_juego"
);
juego.state.add("Menu", Menu);
juego.state.add("Juego", estadoPricipal);
// juego.state.add("Game_Over", Game_Over);

juego.state.start("Menu");
