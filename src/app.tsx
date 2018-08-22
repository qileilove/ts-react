import * as React from 'react';
import { Header, About } from './components';

export class  App extends React.Component<{}>  {
    public render(){
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  );
}}