import { Route, Switch } from "react-router-dom";
import NewMeetups from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import AllMeetups from "./pages/AllMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation>
        <Switch>
          
          <Route path="/" exact>
            <AllMeetups></AllMeetups>
          </Route>

          <Route path="/favorites">
            <Favorites></Favorites>
          </Route>

          <Route path="/new-meetups">
            <NewMeetups></NewMeetups>
          </Route>

        </Switch>
      </MainNavigation>
    </div>
  );
}

export default App;
