var Spsa = Spsa || {};

Spsa.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

Spsa.game.state.add('Boot', Spsa.Boot);
Spsa.game.state.add('Preload', Spsa.Preload);
Spsa.game.state.add('Game', Spsa.Game);

Spsa.game.state.start('Boot');
