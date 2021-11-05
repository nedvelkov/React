import react from "react";

class AppPractise extends react.Component{
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age:"",
            gender: "",
            travelLocation: "",
            diet: "",
            submit:false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (name === "submit") {
            this.setState({ submit: true });
            return;
        }
        this.setState({ submit: false });
        type === "textbox" ?
            this.setState({ [name]: checked }) :
            this.setState({ [name]: value });
        console.log(name +" "+ type+" "+value);
    }

    render() {
        return (
            <div>
                <label>Names</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    onChange={this.handleChange}
                />
                <hr />
                <span>Age:</span>
                <input
                    type="text"
                    name="age"
                    placeholder="Your age"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender==="male"}
                    onChange={this.handleChange}
                />Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender==="female"}
                    onChange={this.handleChange}
                />Female
                <hr />
                <label>Location</label>
                <select
                    name="travelLocation"
                    onChange={this.handleChange}
                >
                <option value="Paris">Paris</option>
                <option value="Sofia">Sofia</option>
                <option value="Varna">Varna</option>
                </select>
                <label> Meal: </label>
                <input
                    type="radio"
                    name="diet"
                    value="vegetarian"
                    checked={this.state.diet==="vegetarian"}
                    onChange={this.handleChange}
                />Vegetarian
                <input
                    type="radio"
                    name="diet"
                    value="kosher"
                    checked={this.state.diet==="kosher"}
                    onChange={this.handleChange}
                />Kosher
                 <input
                    type="radio"
                    name="diet"
                    value="lactose free"
                    checked={this.state.diet==="lactose free"}
                    onChange={this.handleChange}
                />Lactose free        
                <button
                    name="submit"
                    onClick={this.handleChange}
                >
                    Submit
                </button>
                <hr />
                <h2>Entered information</h2>
                {this.state.submit && <Details data={this.state}/>}
            </div>
        );
    }
}

function Details(props) {
    return (
        <div>
            <h4>Your full name:{props.data.firstName} {props.data.lastName}</h4>
            <h4>You are {props.data.age} old {props.data.gender}</h4>
            <h4>You travel to {props.data.travelLocation} with {props.data.diet} meal</h4>
        </div>
    );
}

export default AppPractise
