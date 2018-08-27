import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage, StudyPage, MemberPageContainer } from './components';

export class AppRouter extends React.Component<{}>  {
   public render() {return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
          <Route path="/study" component={StudyPage} />
          <Route path="/member" component={MemberPageContainer} />
        </Switch>
      </div>
    </HashRouter>
  );
}
}