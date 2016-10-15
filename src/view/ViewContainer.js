import React from 'react';
import { connect } from 'react-redux';
import * as viewConstants from './viewConstants';
import TransferCreate from './TransferCreate';
import TranfersFilter from './TransfersFilter';
import TransfersList from './TransfersList';
import { selectView } from '../action/actionCreator';
import { Row, Col } from 'react-bootstrap';
import wallet from '../wallet.svg';

export class ViewContainer extends React.Component {
  componentDidMount() {
    this.props.selectView(viewConstants.HOME, viewConstants.HOME_TITLE, wallet);
  }

  render() {
    switch (this.props.view) {
      case viewConstants.HOME:
        return (
          <Row className="content">
            <Col md={12} className="content__title">
              <span>Por favor selecciona una opcion del menú</span>
            </Col>
          </Row>
        );
      case viewConstants.CREATE_TRANSFER:
        return (
          <Row className="content">
            <Col md={4} mdOffset={4}>
              <TransferCreate />
            </Col>
          </Row>
        );
      case viewConstants.TRANSFERS_HISTORY:
        return (
          <Row className="content">
            <Col md={4} mdOffset={4}>
              <TranfersFilter />
              <TransfersList />
            </Col>
          </Row>
        );
      default:
        return (
          <Row className="content">
            <Col md={12}>
              <span></span>
            </Col>
          </Row>
        );
    }
  }
}

ViewContainer.propTypes = {
  selectView: React.PropTypes.func.isRequired,
  view: React.PropTypes.string
}

const ConnectedViewContainer = connect((state) => {
  return {
    view: state.view
  }
}, (dispatch) => {
  return {
    selectView: (view, title, logo) => {
      dispatch(selectView(view, title, logo));
    }
  }
})(ViewContainer);

export default ConnectedViewContainer;
