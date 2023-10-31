import Phaser from "phaser";
import { LabirinthScene } from "./app/labirinth/labirinthScene";

console.log(window.visualViewport.width);

const config = {
  width: 800,
  height: 600,
  scene: LabirinthScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
