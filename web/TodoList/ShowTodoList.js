import { Component } from 'react'
import PropTypes from 'prop-types';
import ShowTodoItem from './ShowTodoItem'
import EditTodoItem from './EditTodoItem'
import LookTodoItem from './LookTodoItem'


class ShowTodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {editing: ""}
        this.setEditingItem=this.setEditingItem.bind(this)
        this.editItem=this.editItem.bind(this)
        this.toggleItem=this.toggleItem.bind(this)
    }

    //set the id of the item currently being edited
    setEditingItem(id) {
        this.setState({editing: id})
    }

    //dispatch an item edit
    //set the editing item to no id
    editItem(new_title, id) {
        this.props.onEdit(id, new_title)
        this.setEditingItem("")
    }
    lookItem(look_durum){
        console.log(look_durum)
        let durum_obj=document.getElementsByClassName('tamam')
        if (look_durum == "tamam"){
            durum_obj = document.getElementsByClassName('devam')
            for (let i=0;  i<durum_obj.length; i++){
                durum_obj[i].parentNode.parentNode.style.display = 'block';
            }
            durum_obj = document.getElementsByClassName('tamam')
            for (let i=0;  i<durum_obj.length; i++){
                durum_obj[i].parentNode.parentNode.style.display = 'none';
            }
        }
        else if (look_durum == "devam"){
            durum_obj = document.getElementsByClassName('tamam')
            for (let i=0;  i<durum_obj.length; i++){
                durum_obj[i].parentNode.parentNode.style.display = 'block';
            }
            durum_obj = document.getElementsByClassName('devam')
            for (let i=0;  i<durum_obj.length; i++){
                durum_obj[i].parentNode.parentNode.style.display = 'none';
            }
        }
        else {
            durum_obj = document.getElementsByClassName('todo-title') 
            for (let i=0;  i<durum_obj.length; i++){
                durum_obj[i].parentNode.parentNode.style.display = 'block';
            }
        }
    }
    toggleItem(durum, id){
        console.log(durum)
        if(durum == "devam"){
            durum ="tamam"
        }
        else {
            durum="devam"
        }
        console.log(durum)
        this.props.onToggle(id, durum)
    }

    render() {
        const { store } = this.context
        const state = store.getState()
        console.log(state)
        return (
            <div>
                <LookTodoItem
                    onLook={(look_durum)=>this.lookItem(look_durum)}>
                </LookTodoItem>
                {state.todos.map((todo,i) => {
                    console.log(todo,i)
                    

                    if(todo.id === this.state.editing) {
                        return (
                            
                        <EditTodoItem
                            key={i}
                            title={todo.title}
                            onRemove={()=>this.props.onRemove(todo.id)}
                            onEdit={(new_title)=>this.editItem(new_title, todo.id,)}>
                        </EditTodoItem> )
                    } else {
                        return (
                        <ShowTodoItem
                            key={i}
                            title={todo.title}
                            durum = {todo.durum}
                            onRemove={()=>this.props.onRemove(todo.id)}
                            onEdit={()=>this.setEditingItem(todo.id)}
                            onToggle={(durum)=>this.toggleItem(durum, todo.id) }>
                        </ShowTodoItem> )
                    }
                })}
            </div>
        )//return
    }//render
}
                                // todo.durum=="devam" ? todo.durum="tamam" : todo.durum="devam";
                                // this.toggleItem(todo.durum, todo.id)
ShowTodoList.contextTypes = {
    store: PropTypes.object
}

export default ShowTodoList
