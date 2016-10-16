import { connect } from 'react-redux';
import Header from '../components/Header'

const ConnectedHeader = connect((state) => {
  return {
    title: state.title,
    logo: state.logo
  }
})(Header);

export default ConnectedHeader;
