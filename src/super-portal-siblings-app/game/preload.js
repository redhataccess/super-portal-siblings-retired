var Spsa = Spsa || {};

Spsa.Preload = function () {};

Spsa.Preload.prototype = {
  preload: function () {
    this.load.tilemap('marioTileMap', 'src/super-portal-siblings-app/game/assets/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'src/super-portal-siblings-app/game/assets/super_mario.png');
    this.load.spritesheet('mario', 'src/super-portal-siblings-app/game/assets/mariospritesheet-small.png', 50, 50);
  },
  create: function () {
    this.state.start('Game');
  }
};
