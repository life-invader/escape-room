import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const Genres = {
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
