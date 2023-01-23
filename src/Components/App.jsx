import React from "react";
import Navbar from './Navbar'
import Aboutus from './Aboutus'
import Footer from './Footer'
export default function App(){


var name={name1:"Our core idealogy is to provide personalized homes to meet the very specefic needs of residents" ,name2:"Commited",name3:"Quality & Service Oriented",name4:"Timely"}

return(
<>

<Navbar/>
<Aboutus
    name1={name.name1}
    name2={name.name2}
    name3={name.name3}
    name4={name.name4}
/>

<Footer/>
</>
)


}