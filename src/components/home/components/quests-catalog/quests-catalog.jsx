import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Genres } from '../../../../const/const';
import { loadCurrentQuestGenre } from '../../../../store/action';
import { selectFilteredQuests } from '../../../../store/selector';

const QuestsCatalog = () => {
  const quests = useSelector(selectFilteredQuests);
  const currentQuestGenre = useSelector((state) => state.currentQuestGenre);
  const dispatch = useDispatch();

  return (
    <>
      <S.Tabs>

        {
          Object.values(Genres).map(({ title, icon, type }, index) => {
            return (
              <S.TabItem key={`${index}_${title}`}>
                <S.TabBtn isActive={currentQuestGenre === type ? true : ''} onClick={() => dispatch(loadCurrentQuestGenre(type))}>
                  {icon}
                  <S.TabTitle>{title}</S.TabTitle>
                </S.TabBtn>
              </S.TabItem>
            )
          })
        }

      </S.Tabs>

      <S.QuestsList>

        {
          quests.map(({ id, level, peopleCount, previewImg, title }) => {
            return (
              <S.QuestItem key={`${title}_${id}`}>
                <S.QuestItemLink to="/quest">
                  <S.Quest>
                    <S.QuestImage
                      src={previewImg}
                      width="344"
                      height="232"
                      alt={`квест ${title}`}
                    />

                    <S.QuestContent>
                      <S.QuestTitle>{title}</S.QuestTitle>

                      <S.QuestFeatures>
                        <S.QuestFeatureItem>
                          <IconPerson />
                          {`${peopleCount[0]}–${peopleCount[1]} чел`}
                        </S.QuestFeatureItem>
                        <S.QuestFeatureItem>
                          <IconPuzzle />
                          {level}
                        </S.QuestFeatureItem>
                      </S.QuestFeatures>
                    </S.QuestContent>
                  </S.Quest>
                </S.QuestItemLink>
              </S.QuestItem>
            )
          })
        }

      </S.QuestsList>
    </>)
};

export default QuestsCatalog;
