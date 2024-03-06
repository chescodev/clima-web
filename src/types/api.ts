export type APIWunderground = {
    stationID: string;
    tz: string;
    obsTimeUtc: Date;
    obsTimeLocal: Date;
    epoch: number;
    lat: number;
    lon: number;
    solarRadiationHigh: number;
    uvHigh: number;
    winddirAvg: number;
    humidityHigh: number;
    humidityLow: number;
    humidityAvg: number;
    qcStatus: number;
    metric: WeatherMetrics; // Utilizando el nombre WeatherMetrics para el objeto anidado
}

export type WeatherMetrics = {
    tempHigh: number;
    tempLow: number;
    tempAvg: number;
    windspeedHigh: number;
    windspeedLow: number;
    windspeedAvg: number;
    windgustHigh: number;
    windgustLow: number;
    windgustAvg: number;
    dewptHigh: number;
    dewptLow: number;
    dewptAvg: number;
    windchillHigh: number;
    windchillLow: number;
    windchillAvg: number;
    heatindexHigh: number;
    heatindexLow: number;
    heatindexAvg: number;
    pressureMax: number | null;
    pressureMin: number | null;
    pressureTrend: number | null;
    precipRate: number;
    precipTotal: number;
}
