var Spsa = Spsa || {};

Spsa.Game = function () {};

Spsa.Game.prototype = {
  create: function () {
    this.map = this.game.add.tilemap('marioTileMap');
    this.map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

    this.layer = this.map.createLayer('World1');
    this.layer.resizeWorld();

    this.player = this.game.add.sprite(100, 183, 'mario');
    this.game.physics.arcade.enable(this.player);
    this.player.body.maxVelocity.x = 300;
    this.player.body.drag.x = 500;
    // this.player.body.gravity.y = 1000;
    this.player.anchor.setTo(0.5);
    this.player.animations.add('walk', [1, 2, 3, 4], 10, true);

    this.game.camera.follow(this.player);

    this.map.setCollisionBetween(1, 100, true, 'World1');
    this.game.physics.arcade.collide(this.player, this.layer);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  },

  update: function () {
    this.player.body.acceleration.x = 0;
    this.player.body.velocity.y = 0;

    if (this.cursors.up.isDown) {
      this.player.body.velocity.y -= 700;
    }

    if (this.cursors.left.isDown) {
      this.player.scale.x = -1;
      this.player.body.acceleration.x = -300;
      this.player.animations.play('walk');
    }

    if (this.cursors.right.isDown) {
      this.player.scale.x = 1;
      this.player.body.acceleration.x = 300;
      this.player.animations.play('walk');
    }

    if (Phaser.Point.equals(this.player.body.velocity,new Phaser.Point(0,0) ) ){
      this.player.animations.stop();
      this.player.frame = 0;
    }
  }
};
