import PropTypes from "prop-types";
import Button from "./Button"

function Header(props) {
    const onClick = () => {
        console.log("click from Header");
    }
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text="Add" onClick={onClick}/>
        </header>
    )
}

//with this can assign default values!
Header.defaultProps = {
    title: "Task Tracker"
  };

//with this can assign default type of property!
Header.propTypes = {
    title: PropTypes.string,
}

export default Header