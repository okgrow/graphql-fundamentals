import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import MyPomodoros from './MyPomodoros';

const App = () => (
  <div>
    <nav>
      <div>Pomodoros</div>
      <LoginButtons />
    </nav>
    <MyPomodoros />
  </div>
);

export default App;
