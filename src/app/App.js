import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import PureComponent from './components/PureComponent';
import ReactComponent from './components/ReactComponent';
import CreateElementComponent from './components/CreateElementComponent';
import '../css/main.scss';

export default function App() {
  return (
    <div className={'app-component'}>
      <FunctionalComponent />
      <PureComponent />
      <ReactComponent />
      <CreateElementComponent />
    </div>
  );
}
