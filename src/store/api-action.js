import { loadQuests, loadQuest } from './action';
import { ApiRoute } from '../const/const';

export const fetchQuests = () => async (dispatch, _getState, api) => {
  const { data } = await api.get(ApiRoute.Quests());
  dispatch(loadQuests(data));
}

export const fetchQuest = (id) => async (dispatch, _getState, api) => {
  const { data } = await api.get(ApiRoute.DetailedQuest(id));
  dispatch(loadQuest(data));
}

export const sendBookingOrder = (userData, callback) => async (_dispatch, _getState, api) => {
  const { data } = await api.post(ApiRoute.Orders(), userData);

  if (data) {
    callback();
  }
}
