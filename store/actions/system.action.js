import { changeLanguage } from "../reducers/system.reducers";

export const changeLanguageAction = (lang) => async (dispatch) => {
  try {
    dispatch(changeLanguage(lang));
  } catch (error) {
    console.log(error);
  }
};
