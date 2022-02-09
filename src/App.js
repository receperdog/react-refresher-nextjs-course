import { Route, Switch } from "react-router-dom";
import NewMeetup from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import AllMeetupsPage from "./pages/AllMeetups";

function App() {
  return (
    //32'de kaldim.
    <div>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
        <Route path="/new-meetups">
          <NewMeetup></NewMeetup>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
