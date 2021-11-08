import react from "react";
import AppNavbar from "./AppNavbar";
import AppTable from "./AppTable";
import data from "../database/importData";
import AddDataToArrObj from "../database/addDataToArrObj";

class AppBody extends react.Component{
    constructor() {
        super();
        this.state = {
            movies: [
                {}, {}, {}
            ]
        };
        this.pushItemsToState = this.pushItemsToState.bind(this);
    }

    pushItemsToState() {
        let characters = AddDataToArrObj({ content: "films", id: 1, prop: "characters" });
    }

    componentDidMount() {
        // let content = props.content;
        // let id = props.id!==undefined?props.id:"";
        // let url = "https://swapi.dev/api/" + content + "/" + id;
        let url = "https://swapi.dev/api/films/"
        fetch(url)
        .then(r => r.json())
        .then(x => {
            const arr = x.results;
            let result = [];
            for (const movie of arr) {
                result.push(data(movie));
            }
            this.setState({ movies: result });

        })
    }
    render() {
       let a= this.pushItemsToState();
        return (
            <div>
                <ul>
                    {this.state.movies[1].title}
                    {}
                </ul>
                
                {/* <AppNavbar/>
                 <AppTable/> */}
            </div>
        );
    }

}


export default AppBody;