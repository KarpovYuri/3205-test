import { DEFINE_CURRENCY, GET_RATES } from "../utils/constants";

export const defineLang = ({ currency }) => ({
  type: DEFINE_CURRENCY,
  currency,
});

export const getRates = ({ rates }) => ({
  type: GET_RATES,
  rates,
});
