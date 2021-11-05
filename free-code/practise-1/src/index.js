import react from "react";
import reactDom from "react-dom";
import GetSomeInfo from "./GetSomeInfo";
import './style.css';

class DisplayList extends react.Component {
    render() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
        
    }
}
function ListItems() {
    return (
        <ol>
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ol>
    );
    
}



reactDom.render(<GetSomeInfo/>, document.getElementById('root'));