import react from "react";
import ToDoItem from "./TodoItem";
import todosData from "./todosData";

class App extends react.Component{
    constructor() {
        super()
        this.state = {
            data:todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(oldData => {
                                    const newData = oldData.data.map(task => {
                                        if (task.id === id) {
                                            task.completed = !task.completed;
                                        }
                                        return task;
                                    })
            return { data: newData };
        });
    }

    render() {
        const todoList = this.state.data.map(x => 
                                                <ToDoItem
                                                    key={x.id}
                                                    task={x}
                                                    handleChange={this.handleChange}
                                                />);
        return (
                <div className="todo-list">
                    {todoList}
                </div>
                );
    }
}


export default App