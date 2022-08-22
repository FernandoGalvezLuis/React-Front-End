import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

export default function Resume() {
  const [loading, setLoading] = useState(true);
  const [resume_entries, setResume_Entries] = useState();

  const url = "http://localhost:5000/resume";



  useEffect(() => {
    fetch(url, {
      mode: "cors",
    })
      .then((response) => {return response.json()
      //console.log(response)
      })
      
      .then((data) => setResume_Entries(data))
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => handleFetchError(err));
  
    function handleFetchError(err) {
      console.log(err);
    }
  }, []);

 



  return (
    <div>
      <h2>Resume Entries list</h2>
      {loading || !resume_entries ? (
        <div>Loading...</div>
      ) : (
        resume_entries.map((entry) => (
          <div className="job-div" key={entry.id}>
            
            <p className="job-p">{entry.company}</p>
            <p className="job-p">{entry.title}</p>
            <p className="job-p">{entry.start_date}</p>
            <p className="job-p">{entry.finish_date}</p>
            <p className="job-p">{entry.role_description}</p>
          </div>
        ))
      )}
    </div>
  );
}


/*

  console.log(resume_entries)

  console.log(resume_entries.map(obj=>{ return `this + ${obj}`}))

  console.log(resume_entries.map(obj=>{ return `this + ${obj.id}`}))

 */


/**
 * cut this:
 * <p className="job-p"><Link to={`/jobs/${job.id}`}>{job.title}</Link></p>
 *  after:
 *  <div className="job-div" key={resume_entries.id}>
 * 
 */
