import React, { Component } from "react";
 import ContactCard from "./ContactCard";


class Contact extends Component {
  render() {
    return (
      <div>
        <header class="banner">Bounty</header>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing todo is to contact us by email</p>
          <ul>
         <div className="contacts">
        
                 <ContactCard 
                    name="Annie Liu"
                    imgUrl="https://scontent.xx.fbcdn.net/v/t1.0-9/82377463_1390240161158155_5694779648383123456_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=gOEpGOsvB6UAX-C6qmW&_nc_ht=scontent.xx&oh=9202214d292485171ee1b7d96d6176e7&oe=5EE4A037&dl=1"
                    phone="(587) 894-5648"
                    email="annieyt8880@gmail.com"/>
                 <ContactCard 
                   name="Linda Ma" 
                    imgUrl="https://scontent.xx.fbcdn.net/v/t1.0-9/86348494_2614634561986467_2607840499305807872_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=8FfPU-ijOqgAX8128xR&_nc_ht=scontent.xx&oh=6d1a4d9c705dd26b75611ed3f22cff34&oe=5EE66986&dl=1" 
                    phone="(587) 284-5788" 
                    email="lindima200@gmail.com"/>
                 <ContactCard 
                    name="Kejun Xiao" 
                imgUrl="https://scontent.xx.fbcdn.net/v/t1.0-9/62490173_468593697220288_4892475153285382144_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=wckMFp7PBFIAX-_5rcX&_nc_ht=scontent.xx&oh=ed5efbf9c4979bcd0ccf6d8210fed353&oe=5EE66661&dl=1" 
                phone="(647) 395-5531" 
                email="kejunxiao1@gmail.com"/>
                 <ContactCard 
                    name="Ananta Ferryanto" 
                imgUrl="https://scontent.xx.fbcdn.net/v/t31.0-8/22548902_789930001186800_7668429139970148379_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=eWcC6B28P5UAX-2zIpa&_nc_ht=scontent.xx&oh=ef99eee99f72b89500a36f56ab8c6f6e&oe=5EE61C46&dl=1" 
                phone="(212) 555-4567" 
                email="anantaferryanto@gmail.com"/>
                 </div>
        </ul>
        <p>Wondering what you can do to protect yourself admist Covid-19? Click  <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">here</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;