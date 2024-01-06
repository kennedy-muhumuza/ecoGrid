export const storageOptimization = {
  storageOptimizationParameters: [
    {
      storageCapacity: 500, // in kilowatt-hours (kWh)
      initialSOC: 75, // 75% initial state of charge
      chargingEfficiency: 90, // 90% charging efficiency
      dischargingEfficiency: 85, // 85% discharging efficiency
      maxChargeRate: 100, // in kilowatts (kW)
      maxDischargeRate: 120, // in kilowatts (kW)
      roundTripEfficiency: 80, // 80% round-trip efficiency
      storageControlStrategy: "peakShaving",
      gridTariffs: {
        peak: 0.15, // Peak electricity cost in $/kWh
        offPeak: 0.08, // Off-peak electricity cost in $/kWh
      },
      renewableEnergyAvailability: true,
      loadProfile: "residential",
      weatherConditions: {
        temperature: 25, // in degrees Celsius
        solarRadiation: 5.6, // in kWh/m^2/day
      },
    },
    {
      storageCapacity: 600,
      initialSOC: 80,
      chargingEfficiency: 92,
      dischargingEfficiency: 88,
      maxChargeRate: 110,
      maxDischargeRate: 130,
      roundTripEfficiency: 75,
      storageControlStrategy: "loadShifting",
      gridTariffs: {
        peak: 0.18,
        offPeak: 0.1,
      },
      renewableEnergyAvailability: false,
      loadProfile: "commercial",
      weatherConditions: {
        temperature: 30,
        solarRadiation: 6.2,
      },
    },
    {
      storageCapacity: 450,
      initialSOC: 70,
      chargingEfficiency: 88,
      dischargingEfficiency: 80,
      maxChargeRate: 95,
      maxDischargeRate: 110,
      roundTripEfficiency: 78,
      storageControlStrategy: "peakShifting",
      gridTariffs: {
        peak: 0.12,
        offPeak: 0.07,
      },
      renewableEnergyAvailability: true,
      loadProfile: "industrial",
      weatherConditions: {
        temperature: 22,
        solarRadiation: 4.8,
      },
    },
  ],
};
