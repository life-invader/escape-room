import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadCurrentQuestGenre } from '../store/action';
import { Genres } from '../const/const';

const initialState = {
  quests: [],
  currentQuestGenre: Genres.AllQuests.type,
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadCurrentQuestGenre, (state, action) => {
      state.currentQuestGenre = action.payload;
    })
})
