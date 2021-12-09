import { createSelector } from '@reduxjs/toolkit';
import { Genres } from '../const/const';

const selectQuests = (state) => state.quests;

const selectCurrentQuestGenre = (state) => state.currentQuestGenre;

export const selectFilteredQuests = createSelector(selectQuests, selectCurrentQuestGenre, (quests, currentGenre) => {
  if (currentGenre === Genres.AllQuests.type) {
    return quests;
  }

  const filteredQuests = quests.filter((quest) => quest.type === currentGenre);

  return filteredQuests;
});
