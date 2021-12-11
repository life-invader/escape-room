import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { fetchQuest } from '../../store/api-action';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentQuest } from '../../store/selector';
import { useParams } from 'react-router';
import { DifficultyTitle, QuestGenre } from '../../const/const';
import Spinner from '../common/spinner-main-page/spinner';

const getGenre = (type) => {
  return Object.values(QuestGenre).find((genre) => genre.type === type);
}

const DetailedQuest = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { title, description, coverImg, duration, peopleCount, level, type } = useSelector(selectCurrentQuest);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const [ready, setReady] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  useEffect(() => {
    setReady(false)

    dispatch(fetchQuest(id))
      .then(() => setReady(true));
  }, [dispatch, id])

  if (!ready) {
    return <Spinner />;
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`} // Просто ссылка (без слеша) не отображает картинку (?)
          alt="Квест Маньяк"
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{getGenre(type).title}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount[0]}–{peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{DifficultyTitle[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onBookingBtnClick={onBookingBtnClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
