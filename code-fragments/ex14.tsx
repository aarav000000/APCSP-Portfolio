if (
    getColorDifference(currentPixelColor,pixelAboveColor) > colorThreshold ||
    getColorDifference(currentPixelColor,pixelLeftColor) > colorThreshold ||
    getColorDifference(currentPixelColor,pixelRightColor) > colorThreshold ||
    getColorDifference(currentPixelColor,pixelBelowColor) > colorThreshold
    ) {

    outputPixels[currentPixelIndex] = 0;
    outputPixels[currentPixelIndex + 1] = 0;
    outputPixels[currentPixelIndex + 2] = 0;
  }
