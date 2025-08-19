const initialState ={
    todo:[]
}

function reducer( state , action){
    switch(action.type){
        case 'ADD_TODO':
          const {name , description} = action.payload;
          if(!name?.trim()) return state;
          const newtodo = {
            id : Date.now(),
            name : name.trim(),
            description : (description ||  "").trim(),
            isCompleted : false, 

          };
          return{...state , todo :[newtodo , ...state.todo]};

        case 'LOAD_TODO':



        default:
            return state;
    }
}