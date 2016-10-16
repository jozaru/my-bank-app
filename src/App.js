import React from 'react';
import './App.scss';
import Menu from './components/Menu';
import Header from './containers/ConnectedHeader';
import ViewContainer from './containers/ViewContainer';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Grid>
          <Header />
          <ViewContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
