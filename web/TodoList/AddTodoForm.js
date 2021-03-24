import React, { Component } from 'react'
import PropTypes from 'prop-types';




class AddTodoForm extends Component {
    

    render () {
        //adding input and button for adding todo and create func which is onAdd
        let title = ''
        let durum = "devam"
        const {store} = this.context
        const state = store.getState()
        return (         
            <div className="todo-add-form">

                <form onSubmit={ e =>{
                        e.preventDefault()
                        this.props.onAdd(title.value,durum)
                        title.value = ''
                    }}>
                        <div className="container"> 
                        <div className="row">
                    <input className="col-10"  placeholder="Yapılacak iş..."
                            ref={input=>title=input}></input>
                            <button className="col-1">＋</button>
                            </div>
                            </div>
                </form>
            </div>
            
        )
    }
}

AddTodoForm.contextTypes = {
    store: PropTypes.object
}

export default AddTodoForm
