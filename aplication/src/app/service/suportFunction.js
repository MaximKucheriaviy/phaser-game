import { setup } from "../setup";
export const setCameraFolowPlayer = (context, player) => {
  context.cameras.main.setZoom(setup.cameraZoomLevel);
  context.cameras.main.startFollow(player);
  const lastPosition =
    context.tilePositions[context.tilePositions.length - 1][
      context.tilePositions[context.tilePositions.length - 1].length - 1
    ];
  context.cameras.main.setBounds(
    0,
    0,
    lastPosition.x + setup.tileSize / 2,
    lastPosition.y + setup.tileSize / 2
  );
};

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
