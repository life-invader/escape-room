import { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { sendBookingOrder } from '../../../../store/api-action';

const BookingModal = ({ onBookingBtnClick }) => {
  const dispatch = useDispatch();
  const refModalWindow = useRef(null);

  const [name, setName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [phone, setPhone] = useState('');
  const [isLegal, setIsLegal] = useState(false);

  const formSubmitHandler = (evt) => {
    evt.preventDefault();

    if (!isLegal) {
      return;
    }

    const userData = {
      name,
      peopleCount,
      phone,
      isLegal: false,
    }

    dispatch(sendBookingOrder(userData, sendBookingOrder));
  }

  // Для закрытия окна при клике вне его
  const handleOutsideModalClick = useCallback((evt) => {
    if (!evt.path.includes(refModalWindow.current)) {
      onBookingBtnClick();
    }
  }, [onBookingBtnClick]);

  // Для закрытия окна по нажатию escape
  const handleEscapeKeydown = useCallback((evt) => {
    if (evt.key === 'Escape') {
      if (evt.target.tagName === 'INPUT') {
        return;
      }
      onBookingBtnClick();
    }
  }, [onBookingBtnClick]);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideModalClick);
    document.body.addEventListener('keydown', handleEscapeKeydown);

    return () => {
      document.body.removeEventListener('click', handleOutsideModalClick);
      document.body.removeEventListener('keydown', handleEscapeKeydown);
    }
  }, [handleEscapeKeydown, handleOutsideModalClick])

  return (
    <S.BlockLayer>
      <S.Modal ref={refModalWindow}>
        <S.ModalCloseBtn onClick={onBookingBtnClick}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={(evt) => formSubmitHandler(evt)}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              value={name}
              required
              onInput={(evt) => setName(evt.target.value)}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              maxLength='10'
              minLength='10'
              required
              value={phone}
              onInput={(evt) => setPhone(evt.target.value)}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              value={peopleCount}
              required
              onInput={(evt) => setPeopleCount(Number(evt.target.value))}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              checked={isLegal}
              onChange={() => setIsLegal(!isLegal)}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>)
};

export default BookingModal;
