import { getRandomInt } from "../service/suportFunction";
import { setup } from "../setup";

export const createHayky = (context, count) => {
  for (let i = 0; i < count; i++) {
    while (true) {
      const randomX = getRandomInt(0, context.tilePositions[0].length - 1);
      const randomY = getRandomInt(0, context.tilePositions.length - 1);
      if (randomX === 1 && randomY === 1) {
        continue;
      }
      if (!context.tilePositions[randomY][randomX].name) {
        context.haiky
          .create(
            context.tilePositions[randomY][randomX].x,
            context.tilePositions[randomY][randomX].y,
            "haika"
          )
          .setDisplaySize(setup.haikaSize, setup.haikaSize)
          .refreshBody();
        context.tilePositions[randomY][randomX].name = "haika";
        break;
      }
    }
  }
};
