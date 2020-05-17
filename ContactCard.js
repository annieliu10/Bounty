import React from "react"
import reactDOM from "react-dom"



/* make several instances */

function ContactCard(props){
    console.log(props)

return  <div className="contact-card">
                <img src={props.imgUrl} width="400" height="400"/>
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
}
export default ContactCard

/* props are objects with name, imgURL, phone and email */