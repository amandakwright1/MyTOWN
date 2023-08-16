import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
// import "./Location.css"



export const Location = ({ location }) => {
  return (
    <div className="card-container">
      <Card style={{ width: '200px', margin: '10px' }}>
        <CardImg top src={location.imageUrl} alt={location.name} style={{ height: '150px', objectFit: 'cover' }} />
        <CardBody>
          <h1 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{location.name}</h1>
          <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{location.address}</p>
          <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{location.phone}</p>
          <a href={location.website} style={{ fontSize: '0.8rem' }}>Link for more info!</a>
        </CardBody>
      </Card>
    </div>
  );
};













// export const Location = ({ location }) => {

//   return (
//     <Card width={40} className="m-4">
//       <h1 className="text-left">{location.name}</h1>
//       <CardBody>
//       <CardImg width={250} top src={location.imageUrl} alt={location.name} />
      
//         <p>
      
//           <>{location.address}</>
//           {/* </Link> */}
//         </p>
//         <p>{location.phone}</p> 
//         <a href={location.website}>Link for more info!</a>
      
      
//       </CardBody>
//       <br></br>
  
 
  
//     </Card>
//   );
// };

// export const Location = ({ location }) => {
// return (
//   <Card className="cards">
//     <h1> {location.name}</h1>
  
//     <div className="picture">
//     <CardImg top src={location.imageUrl} alt={location.name} /></div>
  
//       <p>
       
//         <>{location.address}</>
      
//       </p>
//       <p>{location.phone}</p> 
//       <a href={location.website}>Link for more info!</a>
    
    
   
//     <br></br>
//     </Card> 
  
   
// );}
