import logo from 'assets/img/logo.svg';
import { useState } from 'react';
import * as S from './header.styled';
import { AppRoute, AppPageLink } from '../../../const/const';

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    < S.StyledHeader >
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Home()}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>

            {
              Object.values(AppPageLink).map(({ title, route }, index) => {
                return (
                  <S.LinkItem key={`${index}_${title}`}>
                    <S.Link to={route} $isActiveLink={activeLink === index ? true : ''} onClick={() => setActiveLink(index)} >{title}</S.Link>
                  </S.LinkItem>
                )
              })
            }

          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader >
  )
};

export default Header;
