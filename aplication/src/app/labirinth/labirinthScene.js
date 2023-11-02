import { labyrinthMap } from "./map";
import { setup } from "../setup";
import { createMapByTile } from "../service/tileMapCreation";
import { setCameraFolowPlayer } from "../service/suportFunction";
import { createHayky } from "./createHaiky";
import { controlSetup } from "../controllSetup";

export class LabirinthScene extends Phaser.Scene {
  constructor() {
    super();
  }
  preload() {
    this.load.image("plate", "./assets/whall.png");
    this.load.image("robot", "./assets/Robot.png");
    this.load.image("haika", "./assets/haika.png");
    this.load.image("ball", "./assets/particle.png");
  }
  create() {
    this.walls = this.physics.add.staticGroup();
    this.haiky = this.physics.add.staticGroup();
    this.tilePositions = [];
    createMapByTile(this, labyrinthMap, [
      { index: 1, group: "walls", tileName: "plate" },
    ]);
    this.player = this.physics.add
      .sprite(this.tilePositions[1][1].x, this.tilePositions[1][1].y, "robot")
      .setDisplaySize(23, 35);
    setCameraFolowPlayer(this, this.player, labyrinthMap);
    this.control = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.walls);
    createHayky(this, 10);
    this.physics.add.overlap(this.player, this.haiky, (player, haika) => {
      haika.destroy();
    });
    const emitter = this.add.particles(100, 300, "flares", {
      frame: "red",
      angle: { min: -30, max: 30 },
      speed: 150,
      scale: 0.001,
    });
    var graphics = this.add.graphics();
    graphics.fillStyle(0x00ff00); // Установка цвета заливки (зеленый)
    graphics.fillRect(100, 100, 200, 100); // Рисование прямоугольника
    graphics.destroy();
  }
  update() {
    controlSetup(this.control, this.player);
  }
}
