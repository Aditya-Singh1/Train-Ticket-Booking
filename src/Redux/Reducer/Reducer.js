import { ADDCLASS, ADDDATA, ADD_DATA, CANCEL_DATA, UPDATE_DATA } from "../Actions/ActionType"
import { Addtrain } from "../Actions/Actioncreate"
//import { addData } from "../Actions/Actioncreate";

 
const initialstate=[]
export default (state=initialstate,action)=>{

    
     switch(action.type){
    
       case ADD_DATA:
        console.log( 'Reducer',[...state,action.payload])
        return [...state,action.payload]

      case ADDDATA:
        return [...state,action.payload]

        

        case ADDCLASS:
          return [...state,action.payload]


    case CANCEL_DATA:
        
    const  newstate= state.filter((Data)=>Data.id!==action.payload);
    return newstate;

        

      case UPDATE_DATA:

    const updateState=state.map(Data=>{

    if(Data.id===action.payload.DataId){
                
                Data.From=action.payload.Data.From
                Data.To=action.payload.Data.To
                Data.Date=action.payload.Data.Date

            }

            return Data;
        
     
        })
        
    return updateState;


   default :
   return state;
    }

}