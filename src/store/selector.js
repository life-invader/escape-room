import { createSelector } from '@reduxjs/toolkit';
import { QuestGenre } from '../const/const';

const selectQuests = (state) => state.quests;
export const selectCurrentQuestGenre = (state) => state.currentQuestGenre;
export const selectCurrentQuest = (state) => state.currentQuest;

export const selectFilteredQuests = createSelector(selectQuests, selectCurrentQuestGenre, (quests, currentGenre) => {
  if (currentGenre === QuestGenre.AllQuests.type) {
    return quests;
  }

  const filteredQuests = quests.filter((quest) => quest.type === currentGenre);

  return filteredQuests;
});
