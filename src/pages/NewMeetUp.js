import {useNavigate}  from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const navigate = useNavigate();

    function addMeetHandler(meetupData){
            fetch('https://react-master-fbc9f-default-rtdb.firebaseio.com/meetups.json',{
                method:'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(()=> {
                navigate('/')
                
            });
    }

    return (
        <section>
            <div> New meetup page</div>
            <NewMeetupForm onAddMeetup={addMeetHandler} />
        </section>
    );
}

export default NewMeetupPage;