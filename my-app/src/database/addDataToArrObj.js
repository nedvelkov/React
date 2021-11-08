function AddDataToArrObj(props) {
    const content = props.content;
    const id = props.id
    const prop = props.prop;
    const url = "https://swapi.dev/api/" + content + "/" + id;    

    let list = [];
        fetch(url)
        .then(r => r.json())
            .then(ch => {
                const arr = ch[prop];
                for (const item of arr) {
                    list.push(item);
                }
        })
    
    return list;
}



export default AddDataToArrObj