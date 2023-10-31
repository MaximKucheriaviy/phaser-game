import { setup } from "../setup";
export const setCameraFolowPlayer = (context, player) => {
  context.cameras.main.setZoom(3);
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
