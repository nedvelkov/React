import react from "react";
import reactDom from "react-dom";

class App extends react.Component{
    constructor() {
        super();
        this.state = {
            loading: false,
            data: {}
        };
    }

    componentDidMount() {
       this.setState({ loading: true });
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(x => {
                this.setState(
                    {
                        loading:false,
                        data: x
                    }
                    )
                    console.log(x);
            })
    }

    render() {
        //let list = this.state.data.films;
      //  const movies = list.map(x => x);
        return (
            <div>
                <ul>
                    {this.state.loading?"Loading...":this.state.data.name}
                </ul>
            </div>
        );
    }
}

export default App