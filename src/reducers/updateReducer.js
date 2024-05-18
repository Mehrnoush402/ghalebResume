export const updateReducer = (state,action)=>{
      switch (action.type) {
        case "update":
             {
                //  console.log("state",state);
                 const copyState = state  //shallow copy of state(list)
                 const stateIndex = copyState.findIndex((item)=>{return item.id===action.data.id}) //find index of item that must be updated in copyState
                 copyState.splice(stateIndex,1,action.data) //replace that item with new data in copyState
                 return copyState
            }
      
        default:
            return state;
      }
}