import react from "react";

function ContactCard(props) {
    const imgUrl = props.img;
    const contactName = props.name;
    const phone = props.phone;
    const email = props.email;
    return (
        <div>
            <img src={imgUrl}/>
            <h3>{contactName}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export default ContactCard