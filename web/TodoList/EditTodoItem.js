const EditTodoItem = ({onRemove=f=>f, onEdit=f=>f, title}) => {
    let new_title = ''

    return (
        //adding todo-item edit object when edit state
        <div className="todo-item edit container">
            <div className="custom-row">
            <input className="col-10" autoFocus placeholder="İşi düzenle..."
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            onEdit(new_title.value)
                        }
                    }}
                    defaultValue={title}
                    ref={input=>new_title=input}></input>  
            <div onClick={()=>onEdit(new_title.value)} className="todo-edit-btn col-1">✔</div>                                     
            <div onClick={onRemove} className="todo-rm-btn col-1">✘</div>
        </div>
        </div>
    )
}

export default EditTodoItem
