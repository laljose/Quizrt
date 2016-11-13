import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import SmallComponent from './components/SmallComponent';

ReactDOM.render((
  <MuiThemeProvider>
    <SmallComponent />
  </MuiThemeProvider>
  ), document.getElementById('content'));
