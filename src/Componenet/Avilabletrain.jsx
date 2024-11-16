import { Addtrain, addData } from '../Redux/Actions/Actioncreate'
import React, { useState } from 'react'
import {connect} from 'react-redux'

function Avilabletrain({store,DATA}) {


const[data,setdata]=useState({trainno:' 01033',time:'9:30AM',name:'Train1',price:'500'})
const[data1,setdata1]=useState({trainno:'12321',time:'4:30PM',name:'Train2',price:'600'})
const[data2,setdata2]=useState({trainno:'45321',time:'8:30AM',name:'Train3',price:'700'})
const[data3,setdata3]=useState({trainno:'56721',time:'6:30AM',name:'Train4',price:'800'})
const[data4,setdata4]=useState({trainno:'67821',time:'1:30PM',name:'Train5',price:'900'})



const [val,setval]=useState('')





const handleTodo=(event)=>{
  // preventDefault(event)
  DATA(data)
  // DATA(data1)
}
const handleTodo1=(event)=>{
  // preventDefault(event)
  DATA(data1)
}
const handleTodo2=(event)=>{
  // preventDefault(event)
  DATA(data2)
}
const handleTodo3=(event)=>{
  // preventDefault(event)
  DATA(data3)
}
const handleTodo4=(event)=>{
  // preventDefault(event)
  DATA(data4)
}


  const handeldata=(event)=>{
    // event.preventDefault()
    const val='none'
    setval(val)
  }


// color use state

const[color,setcolor]=useState()
const handlecolor=()=>{
  let color='green';
  setcolor(color)
}

const[color1,setcolor1]=useState()
const handlecolor1=()=>{
  let color1='green';
  setcolor1(color1)
}

 
const[color2,setcolor2]=useState()
const handlecolor2=()=>{
  let color2='green';
  setcolor2(color2)
}
  
const[color3,setcolor3]=useState()
const handlecolor3=()=>{
  let color3='green';
  setcolor3(color3)
}

const[color4,setcolor4]=useState()
const handlecolor4=()=>{
  let color4='green';
  setcolor4(color4);
}



  return (
    <>
    <div className='Avilable-train' style={{display:val}} >
      <div className='row'>
      <div className='col'><h3>Date:{store.map((st)=> st.Date)}</h3></div>
      <div className='colbig'><h1>Avilable Train</h1></div>
      <div className='col'><h3>Travel:-{store.map((st)=> st.From)} to {store.map((st)=> st.To)}</h3></div> 
      </div>


       
       
      
      <div className='row'>
        <div className='col'><h3>TRAIN NO.</h3></div>
        <div className='col'><h3>TIME</h3></div>
        <div className='col'><h3>NAME</h3></div>
        <div className='col'><h3>PRICE</h3></div>
      </div>
      <div className='Prow1' onClick={handlecolor} >
      <div className='row' onClick={handleTodo} style={{backgroundColor:color}} >
        <div className='col' onChange={(event)=>setdata({...data,trainno:event.target.value})} value={data.trainno}><h3>01033</h3></div>
        <div className='col'><h3>9:30 AM</h3></div>
        <div className='col'><h3>TRAIN.1</h3> </div>
        <div className='col'><h3>RS.500</h3> </div>
      </div></div>

      <div className='Prow1' onClick={handlecolor1} >
      <div className='row' onClick={handleTodo1} style={{backgroundColor:color1}}>
      <div className='col' onChange={(event)=>setdata1({...data1,trainno:event.target.value})} value={data1.trainno}><h3>12321</h3></div>
        <div className='col'><h3>4:30 PM </h3></div>
        <div className='col'><h3>TRAIN.2</h3></div>
        <div className='col'><h3>RS 600</h3></div>
      </div></div>

      <div className='Prow1' onClick={handlecolor2} >
      <div className='row' onClick={handleTodo2} style={{backgroundColor:color2}}>
      <div className='col' onChange={(event)=>setdata2({...data2,trainno:event.target.value})} value={data2.trainno}><h3>45321</h3></div>
        <div className='col'><h3>8:30 AM </h3></div>
        <div className='col'><h3>TRAIN.3</h3></div>
        <div className='col'><h3>RS 700</h3></div>
      </div></div>

      <div className='Prow1' onClick={handlecolor3} >
      <div className='row' onClick={handleTodo3} style={{backgroundColor:color3}}>
      <div className='col' onChange={(event)=>setdata3({...data3,trainno:event.target.value})} value={data3.trainno}><h3>56721</h3></div>
        <div className='col'><h3>6:30 AM </h3></div>
        <div className='col'><h3>TRAIN.4</h3></div>
        <div className='col'><h3>RS 800</h3></div>
      </div></div>

      <div className='Prow1' onClick={handlecolor4} >
      <div className='row' onClick={handleTodo4} style={{backgroundColor:color4}}>
      <div className='col' onChange={(event)=>setdata4({...data4,trainno:event.target.value})} value={data4.trainno}><h3>67821</h3></div>
        <div className='col'><h3>1:30 PM  </h3></div>
        <div className='col'><h3>TRAIN.5</h3></div>
        <div className='col'><h3>RS 900</h3></div>
      </div></div>
      
      <button  onClick={handeldata}>Ok</button>
    
    </div>


</>
  )
}

const mapStateToProps=(state)=>{
 // console.log(state)
  return{store:state.Reducer}

}



const mapDispatchToProps=(dispatch)=>({
 DATA:(tDATA)=>(dispatch(Addtrain(tDATA)))
})


export default connect(mapStateToProps,mapDispatchToProps)(Avilabletrain)
