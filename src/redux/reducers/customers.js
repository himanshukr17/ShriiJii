
const initialState = {
   customers:[],
   
 

   

 }


export default function(state = initialState, action) {

  switch (action.type) {
    case 'INIT_CUSTOMERS':
    
     

          return {...state,customers:action.payload}
   
default :
return state
}

}