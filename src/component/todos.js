import React from "react";
import "../component/todos.css";
import {Card,CardContent,Grid,ListItemButton,ListItemText,Checkbox,} from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos }) => {
    const todoList = todos.length ? (
      todos.map((todo) => {
        return (
          <Grid key={todo.id}>
            <Card>
              {/* Remember, we set the local state of this todo item when the user submits the form in 
              AddTodo.js. All we need to do is return the todo list item */}
              <CardContent>
                <ListItemButton> 
                  <Checkbox
                  onClick={() => {
                    todo.setState ({
                      complete:true
                    })
                  }}
                  />
                  <ListItemText><span className={todo.complete ? "strike" : ""} style={{ padding: "50px" }}>{todo.content}</span></ListItemText>
                </ListItemButton>
              </CardContent>
            </Card>
          </Grid>
        );
      })
    ) : (
      <p>{"You have no todo's left"}</p>
    );
    
    
    // return  todoList constant created above to show all of the items on the screen
    return (
      <div className="todoCollection" style={{ padding: "10px" }}>
        {todoList}
      </div>
    );
};


  
export default Todos;
