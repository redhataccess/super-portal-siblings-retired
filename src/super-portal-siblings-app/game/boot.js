var Spsa = Spsa || {};

Spsa.Boot = function () {};

Spsa.Boot.prototype = {
  preload: function () {

  },

  create: function () {
    this.game.stage.backgroundColor = '#787878';

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }
};
