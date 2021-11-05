import react from "react";

class AnotherApp extends react.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn:false
        };
        this.handleLogUser=this.handleLogUser.bind(this)
    }

    handleLogUser() {
        console.log("clicked")
        let isLog = !this.state.isLoggedIn;
        console.log(isLog);
        this.setState({
            isLoggedIn: isLog
        });
    }

    render() {
        const log = this.state.isLoggedIn ? "in" : "out";
        const logButton = !this.state.isLoggedIn ? "in" : "out";
        return (       
            <div>
                <h1>You are currently logged {log}</h1>
                <button onClick={this.handleLogUser}>Log{logButton}</button>
            </div> 
        );
    }
}

export default AnotherApp