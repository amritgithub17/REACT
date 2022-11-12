// import React from 'react'
//https://tse1.mm.bing.net/th?id=OIP.33CwBYkmnMfpA9Djup22JwHaHa&pid=Api&P=0
//  const Card = (props) => {
  // console.log(props.values)
  
  // PROPS DESTRUCTURING
//   const {_id,prodName,image,desc} = props.values;
//   return (
//     <div class="card" >
//   <img src={image} class="card-img-top" alt="..." />
//   <div class="card-body">
//     <h5 class="card-title">{prodName}</h5>
//     <p class="card-text">{desc}</p>
//     <button class="btn btn-primary">Apply</button> 
//   </div>
// </div>
//   );
// }


// export default Card

import React, { Component } from 'react';

 class Card extends Component {
  render() {
    console.log("This is class component and we do not have to pass any argument",this.props);

    const {_id,prodName,image,desc} = this.props.values;
    this.State={
      btnText : "JOB_ID  ::  "+_id ,
      btnNew : "APPLY"
    }
    
    return (
      <div class="card" >
    <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{prodName}</h5>
      <p class="card-text">{desc}</p>
      <button class="btn btn-primary me-4">{this.State.btnText}</button> 
      <button class="btn btn-danger " >{this.State.btnNew}</button> 
    </div>
  </div>
    );
  }
}

export default Card