import { setup } from "../setup";

export const createMapByTile = (context, map, options = []) => {
  for (let i = 0; i < map.length; i++) {
    context.tilePositions.push([]);
    for (let j = 0; j < map[0].length; j++) {
      context.tilePositions[i].push({
        x: j * setup.tileSize + setup.tileSize / 2,
        y: i * setup.tileSize + setup.tileSize / 2,
        name: undefined,
      });
      for (let w = 0; w < options.length; w++) {
        if (map[i][j] === options[w].index) {
          context[options[w].group]
            .create(
              context.tilePositions[i][j].x,
              context.tilePositions[i][j].y,
              options[w].tileName
            )
            .setDisplaySize(setup.tileSize, setup.tileSize)
            .refreshBody();
          context.tilePositions[i][j].name = options[w].tileName;
        }
      }
    }
  }
  console.log(context.tilePositions);
};
