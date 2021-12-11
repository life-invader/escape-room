import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../const/action';

export const loadQuests = createAction(ActionType.LoadQuests, (quests) => ({ payload: quests }));
export const loadQuest = createAction(ActionType.LoadQuest, (quest) => ({ payload: quest }));
export const loadCurrentQuestGenre = createAction(ActionType.LoadCurrentQuestGenre, (genre) => ({ payload: genre }));
