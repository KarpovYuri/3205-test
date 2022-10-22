import { DEFINE_LANG } from '../utils/constants';

const DEFAULT_LANG = { lang: '' };

const language = (state = DEFAULT_LANG, { type, lang }) => {
  switch (type) {
    case DEFINE_LANG:
      return { lang };
    default:
      return state;
  }
}

export default language;
