import { loadQuests } from './action';

export const fetchQuests = () => async (dispatch, _getState, api) => {
  const { data } = await api.get();
  dispatch(loadQuests(data));
}
