import React from 'react';
import ReactDOM from 'react-dom';
import AutorQuiz from './AutorQuiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutorQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});
