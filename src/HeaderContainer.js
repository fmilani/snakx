import { connect } from 'react-redux';
import Header from './Header.js';

const mapStateToProps = state => {
  return {
    score: state.score,
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
