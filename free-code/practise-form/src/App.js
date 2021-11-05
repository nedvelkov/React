import react from "react";

class App extends react.Component{
    constructor() {
        super();
        this.state={
            firstName: "",
            lastName: "",
            isCheck: true,
            gender: "",
            favColor:"blue"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === "checkbox" ? this.setState({
            [name]:checked
        }) :
        this.setState({
            [name]: value
        });
        console.log(event.target);
    }
    //posible but not best pratice
    handleCheckBox(event) {
        const currentState = this.state.isCheck;
        this.setState({
            isCheck: !currentState
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.handleChange}
                />
                <br />
                <hr/>
                <textarea
                    value={"some text"}
                    onChange={this.handleChange}
                />
                <br />
                <hr />

                <input
                    type="checkbox"
                    name="isCheck"
                    checked={this.state.isCheck}
                    onChange={this.handleChange}
                />
                <label>
                    Value of state.isCheck = {this.state.isCheck.toString()}
                </label>

                <br />
                <hr />

                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender==="male"}
                    onChange={this.handleChange}
                /> Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender==="female"}
                    onChange={this.handleChange}
                /> Female
                <h4>Your gender is {this.state.gender.toString()}</h4>
                
                <br />
                <hr />
                <label>Your favorite color is {this.state.favColor}</label>
                <br/>
                <select
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow" >Yellow</option>
                    <option value="pink">Pink</option>
                </select>
            </div>

        );
    }

}



export default App