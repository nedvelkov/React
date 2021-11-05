import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ContactCard from "./ContactCard";
import react from "react";
import Joke from "./Joke";
import jokeData from "./jokesData";

function App () {
    
    const jokeList = jokeData.map(x => {
        return <Joke key={x.punch} question={x.question} punchLine={x.punch}/>
    });
    console.log(jokeList);

        return (
            <div className="contacts">
                {jokeList}
            </div>
        )
    
}

export default App