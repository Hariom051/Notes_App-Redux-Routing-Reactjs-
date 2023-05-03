export const notesReducer = (state = { notes: [],update:{value:"",index:"",updated:false}}, action) => {
  const { type, payload } = action;
  if (type === "ADD") {
    
    const notes = [...state.notes];
    notes.push(payload);
    localStorage.setItem("item",JSON.stringify(notes));
    return { ...state, notes: notes };
  } else if (type === "FETCH") {
    // Async work
    const notes = [...state.notes];
    payload.data.forEach((e) => {
      notes.push(e);
    });
    localStorage.setItem("item",JSON.stringify(notes));

    return { ...state, notes: notes };
  } 
  else if(type==="delete")
  {
     const notes = [...state.notes];
     notes.splice(payload,1);
     localStorage.setItem("item",JSON.stringify(notes));
     return {...state,notes:notes};

  }
  else if(type==="update")
  {     
      if(payload.updates){
        const notes = [...state.notes];
        const update = {...state.update};
        notes[update.index]=payload.notes;
        update.updated =false;
        localStorage.setItem("item",JSON.stringify(notes));
         return {...state,notes:notes,update:update}; 
      }


      else 
      {
        const notes = [...state.notes];
        const update = {...state.update};
        update.value =notes[payload];
        update.updated=true;
        update.index=payload;
        localStorage.setItem("item",JSON.stringify(notes));
        return {...state,update:update,notes:notes};
      }
 
    
  }
  else if(type ==="loadfromlocal"){
     let notes =[...state.notes];
     notes=payload;
     return {...state,notes:notes};      
  }

  else {
    return state;
  }
};
