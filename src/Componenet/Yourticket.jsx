import React, { useState } from 'react'
import { connect } from 'react-redux'

function Yourticket({props,DATA,value}) {

  const[disp,setdisp]=useState()


 const backto=()=>{
    const disp='none'
    setdisp(disp)
  }
  return (
    <div className='Ticket' style={{display:disp}}>
      <h1>Your Ticket</h1>
       
      <div className='card'>
      <div className='desti'><h3> Travel: {props.map((pr)=> pr.From )} TO {props.map((pr)=> pr.To )} </h3></div>
      <div className='date'><h3> Date:  {props.map((pr)=> pr.Date ) } </h3></div>
       <br/> <br/>  
      <div className='Train_no'> <h2>Train.no. {DATA.map((d)=>d.trainno)}</h2></div>
       
       <div className='Train_name'><h2>Train.Name : {DATA.map((d)=>d.name)}</h2></div>
       
       <div className='Train_time'><h2>Time :  {DATA.map((d)=>d.time)}</h2></div>
        
       <div className='Train_price'><h2>Price  : {DATA.map((d)=>d.price)}</h2></div>
       &nbsp;
       <div className='Gen'>
       
       <h2> &nbsp;&nbsp;&nbsp;Class:{value.map((val)=>(val.ac1))}</h2>
       
       
       </div>
      
      </div>



 <a href=''> <button onClick={backto}>ok</button> </a>
    </div>
  )
}

const mapDispatchToProps=(Data)=>({})
const mapStateToProps=(state)=>{
   return{props:state.Reducer,DATA:state.Reducer,value:state.Reducer}
   

}
 

export default connect(mapStateToProps,mapDispatchToProps)(Yourticket)
