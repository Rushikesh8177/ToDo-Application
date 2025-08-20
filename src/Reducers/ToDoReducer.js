export const initialState ={
    todos:[]
}

 export function reducer( state , action){
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
          return{...state , todos:[newtodo ,...state.todos]};

       case 'DELETE_TODO':
          return {
            ...state, todos: state.todos.filter((todo)=> todo.id !== action.payload)
          };

        case 'TOGGLE_TODO':
          return{
            ...state , todos: state.todos.map((todo)=>
               todo.id === action.payload ? {...todo, isCompleted : !todo.isCompleted} :todo
            )
          };



        default:
            return state;
    }
}