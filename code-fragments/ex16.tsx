csvData.forEach((row) => {
    if (clearList.includes(row["Weather Conditions"])) {
      barData.Clear += 1;
    } else if (rainList.includes(row["Weather Conditions"])) {
      barData.Rainy += 1;
    } else if (fogList.includes(row["Weather Conditions"])) {
      barData.Foggy += 1;
    } else if (snowList.includes(row["Weather Conditions"])) {
      barData.Snowy += 1;
    }

