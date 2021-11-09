import { useState } from 'react';

function AddTask({onAdd}) {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Add description to task")
            return;
        }
        onAdd({ text, day, reminder });
        setText("");
        setDay("");
        setReminder(false);
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
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
                    value={day}
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
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => {
                        setReminder(e.currentTarget.checked)
                    }}
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