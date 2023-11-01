import { setup } from "./setup";

export const controlSetup = (control, player) => {
  if (control.up.isDown) {
    player.setVelocityY(setup.moveSpeed * -1);
  } else if (control.down.isDown) {
    player.setVelocityY(setup.moveSpeed);
  } else {
    player.setVelocityY(0);
  }
  if (control.left.isDown) {
    player.setVelocityX(setup.moveSpeed * -1);
  } else if (control.right.isDown) {
    player.setVelocityX(setup.moveSpeed);
  } else {
    player.setVelocityX(0);
  }
};
