var Spsa = Spsa || {};

Spsa.Preload = function () {};

Spsa.Preload.prototype = {
  preload: function () {
    var cacheKey = Phaser.Plugin.Tiled.utils.cacheKey;

    this.load.spritesheet('mario', 'src/super-portal-siblings-app/game/assets/mariospritesheet-small.png', 50, 50);

    this.load.tiledmap(cacheKey('testmap', 'tiledmap'),  'src/super-portal-siblings-app/game/assets/map/testmap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image(cacheKey('testmap', 'tileset', 'super_mario'), 'src/super-portal-siblings-app/game/assets/super_mario.png');
  },
  create: function () {
    this.state.start('Game');
  }
};
