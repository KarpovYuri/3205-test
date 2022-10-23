import { DEFINE_CURRENCY } from '../utils/constants';

const DEFAULT_CURRENCY = { currency: '' };

const currentCurrency = (state = DEFAULT_CURRENCY, { type, currency }) => {
  switch (type) {
    case DEFINE_CURRENCY:
      return { currency };
    default:
      return state;
  }
}

export default currentCurrency;
