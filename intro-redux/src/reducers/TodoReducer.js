const initialState = {
  todoitems: [
    {
      id: 1,
      todo: "todo1"
    },
    {
      id: 2,
      todo: "todo2"
    },
    {
      id: 3,
      todo: "todo3"
    }
  ]
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return { ...state, todoitems: [...state.todoitems, action.payload] }
    case "DELETETODO":
      return { ...state, todoitems: [...state.todoitems, action.payload] }
    default:
      return { ...state }
  }
}

export default TodoReducer