import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourite-context";

function FavouritePage(){
    const favouritesCtx = useContext(FavouritesContext);



    return (
        <section>
            <h1>My favourites</h1>
            {favouritesCtx.totalFavourites === 0 ? <p>No favourite</p>: null }
            <MeetupList meetups={favouritesCtx.favourites}></MeetupList>
        </section>
    );
}

export default FavouritePage;