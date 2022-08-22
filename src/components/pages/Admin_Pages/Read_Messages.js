
import React, { useEffect, useState } from "react";
import ADMIN_NAV from "./Admin_Nav";

export default function Read_Messages() {

    const [loading, setLoading] = useState(true);
    const [all_messages, set_all_messages] = useState();
  
    const url = "http://localhost:5000/resume"; //update back enda and updagte this url
  
  
  
    useEffect(() => {
      fetch(url, {
        mode: "cors",
      })
        .then((response) => {return response.json()
        //console.log(response)
        })
        
        .then((data) => set_all_messages(data))
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => handleFetchError(err));
    
      function handleFetchError(err) {
        console.log(err);
      }
    }, []);

    return (
        <>
            <ADMIN_NAV/>
            <div>
          <h2>Messages</h2>
          {loading || !all_messages ? (
            <div>Loading...</div>
          ) : (
            all_messages.map((message) => (
              <div className="job-div" key={message.id}>
                
                <p className="job-p">{message.company}</p>
                <p className="job-p">{message.title}</p>
                <p className="job-p">{message.start_date}</p>
                <p className="job-p">{message.finish_date}</p>
                <p className="job-p">{message.role_description}</p>
              </div>
            ))
          )}
        </div>
        </>
        
      );
}

/**
 * 
 * 
 */