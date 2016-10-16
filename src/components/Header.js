import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Row className="header">
        <Col md={12}>
          <Row>
            <Col md={12}>
              <img src={this.props.logo} className="header__logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <span className="header__title">{this.props.title}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

Header.propTypes  = {
  logo: React.PropTypes.string,
  title: React.PropTypes.string
}

export default Header;
