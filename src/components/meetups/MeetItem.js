
import { useContext } from 'react';
import FavouritesContext from '../../store/favourite-context';
import Card from '../Ui/Card';
import classes  from './MeetupItem.module.css'

function MeetupItem(props){
    const favouriteCtx =  useContext(FavouritesContext);

    const itemIsFavourite = favouriteCtx.isFavourite(props.id)

    function toggleFavouriteHandler(){
            if(itemIsFavourite){
                favouriteCtx.removefavourite(props.id)
            }else{
                favouriteCtx.addfavourite({
                    id: props.id,
                    image: props.image,
                    description: props.description,
                    title: props.title,
                    address: props.address
                })
            }
    }

    return(
        <li className={classes.item}>
          <Card>
          <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title} </h3>
                <address>{props.address} </address>
                <p>{props.description} </p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteHandler} >{itemIsFavourite ? 'Remove from favourite' :'To Favourites'} </button>
            </div>
          </Card>
        </li>
    )
}

export default MeetupItem;