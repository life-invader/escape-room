import { loadQuests, loadQuest } from './action';

export const fetchQuests = () => async (dispatch, _getState, api) => {
  const { data } = await api.get();
  dispatch(loadQuests(data));
}

export const fetchQuest = (id) => async (dispatch, _getState, api) => {
  const { data } = await api.get(`${id}`);
  dispatch(loadQuest(data));
}

export const sendBookingOrder = (userData, callback) => async (_dispatch, _getState, api) => {
  const { data } = await api.post('http://localhost:3001/orders', userData);

  if (data) {
    callback()
  }
}
