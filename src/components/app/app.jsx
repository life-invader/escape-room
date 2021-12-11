import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import * as S from './app.styled';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import Page404 from '../page-404/page-404';
import { AppRoute } from '../../const/const';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Home()}>
          <Home />
        </Route>
        <Route exact path={AppRoute.DetailedQuest()}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts()}>
          <Contacts />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
