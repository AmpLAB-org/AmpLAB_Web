import { Link } from 'react-router';
import logo from '../../assets/logo/logo_1.svg';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <S.Div>
        <Link to="/about">
          <S.Span>About us</S.Span>
        </Link>
        <Link to="/download">
          <S.Span>Download</S.Span>
        </Link>
        <Link to="/contact">
          <S.Span>Contact</S.Span>
        </Link>
        <Link to="/community">
          <S.Span>Community</S.Span>
        </Link>
      </S.Div>
    </S.HeaderContainer>
  );
};

export default Header;
