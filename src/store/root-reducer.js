import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest, loadCurrentQuestGenre } from '../store/action';
import { QuestGenre } from '../const/const';

const initialState = {
  quests: [],
  currentQuest: {},
  currentQuestGenre: QuestGenre.AllQuests.type,
}

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.currentQuest = action.payload;
    })
    .addCase(loadCurrentQuestGenre, (state, action) => {
      state.currentQuestGenre = action.payload;
    })
})
