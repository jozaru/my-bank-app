import React from 'react';
import Transfer from './Transfer';
import { connect } from 'react-redux';
import { initTransfers } from '../action/actionCreator';
import { Row, Col, Table } from 'react-bootstrap';

export class TransfersList extends React.Component {
  componentDidMount() {
    this.props.initTransfers();
  }

  render() {
    if (this.props.loading) {
      return (
        <Row className="content">
          <Col md={12} className="content__title">
            <span>Buscando transferencias...</span>
          </Col>
        </Row>
        );
    }
    if (this.props.transfers) {
      const transfers = this.props.transfers.map((tranfer, index) => {
        return <Transfer
                  key={index}
                  fecha={tranfer.fecha}
                  destinatario={tranfer.destinatario}
                  monto={tranfer.monto}
               />
      })
      return (
        <Row className="content">
          <Col md={12}>
            <Table striped bordered condensed hover responsive>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Destinatario</th>
                  <th>Monto</th>
                </tr>
              </thead>
                <tbody>
                  {transfers}
                </tbody>
            </Table>
          </Col>
        </Row>
      );
    }
    if (this.props.error) {
      return (
        <Row className="content">
          <Col md={12} className="content__title">
            <span>No se encontraron transferencias para las fechas indicadas</span>
          </Col>
        </Row>
      );
    }
    return (<br/>);
  }
}

TransfersList.propTypes = {
  loading: React.PropTypes.bool,
  transfers: React.PropTypes.array,
  error: React.PropTypes.bool,
  initTransfers: React.PropTypes.func.isRequired
}

const ConnectedTransfersList = connect((state) => {
  return {
    transfers: state.transfers,
    loading: state.loading,
    error: state.error
  }
}, (dispatch) => {
  return {
    initTransfers: () => {
      dispatch(initTransfers());
    }
  }
})(TransfersList);

export default ConnectedTransfersList;
