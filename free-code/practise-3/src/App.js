import react from "react";
import reactDom from "react-dom";

class App extends react.Component{
    constructor() {
        super()
        this.state = {
            name: "ND",
            age: 31
        };
    }
    render() {
        return (
            <div>
                <h1>{ this.state.name}</h1>
                <h2>
                    {this.state.age} yeast old
                </h2>
             </div>
        );
    }

}

export default App