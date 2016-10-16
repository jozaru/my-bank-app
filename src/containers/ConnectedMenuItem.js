import { connect } from 'react-redux';
import { selectView } from '../actions/actionCreator';
import MenuItem from '../components/MenuItem';


const ConnectedMenuItem = connect((state) => {
  return {
    selectedView: state.view
  };
}, (dispatch) => {
  return {
    selectView: (view, title, logo) => {
      dispatch(selectView(view, title, logo));
    }
  }
})(MenuItem);

export default ConnectedMenuItem;
