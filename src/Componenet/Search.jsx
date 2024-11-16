import React, { useState } from 'react'
import {addData } from '../Redux/Actions/Actioncreate'
import {connect} from 'react-redux'
//import {Form} from 'react-bootstrap'


function Search({props}) {
  const[Data,setData]=useState({From:'',To:'',Date:''})
  
  // const[print,setprint]=useState(false)
  const[disp,setdisp]=useState('')

// let arr=[(data.from),(data.to),(data.date)]



const dis=()=>{
  const disp='none'
  setdisp(disp)
}


  // const handle=(to)=>{
  //   setdata(to.target.value)
  //   setprint(false)
  // }

const getdata=(event)=>{
  event.preventDefault()
  //add data in store
    props(Data)
  //setdata({From:'',To:'',Date:''})
 
 
}


  return (
    <>
    <form onSubmit={getdata}>
    <div className='Search' style={{display:disp}}>

      <h1>Search Your Train</h1>

<div className='from'>
  <input type='text'
  name='from'
  placeholder='From:'
  value={Data.From}
  onChange={(event)=>setData({...Data,From:event.target.value})} 
 
  
  />
</div>
<div className='to'>
  <input type='text'
  name='to'
  placeholder='To:'
  value={Data.To}
  onChange={event=> setData({...Data,To:event.target.value})} 

  />
</div>

<div className='date'>

  <input type='date' 
  name='date'
  value={Data.Date}
  onChange={event=>setData({...Data,Date:event.target.value})}
  
  />
</div>


{/* <h2>{Data.From}</h2>
<h2>{Data.To}</h2>
<h2>{Data.Date}</h2> */}


{/* {

// print?<h1>{data}</h1>:null}


 */}

  

     {/* <button id='ok'onClick={getdata} type='submit' >OK</button> */}
    
    <button onClick={dis}>Search</button>

     
    </div>
    </form>

    
    </>
  )
}
const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
 props:(Data)=>(dispatch(addData(Data)))
})

 export default connect(mapStateToProps,mapDispatchToProps)(Search)