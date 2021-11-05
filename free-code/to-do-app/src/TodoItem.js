import react from 'react';

class ToDoItem extends react.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    // handleChekBox() {
    //     console.log("check");
    //     let isTaskComplete = this.state.completed;
    //     this.setState({
    //         completed: !isTaskComplete
    //     });
    // }

    handleChange() {
        this.props.handleChange(this.props.task.id);
    }

    render() {
        let styleToDo = this.props.task.completed ? { textDecoration: "line-through" } : {textTransform: "uppercase"};
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.task.completed}
                    onChange={this.handleChange}/>
                <p style={styleToDo}>{this.props.task.text}</p>
            </div>
        );
    }
}

export default ToDoItem