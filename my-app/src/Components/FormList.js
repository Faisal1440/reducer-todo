import React from "react"

const FormList= ({ toDo, toggleCompleted, clearCompleted}) => {
    
    console.log(toDo) //     <-------TEST PLEZ 

    return (
        <div>
            <button onClick={clearCompleted}>Clear completed</button>
            <div>
                {toDo.map(index => {
                    return(
                        <div
                            className={"chore " + (index.completed ? "done" : "")}
                            key={index.id}
                            onClick={() => toggleCompleted(index.id)}
                            >
                            <input type="checkbox" checked={index.completed} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FormList