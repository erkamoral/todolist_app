import React, { Component } from 'react'
import { Button, ButtonGroup } from '@material-ui/core';
//filter todos by todos states of durum
const look_durum = "hepsi"
const LookTodoItem = ({onLook=f=>f}) =>
<div className="todo-look container">
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                <Button onClick={()=>onLook("hepsi")} >Hepsi</Button>
                <Button onClick={()=>onLook("tamam")} >Tamamlandı</Button>
                <Button onClick={()=>onLook("devam")} >Devam</Button>
            </ButtonGroup>
    </div>

export default LookTodoItem