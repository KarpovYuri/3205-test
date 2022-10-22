import { DEFINE_LANG } from "../utils/constants";

export const defineLang = ({ lang }) => ({
  type: DEFINE_LANG,
  lang,
});
