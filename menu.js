const Menu = {
  preload: function () {
    juego.stage.backgroundColor = "#FFF";
    juego.load.image("boton", "./assets/interfaz/btn_play.png");
  },

  create: function () {
    const boton = this.add.button(
      juego.width / 2,
      juego.height / 2,
      "boton",
      this.iniciarJuego,
      this
    );
    boton.anchor.setTo(0.5);

    const txtIniciar = juego.add.text(
      juego.width / 2,
      juego.height / 2 - 85,
      "IniciarJuego",
      { font: "bold 24px sans-serif", fill: "black", align: "center" }
    );
    txtIniciar.anchor.setTo(0.5);
    const txtTitulo = juego.add.text(
      juego.width / 2,
      juego.height / 2 - 125,
      "Groooood!!",
      { font: "bold 30px sans-serif", fill: "black", align: "center" }
    );
    txtTitulo.anchor.setTo(0.5);
  },

  iniciarJuego: function () {
    this.state.start("Juego");
  },
};
