import classes from './NewMeetupForm.module.css';
import Card from '../Ui/Card';
import {useRef} from 'react';

function NewMeetupForm(props){
       const titleInputRef =  useRef();
       const imageInputRef =  useRef();
       const addressInputRef =  useRef();
       const descriptionInputRef =  useRef();

    function onSubmitHandler(event){
        console.log(event);
         event.preventDefault();
         const enteredTitle = titleInputRef.current.value;
         const enteredImage = imageInputRef.current.value;
         const enteredAddress = addressInputRef.current.value;
         const enteredDescription = descriptionInputRef.current.value;

         const meetupData = {
             title : enteredTitle,
             image : enteredImage,
             address : enteredAddress,
             description : enteredDescription
         }

         console.log(meetupData);
         props.onAddMeetup(meetupData);

    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title'  ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='title'>Meetup image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='address'>Meetup address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='description'>Meetup description</label>
                    <textarea type='text' required  rows='5' id='description' 
                    ref={descriptionInputRef}/>
                </div>
                
                <div className={classes.action}>
                    <button className='btn'>Add meetup</button>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupForm;