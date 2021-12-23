import * as S from './AppStyle'
import Sidebar from "../Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import Main from "../Content/Main/Main";
import Content from "../Content/Content";
import Auth from "../Auth/Auth";
import {useSelector} from "react-redux/lib/hooks/useSelector";


function App() {
  const {isAuth} = useSelector(state => state.reducer)
  return (
      <Switch>
          <S.App>
              {isAuth
                ?
                  <>
                      <Sidebar />
                      <Route path='/main' exact>
                          <Content content={<Main />} />
                      </Route>
                  </>
                :
                  <Auth />
              }
          </S.App>
      </Switch>
  );
}

export default App;
