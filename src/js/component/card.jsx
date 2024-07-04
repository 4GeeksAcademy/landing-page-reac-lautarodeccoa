import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
const Card = () => {
    return (

<div className="card col-12 col-sm-6 col-md-3" >
<img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q&s"} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    );
};
export default Card;