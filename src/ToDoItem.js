import React from  'react';
import './index.css';

class ToDoItem extends  React.Component{
    handleDelete(){
        this.props.handleDelete(this.props.index);
    }
    handleInputClick(index,date){
        this.props.handleInputClick(this.props.data);
    }
    render(){
        /* return<li key={index} className={this.state.indexList.includes(index)?'completed':null}>
                    <div className='view'>
                        <input className='toggle' type='checkbox' onClick={this.handleInputClick.bind(this,index)}/>
                        <label>{item}</label>
                        <button  className='destroy' onClick={this.handleItemClick.bind(this,index)}></button>
                    </div>
                </li>*/
        return(
            <li>
                <input className='toggle' type='checkbox' onClick={this.handleInputClick.bind(this,this.props.index)}/>
                <label>{this.props.content}</label>
                <button  className='destroy' onClick={this.handleDelete.bind(this)}></button>
            </li>
        );
    }
}
export default ToDoItem;
