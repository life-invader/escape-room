import logo from 'assets/img/logo.svg';
import { useState } from 'react';
import * as S from './header.styled';

// const LINKS = ['Квесты', 'Новичкам', 'Отзывы', 'Акции', 'Контакты'];
const Links = [
  {
    Link: 'Квесты',
    Path: '/',
  },
  {
    Link: 'Новичкам',
    Path: '#',
  },
  {
    Link: 'Отзывы',
    Path: '#',
  },
  {
    Link: 'Акции',
    Path: '#',
  },
  {
    Link: 'Контакты',
    Path: '/contacts',
  },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    < S.StyledHeader >
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>

            {
              Links.map((item, index) => {
                return (
                  <S.LinkItem key={`${index}_${item.Link}`}>
                    <S.Link to={item.Path} $isActiveLink={activeLink === index ? true : ''} onClick={() => setActiveLink(index)} >{item.Link}</S.Link>
                  </S.LinkItem>
                )
              })
            }


            {/* <S.LinkItem>
              <S.Link to="/">
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="/contacts">Контакты</S.Link>
            </S.LinkItem> */}

          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader >
  )
};

export default Header;
