import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupPage from "./pages/AllMeetUp";
import FavouritePage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetUp";

function App() {
  return (
 <Layout>

<Routes>
<Route path="/"  element={ <AllMeetupPage /> }></Route>
<Route path="/new-meetup"  element={ <NewMeetupPage /> }></Route>
<Route path="/favourites"  element={ <FavouritePage /> }></Route>
</Routes>
 </Layout>
  );
}

export default App;
