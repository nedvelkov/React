import Task from "./Task"

function Tasks({ tasks ,onDelete,onToggle}) {
   return (
       <>
           {
               tasks.map(t => {
                   return <Task
                       key={t.id}
                       task={t}
                       onDelete={onDelete}
                       onToggle={onToggle}
                   />
               })
           }
        </>
    )
}

export default Tasks