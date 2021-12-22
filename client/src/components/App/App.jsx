import * as S from './AppStyle'
import Sidebar from "../Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import Main from "../Content/Main/Main";
import Content from "../Content/Content";
import Auth from "../Auth/Auth";

function App() {
  return (
      <Switch>
          <Route path='/' exact>
              <S.App>

                  <Sidebar />
                  <Content content={<Main />} />
                  {/*<Auth />*/}
              </S.App>
          </Route>
      </Switch>
  );
}

export default App;
