import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourite-context";

import classes  from './MainNavigation.module.css';

function MainNavigation(){
    const favouriteContext = useContext(FavouritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
            <nav>
                <ul>
                    <li>
                    <Link to='/'> All Meetups</Link>
                    </li>
                </ul>
                <ul>
                    <li><Link to='/new-meetup'> New Meetup</Link></li>
                </ul>
                <ul>
                   <li>
                   <Link to='/favourites'>
                        My Favourites
                        <span className={classes.badge}> {favouriteContext.totalFavourites} </span>
                        </Link>
                   </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;