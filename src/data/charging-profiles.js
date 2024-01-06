export const chargingProfilesData = {
  chargingProfiles: [
    {
      chargingPower: 10, // in kilowatts (kW)
      chargingDuration: 6, // in hours
      startTime: "2023-11-10T20:00:00",
      endTime: "2023-11-11T02:00:00",
      chargingEfficiency: 90, // 90% efficiency
      batterySOC: {
        start: 20, // 20% at the beginning
        end: 80, // 80% at the end
      },
      gridDemand: 30, // in kilowatts (kW)
      chargingConnectorType: "Level 2",
      userProfile: {
        regularChargingTimes: ["2023-11-10T20:00:00", "2023-11-11T08:00:00"],
        chargingFrequency: "daily",
        preferredChargingPower: 12, // in kilowatts (kW)
      },
      renewableEnergyAvailability: true,
      gridTariffs: {
        peak: 0.15, // Peak electricity cost in $/kWh
        offPeak: 0.08, // Off-peak electricity cost in $/kWh
      },
      vehicleBatteryCharacteristics: {
        capacity: 60, // in kilowatt-hours (kWh)
        chargingCurve: "fast",
        temperatureSensitivity: "moderate",
      },
    },
    {
      chargingPower: 10,
      chargingDuration: 6,
      startTime: "2023-11-10T20:00:00",
      endTime: "2023-11-11T02:00:00",
      chargingEfficiency: 90,
      batterySOC: { start: 20, end: 80 },
      gridDemand: 30,
      chargingConnectorType: "Level 2",
      userProfile: {
        regularChargingTimes: ["2023-11-10T20:00:00", "2023-11-11T08:00:00"],
        chargingFrequency: "daily",
        preferredChargingPower: 12,
      },
      renewableEnergyAvailability: true,
      gridTariffs: { peak: 0.15, offPeak: 0.08 },
      vehicleBatteryCharacteristics: {
        capacity: 60,
        chargingCurve: "fast",
        temperatureSensitivity: "moderate",
      },
    },
    {
      chargingPower: 8,
      chargingDuration: 5,
      startTime: "2023-11-12T18:00:00",
      endTime: "2023-11-13T01:00:00",
      chargingEfficiency: 92,
      batterySOC: { start: 30, end: 75 },
      gridDemand: 25,
      chargingConnectorType: "Level 1",
      userProfile: {
        regularChargingTimes: ["2023-11-12T18:00:00", "2023-11-13T08:00:00"],
        chargingFrequency: "daily",
        preferredChargingPower: 10,
      },
      renewableEnergyAvailability: false,
      gridTariffs: { peak: 0.18, offPeak: 0.1 },
      vehicleBatteryCharacteristics: {
        capacity: 50,
        chargingCurve: "standard",
        temperatureSensitivity: "low",
      },
    },
    {
      chargingPower: 12,
      chargingDuration: 7,
      startTime: "2023-11-14T22:00:00",
      endTime: "2023-11-15T05:00:00",
      chargingEfficiency: 88,
      batterySOC: { start: 25, end: 85 },
      gridDemand: 35,
      chargingConnectorType: "DC Fast Charging",
      userProfile: {
        regularChargingTimes: ["2023-11-14T22:00:00", "2023-11-15T07:00:00"],
        chargingFrequency: "daily",
        preferredChargingPower: 15,
      },
      renewableEnergyAvailability: true,
      gridTariffs: { peak: 0.12, offPeak: 0.06 },
      vehicleBatteryCharacteristics: {
        capacity: 70,
        chargingCurve: "fast",
        temperatureSensitivity: "high",
      },
    },
    {
      chargingPower: 9,
      chargingDuration: 4,
      startTime: "2023-11-16T19:00:00",
      endTime: "2023-11-16T23:00:00",
      chargingEfficiency: 95,
      batterySOC: { start: 40, end: 80 },
      gridDemand: 28,
      chargingConnectorType: "Level 2",
      userProfile: {
        regularChargingTimes: ["2023-11-16T19:00:00", "2023-11-16T22:00:00"],
        chargingFrequency: "occasional",
        preferredChargingPower: 8,
      },
      renewableEnergyAvailability: false,
      gridTariffs: { peak: 0.16, offPeak: 0.09 },
      vehicleBatteryCharacteristics: {
        capacity: 55,
        chargingCurve: "standard",
        temperatureSensitivity: "moderate",
      },
    },
    {
      chargingPower: 11,
      chargingDuration: 6,
      startTime: "2023-11-17T21:00:00",
      endTime: "2023-11-18T03:00:00",
      chargingEfficiency: 85,
      batterySOC: { start: 30, end: 75 },
      gridDemand: 32,
      chargingConnectorType: "Level 2",
      userProfile: {
        regularChargingTimes: ["2023-11-17T21:00:00", "2023-11-18T07:00:00"],
        chargingFrequency: "daily",
        preferredChargingPower: 13,
      },
      renewableEnergyAvailability: true,
      gridTariffs: { peak: 0.14, offPeak: 0.07 },
      vehicleBatteryCharacteristics: {
        capacity: 65,
        chargingCurve: "fast",
        temperatureSensitivity: "high",
      },
    },
    {
      chargingPower: 9,
      chargingDuration: 5,
      startTime: "2023-11-19T17:00:00",
      endTime: "2023-11-19T22:00:00",
      chargingEfficiency: 92,
      batterySOC: { start: 35, end: 80 },
      gridDemand: 28,
      chargingConnectorType: "Level 1",
      userProfile: {
        regularChargingTimes: ["2023-11-19T17:00:00", "2023-11-19T21:00:00"],
        chargingFrequency: "occasional",
        preferredChargingPower: 10,
      },
      renewableEnergyAvailability: false,
      gridTariffs: { peak: 0.17, offPeak: 0.09 },
      vehicleBatteryCharacteristics: {
        capacity: 50,
        chargingCurve: "standard",
        temperatureSensitivity: "moderate",
      },
    },
  ],
};
