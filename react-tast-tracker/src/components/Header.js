import PropTypes from "prop-types";
import Button from "./Button"

function Header(props) {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text={props.showAdd?"Hide":"Add new task"} onClick={props.onAdd}/>
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