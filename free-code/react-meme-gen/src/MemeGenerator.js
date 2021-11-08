import react from "react";

class MemeGenerator extends react.Component{
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            imgUrl:""
        };
        this.handleText = this.handleText.bind(this);
    }

    handleText(e) {
        const { name, value } = e.target;

        this.setState({[name]:value})
        console.log(`${value} ${name}`);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(x => {
                this.setState({imgUrl:x.data.memes[this.getRandomInt(100)].url}) 
            }
            );

    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Text in top half"
                        value={this.state.topText}
                        onChange={this.handleText}
                    />
                    <br/>
                    <img
                        src={this.state.imgUrl} alt="meme"
                        className="meme"
                    />
                    <br/>
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Text in bottom half"
                        value={this.state.bottomText}
                        onChange={this.handleText}
                    />
                    <br/>
                    <button>Create</button>
                </form>
                


             </div>
        );
    }
}

export default MemeGenerator