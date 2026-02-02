import logo from '../../assets/logo/logo_1.svg';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
        <img src={logo}/>
      <S.Div>
        <S.Span>About us</S.Span>
        <S.Span>Download</S.Span>
        <S.Span>Contact</S.Span>
        <S.Span>Contact</S.Span>
      </S.Div>
    </S.HeaderContainer>
  );
};

export default Header;
