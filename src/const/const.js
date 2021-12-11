import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const QuestGenre = {
  AllQuests: {
    title: 'Все квесты',
    icon: <IconAllQuests />,
    type: 'all-quests',
  },
  Adventures: {
    title: 'Приключения',
    icon: <IconAdventures />,
    type: 'adventures',
  },
  Horror: {
    title: 'Ужасы',
    icon: <IconHorrors />,
    type: 'horror',
  },
  Mystic: {
    title: 'Мистика',
    icon: <IconMystic />,
    type: 'mystic',
  },
  Detective: {
    title: 'Детектив',
    icon: <IconDetective />,
    type: 'detective',
  },
  SciFi: {
    title: 'Sci-fi',
    icon: <IconScifi />,
    type: 'sci-fi',
  },
}

const Difficulty = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
}

export const DifficultyTitle = {
  [Difficulty.Easy]: 'простой',
  [Difficulty.Medium]: 'средний',
  [Difficulty.Hard]: 'сложный',
}

export const AppRoute = {
  Home: () => '/',
  DetailedQuest: (id = ':id') => `/detailed-quest/${id}`,
  Contacts: () => `/contacts`,
  Beginner: () => '/beginner',
  Review: () => '/review',
  Promotion: () => '/promotion',
}

export const AppPageLink = {
  Home: {
    title: 'Квесты',
    route: AppRoute.Home,
  },
  Beginner: {
    title: 'Новичкам',
    route: AppRoute.Beginner,
  },
  Review: {
    title: 'Отзывы',
    route: AppRoute.Review,
  },
  Promotion: {
    title: 'Акции',
    route: AppRoute.Promotion,
  },
  Contacts: {
    title: 'Контакты',
    route: AppRoute.Contacts,
  },
}

export const ActionType = {
  LoadQuests: 'load-quests',
  LoadQuest: 'load-quest',
  LoadCurrentQuestGenre: 'load-current-quest-genre',
}
