import React, { useState } from 'react'
import { Addclass } from '../Redux/Actions/Actioncreate'
import { connect } from 'react-redux'

function Selectyourclass({value}) {

const[PROPS,setPROPS]=useState({gen:'GENRAL',ac1:'AC1',ac2:'AC2',ac3:'AC3',ac4:'AC4'})
const[data,setdata]=useState({ac1:'AC1'})
const handleprop=(e)=>{

//  e.prevent.Default()
 value(PROPS,data)

}


const [display,setDisplay]=useState('')


const handleDisplay=()=>{
  const display='none'
  setDisplay(display)
}

const[count1,setCount1]=useState()
const[count2,setCount2]=useState()
const[count3,setCount3]=useState()
const[count4,setCount4]=useState()
const[count5,setCount5]=useState()

const crow1=()=>{
let count1='red';
setCount1(count1)
}
const crow2=()=>{
  let count2='red';
  setCount2(count2)
  }
  const crow3=()=>{
    let count3='red';
    setCount3(count3)
    }
    const crow4=()=>{
      let count4='red';
      setCount4(count4)
      }
      const crow5=()=>{
        let count5='red';
        setCount5(count5)
        }
                    


  return (

    <div className='select' style={{display:display}}>
      <h1>Select your class</h1>
   <div className='CROW'  onClick={crow1} style={{backgroundColor:count1}}>   
<div className='r1' onClick={handleprop} >
< div className='genral' onChange={(e)=>setPROPS({...PROPS,gen:e.target.value})}>Genral</div>
</div></div>

<div className='CROW' onClick={crow2} style={{backgroundColor:count2}} >
<div className='r2' onClick={handleprop} >
  <div className='ac1' onChange={(e)=>setdata({...PROPS,ac1:e.target.value})}>AC1</div>
  </div></div>

  <div className='CROW' onClick={crow3} style={{backgroundColor:count3}}>
<div className='r3' onClick={handleprop} >
  <div className='ac2' onChange={(e)=>setPROPS({...PROPS,ac2:e.target.value})}>AC2</div>
  </div></div>

  <div className='CROW' onClick={crow4} style={{backgroundColor:count4}}>
  <div className='r4' onClick={handleprop} >
<div className='ac3' onChange={(e)=>setPROPS({...PROPS,ac3:e.target.value})}>AC3</div>
  </div></div>

  <div className='CROW' onClick={crow5} style={{backgroundColor:count5}} >
<div className='r5' onClick={handleprop} >
  <div className='ac4' onChange={(e)=>setPROPS({...PROPS,ac4:e.target.value})}>AC4</div>
  </div>
</div>
      <button onClick={handleDisplay}>OK</button>
    </div>

  )
}
const mapStateToProps=(state)=>{
  return{props:state.Reducer}
}

const mapDispatchToProps=(dispatch)=>({
value:(AClass)=>(dispatch(Addclass(AClass)))
})

export default connect(mapStateToProps,mapDispatchToProps)(Selectyourclass)
