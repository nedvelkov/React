import { useState } from 'react';

function AddTask() {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    value={text}
                    placeholder="Add task"
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input
                    type="text"
                    value={text}
                    placeholder="Add task"
                    onChange={(e) => {
                        setDay(e.target.value)
                    }}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input
                   type="checkbox"
                />
            </div>
            <input
                type="submit"
                value="Save task"
                className="btn btn-block"
            />
        </form>
    );
}

export default AddTask