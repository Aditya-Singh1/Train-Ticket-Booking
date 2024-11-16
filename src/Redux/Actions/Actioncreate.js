import { ADDDATA, ADD_DATA, ADDCLASS, CANCEL_DATA, UPDATE_DATA } from "./ActionType";



export  const addData=(Data)=>({
   type:ADD_DATA,
   payload:Data
})


export const Addtrain=(tDATA)=>({
   type:ADDDATA,
   payload:tDATA
})


export const Addclass=(AClass)=>({
   type:ADDCLASS,
   payload:AClass
})


export const cancelData=(id)=>({  
   
   type:CANCEL_DATA,
   payload:id
})

export const updateData=(Data,id)=>({
   type:UPDATE_DATA,
   payload:{Data:Data,DataId:id}
})
