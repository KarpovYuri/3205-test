import { GET_RATES } from '../utils/constants';


const DEFAULT_RATES = { rates: {} };

const exchangeRates = (state = DEFAULT_RATES, { type, rates }) => {
  switch (type) {
    case GET_RATES:
      return { rates };
    default:
      return state;
  }
}

export default exchangeRates;
