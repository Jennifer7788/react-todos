import React from  'react';
import './index.css';

class ToDoItem extends  React.Component{
    handleDelete(){
        this.props.handleDelete();
    }
    handleInputClick(e){
        this.props.handleInputClick(e.target.checked);
    }
    render(){
        console.log(this.props.content);
        return (
            <li key={this.props.index} className={this.props.content.active === false?'completed':null}>
                <input
                    checked={this.props.content.checked}
                    className='toggle'
                    type='checkbox'
                    onChange={this.handleInputClick.bind(this)}
                />
                <label>{this.props.content.name}</label>
                <button  className='destroy' onClick={this.handleDelete.bind(this)}></button>
            </li>
        );
    }
}
export default ToDoItem;
