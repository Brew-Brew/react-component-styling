import React, { Component } from 'react';
import classNames from 'classnames/bind';

import styles from './App.css';
import Button from './components/Button';
const cx = classNames.bind(styles);


class App extends Component {
  render() {

      return (
        <div>
          <Button>버튼</Button>
        </div>

      );
    }
}

export default App;
