population.push({
    id: i,
    x: (100 * (i % sideSize)) / sideSize, // X-coordinate within 100 units
    y: (100 * Math.floor(i / sideSize)) / sideSize, // Y-coordinate scaled similarly
    infected: false,
    quarantined: false,
    daysInfected: 0,
    daysQuarantined: 0,
    coolDown: false,
    coolDownDays: 0
  })

