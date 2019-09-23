import {  CREATE_NEW_TODO,DELETE_TODO,TOGGLE_TODO_CHECKED} from "../../actions/types";
  
  
  import todoReducer from "../../reducers/todoReducer";
  
  test("initial todos", () => {
    const state = todoReducer(undefined, {});
    expect(state).toEqual({
      todos: []
    });
  });
  
  describe("todos Reducer Tests", () => {
    const initialState = {
      todos: [
        {
        id: 1,
        name: "represent team",
        isCompleted:false
      }
    ]
    };
    it("should add a todo", () => {
      const dispatchedAction = {
        type: CREATE_NEW_TODO,
        payload: {
          id: 2,
          name: "Buy Milk",
          isCompleted:false
        },
      };
      const newState = {
        todos: [{
          id: 1,
          name: "represent team",
          isCompleted:false
        },
      {
        id: 2,
        name: "Buy Milk",
        isCompleted:false
      }

      ]
      };
      expect(todoReducer(initialState, dispatchedAction)).toEqual(newState);
    });


    it("should toggle todo completion", () => {
        const dispatchedAction = {
          type: TOGGLE_TODO_CHECKED,
          payload: {
              todos:[
                {
                  id: 1,
                  name: "represent team",
                  isCompleted:false
                },
                  {id: 2,
                name: "represent team",
                isCompleted:false}
        ] 
        }
      }
        const newState = {
          todos: [
            {
              id: 1,
              name: "represent team",
              isCompleted:false
            },
              {id: 2,
            name: "represent team",
            isCompleted:false}]
        };
        expect(todoReducer(initialState, dispatchedAction)).toBeTruthy();
      });


    it("should delete a todo", () => {
        const dispatchedAction = {
          type: DELETE_TODO,
          payload: {
            id: 1
        }}
        const currentTodos=[
            {id:1,name:"buy popcorn",isCompleted:false},
            {id:2,name:"buy popcorn",isCompleted:false}
        ]
        
        expect(todoReducer({todos:currentTodos}, dispatchedAction)).toBetruthy;
      });

  });