import * as S from './AppStyle'
import Sidebar from "../Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import Content from "../Content/Content";

function App() {
  return (
      <Switch>
          <Route path='/' exact>
              <S.App>
                  <Sidebar />
                  <Content />
              </S.App>
          </Route>
      </Switch>
  );
}

export default App;
