import React from 'react';

class Transfer extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.fecha}
        </td>
        <td>
          {this.props.destinatario}
        </td>
        <td>
          {this.props.monto}
        </td>
      </tr>
    );
  }
 }

 Transfer.propTypes = {
   fecha: React.PropTypes.string.isRequired,
   destinatario: React.PropTypes.string.isRequired,
   monto: React.PropTypes.string.isRequired
 }

export default Transfer;
