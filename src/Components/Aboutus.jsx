import React from "react";
import '../hetmystyle.css'
import pic from '../Images/famimage3.jpg'
import pic1 from '../Images/giftimage1.jpg'
import pic3 from '../Images/children1.jpg'
import pic4 from '../Images/founderimage.jpg'
import pic5 from '../Images/agri.jpg'
import pic6 from '../Images/fuel.jpg'
import pic7 from '../Images/food.jpg'
import pic8 from '../Images/hetalilogo.jpg'
import pic9 from '../Images/timewatch.png'
import pic10 from '../Images/star.jpg'
import pic11 from '../Images/handshake.jpg'
import pic12 from '../Images/homes.jpg'
export default function Aboutus(props){

return(
<>
<br/>
<br/>

<h1 className="text-center my-5 font">ABOUT&nbsp;&nbsp;US</h1>

<img src={pic} className="img-fluid" width="100%" style={{height:"500px"}} />


<p className="my-5 text-center fst-italic fw-bold" width="100%">We endeavour to build homes which make it's residents happy and proud<br/> of their address. Residents are at heart of everything we do, we build <br/>homes to live in, not houses to stay in. </p>


<img src={pic8} className="text-center mx-auto img-fluid d-block"/>

<div className="container text-center">
  <div className="row row-cols-2 mx-5">
    <div className="col">
    <div className="card " width="100%" style={{height:"400px"}}>
  <img src={pic9} className="card-img-top img-fluid h-75"  alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card"  style={{height:"400px"}}>
  <img src={pic10} className="card-img-top img-fluid h-75" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{height:"400px"}}>
  <img src={pic11} className="card-img-top img-fluid h-75" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card"   style={{height:"400px"}}>
  <img src={pic12} className="card-img-top img-fluid h-75" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </div>
  </div>
</div>



<div className="container-fluid back bg-dark my-5"></div>


<div className="container">

<div className="row text-center">


<div className="col">

<blockquote className="fst-regular tst-para-large">Established in 1992, Hetali Group is a leading real estate developer of<br/> residential spaces across Mumbai and have earned an unmatched reputation<br/> amongst its very loyal customers. The company's customer-centric values,<br/> project management proficiency and technical expertise are amplified with<br/> over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading to more than families! <br/>

<br/>The Hetali Group promises a lifestyle second to none. In a span of over four <br/>decades, the group has proved to be one of the most reputed real estate<br/> builders in the western suburbs of Mumbai with residences in prime locations <br/>such as Andheri, Goregaon, Vile Parle and Juhu. <br/><br/>

Spearheaded by Mr Jayesh Pandya, the company's central ideology is to<br/> provide homes customized to the customer's requirements and home’s that <br/>are superior in nature keeping in mind the needs of the modern home user. 
 
</blockquote>






</div>




</div>



</div>



<div className="container-fluid bg-dark back1">

<h2 className="text-center my-5 text-white font">VISION</h2>

<p className="text-white  text-center fst-italic fw-bold">We aim to ensure top-class service to our stakeholders & diversify our<br/> business to other service-oriented sectors with the ultimate goal of <br/>achieving customer satisfaction & end-user interaction.</p>
</div>


<div className="container">
<h2 className="text-center my-5  text-dark  font">MISSION</h2>
<img src={pic8} className="text-center mx-auto img-fluid d-block"/>
<div className="row text-center">


<div className="col-sm-6">

<img src={pic1} className=" shadow-sm p-1  my-5 bg-light rounded drop img-fluid"/>

</div>



<div className="col-sm-6">


<div className="mb-1 shadow-sm p-4 rounded bg-light my-5" width="100%">
<h3 align="left" classname="fw-bold">Personalized</h3>
<h3 align="left" className="fw-light">{props.name1}</h3>

</div>


<div className="mb-4 shadow-sm p-3 rounded bg-body text-secondary">
<h3 align="left">{props.name2}</h3>

</div>



<div className="mb-4 shadow-sm p-2 rounded bg-body text-secondary">
<h3 align="left">{props.name3}</h3>

</div>



<div className="mb-4 shadow-sm p-2 rounded bg-body text-secondary">
<h3 align="left">{props.name4}</h3>

</div>

</div>

</div>
</div>


<div className="container-fluid bg-light">   
<h2 className="text-center my-5 text-dark">CorporateSocial&Services</h2>
<img src={pic8} className="text-center mx-auto d-block my-5 img-fluid"/>

<div className="row text-center">

<div className="col-md-6">

<div className="mb-4 shadow-sm p-4 rounded bg-light my-5">
<h3 align="left">Education for the under-privileged</h3><br/><span classname="fw-light">We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.</span>


</div>

<div className="mb-4 shadow-sm p-3 rounded bg-body text-secondary">
<h3 align="left">Support for Rural Farmers</h3>
</div>

<div className="mb-4 shadow-sm p-4 rounded bg-body text-secondary">
<h3 align="left">Spiritual</h3>
</div>



</div>


<div className="col-sm-6">
  <img src={pic3} className="img-fluid shadow-sm p-1 my-5 bg-light rounded drop" />
</div>





</div>

</div>





<div className="container-fluid bg-light back3 my-5" >
<h2 className="text-center my-5 font text-dark">FOUNDER'S &nbsp;MESSAGE</h2>
<div className="row text-center">

<div className="col-12">


<img src={pic4} className="img-fluid rounded-circle h-25 border border-3 border border-dark" />

  
<h2 className="py-5 ">Mr.&nbsp;Jayesh&nbsp;H.Pandya</h2>

<p className="fst-italic fw-bold">“When a customer buys a home, he is giving up a major<br/> chunk of his life's savings to do so. It is imperative to<br/> give him exactly what he looks for in his home.”
</p>

<p className="w-100 my-5">
We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled<br/> with our expertise in construction, engineering & management. Our biggest assets have always been our small<br/> but highly trained team of<br/> professional managers and engineers who are backed by a very able team of administrators. We have a clear vision about building on our strengths and our achievements while holding dear to<br/> us our basic principles
</p>


</div>



</div>


</div>



<div class="container text-center">
<h2 className="text-center my-5 font text-dark ">GROUP&nbsp;COMPANIES</h2>
<img src={pic8} className="text-center img-fluid mx-auto d-block"/>
  <div class="row">

<div class="col">
      <img src={pic5} className="img-fluid shadow-sm p-1  my-5 bg-light rounded drop"/>
      <h4>Agriculture</h4>
    </div>
    <div class="col">
      <img src={pic6} className="img-fluid  shadow-sm p-1  my-5 bg-light rounded drop"/>
      <h4>Fuel</h4>
    </div>
    <div class="col">
      <img src={pic7} className="img-fluid  shadow-sm p-1  my-5 bg-light rounded drop"/>
      <h4>Foods</h4>
    </div>
  </div>
</div>










</>



)



}