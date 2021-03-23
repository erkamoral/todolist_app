const ShowTodoItem = ({onRemove=f=>f, onEdit=f=>f, onToggle=f=>f, title, durum}) =>
    <div className="todo-item container">
        <div className="row">
        <div onClick={()=>onToggle(durum)} className={"todo-title col-10" + (durum=="devam" ? ' tamam' : ' devam')}>{title}</div>
        <div onClick={onEdit} className="todo-edit-btn start col-1">✎</div>
        <div onClick={onRemove} className="todo-rm-btn col-1">✘</div>
        </div>
    </div>

export default ShowTodoItem
