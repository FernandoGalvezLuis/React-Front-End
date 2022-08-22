import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact_Page() {
    const navigate = useNavigate();

    const [company, setCompany] = useState();
    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [message_body, set_Message_Body] = useState();
    

    const [newMessage, setNewMessage] = useState();

   /*  useEffect(() => {
        if (newJobId) navigate(`/jobs/${newJobId}`, { replace: true });

    }, [newJobId])  */

    async function submitForm() {
        const url = `http://localhost:5000/incoming_messages/`;
        const body = {
            company: company,
            title: title,
            email: email,
            message_body: message_body,
            
        };

        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            /*.then((data) => {
                setNewJobId(data.insertId);
            })*/
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    async function submitNewMessageValues(e) {
        e.preventDefault();

        await submitForm(e);
    }

    return (
        <div>
            <h2>New Message</h2>

            <form className="job-div" onSubmit={(e) => submitNewMessageValues(e)}>
                <label htmlFor="company">Company: </label>
                <input
                    name="company"
                    type="text"
                    className="job-p"
                    onChange={e => setCompany(e.target.value)}
                ></input>

                <br />

                <label htmlFor="title">Title: </label>
                <input
                    name="title"
                    type="text"
                    className="job-p"
                    onChange={e => setTitle(e.target.value)}
                ></input>

                <br />

                <label htmlFor="email">Email: </label>
                <input
                    name="email"
                    type="email"
                    className="job-p"
                    onChange={e => setEmail(e.target.value)}
                ></input>

                <br />

                <label htmlFor="message">Message: </label>
                <textarea
                    name="expiresAt"
                    type="textarea"
                    className="job-p"
                    onChange={e => set_Message_Body(e.target.value)}
                ></textarea>

                <br />

                

                <button type="submit">Save</button>

            </form>
        </div>
    );
}