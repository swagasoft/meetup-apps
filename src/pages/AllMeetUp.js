import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupPage(){
  const [isLoading, setIsLoading ] =  useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(()=> {
      fetch('https://react-master-fbc9f-default-rtdb.firebaseio.com/meetups.json').then((response)=> {
        return response.json()
      }
      ).then((data)=> {
        console.log('FIEWWW ', data)
        var meetups = [];
        for(let key in data){
          const meetup  = {
            id: key,
            ...data[key]
          }

          meetups.push(meetup)
        }

         setIsLoading(false);
         setLoadedMeetups(meetups)
      });

    } , [])

  

        if (isLoading){
          return (
            <section>
              <div>loading...</div>
            </section>
          );
        }

    return (
       <section>
            <div className="title"> All meetup page</div>

         <MeetupList meetups={loadedMeetups} />
       </section>
    )
}

export default AllMeetupPage;