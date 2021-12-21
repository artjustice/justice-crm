import * as S from './AppStyle'
import Sidebar from "../Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <Switch>
          <Route path='/' exact>
              <S.App>
                  <Sidebar />
              </S.App>
          </Route>
      </Switch>
  );
}

export default App;
