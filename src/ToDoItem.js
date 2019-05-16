import React from  'react';
import './index.css';

class ToDoItem extends React.Component{
    render(){
        return(
            <li>
                <input className='toggle' type='checkbox' onClick={this.props.handleInputClick}/>
                <label>{this.props.content}</label>
                <button  className='destroy' onClick={this.props.handleDelete}></button>
            </li>
        );
    }
}
export default ToDoItem;
