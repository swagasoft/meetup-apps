import {createContext, useState} from 'react';

const FavouritesContext  = createContext({
    favourites: [],
    totalFavourites: 0,
    addfavourite : (favouriteMeetup)=> {},
    removefavourite : (meetupId)=> {},
    isFavourite : (meetupId)=> {}
});


export function FavouriteContextProvider(props){
    const [userFavourites, setUserFavourites]  = useState([]);

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevUserFavourite)=> {
          return  prevUserFavourite.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites((prevUserFavourite)=> {
            return prevUserFavourite.filter((meetup) => meetup.id !== meetupId);
        });  
    }

    function itemIsFavouriteHandler(meetupId){
            return userFavourites.some((meetup)=> meetup.id === meetupId);
    }

    const  context = {
        favourites : userFavourites,
        totalFavourites : userFavourites.length,
        addfavourite : addFavouriteHandler,
        removefavourite : removeFavouriteHandler,
        isFavourite : itemIsFavouriteHandler
    };
    

    return (
        <FavouritesContext.Provider  value={context}>
            {props.children}
    </FavouritesContext.Provider>
    )
}

export default FavouritesContext;



