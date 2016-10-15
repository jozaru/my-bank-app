import React from 'react';
import './App.scss';
import Menu from './components/Menu';
import Header from './components/Header';
import ViewContainer from './view/ViewContainer';
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
