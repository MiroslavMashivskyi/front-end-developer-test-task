export const price_model = {
  low: 500,
  middle: 100,
  high: 50
}

const prices = (low: number, middle: number, high: number): number[] => {
  let lowPrice = low * 1;
  let middlePrice = middle * 1.5;
  let highPrice = high * 1.8;
  return [lowPrice, middlePrice, highPrice];
}

export const currentPrices = prices(price_model.low,price_model.middle,price_model.high);
