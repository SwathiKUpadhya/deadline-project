

type Camera = {
  distanceRange: {
    min: number,
    max: number
  };
  lightRange: {
    min: number,
    max: number
  };
};

function isCovered(
  targetDistanceRange: any,
  targetLightRange: any,
  cameras: Camera[]
): boolean {
  for (let d = targetDistanceRange.min; d <= targetDistanceRange.max; d++) {
    for (let l = targetLightRange.min; l <= targetLightRange.max; l++) {
      let covered = false;

      for (const camera of cameras) {
        const dr = camera.distanceRange;
        const lr = camera.lightRange;

        if (
          d >= dr.min && d <= dr.max &&
          l >= lr.min && l <= lr.max
        ) {
          covered = true;
          break;
        }
      }

      if (!covered) {
        return false;
      }
    }
  }

  return true;
}