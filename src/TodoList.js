import React from 'react';
import ToDoItem from './ToDoItem'
import './index.css';

//定义一个react组件

class TodoList extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            inputValue:'',
            className:'',
        }
        this.handleInputChange  = this.handleInputChange.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
        this.handleBtnClick     = this.handleBtnClick.bind(this);
        this.handleDelete       = this.handleDelete.bind(this);
    }
    handleBtnClick(){
        this.setState({
            list: [...this.state.list, {
                name: this.state.inputValue,
                active: true,
                checked: false,
            }],
            inputValue:''
        })
    }
    handleInputKeyDown(e){
        if(e.keyCode===13){
            this.handleBtnClick()
        }
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleDelete(index){
        const list = [...this.state.list];
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    handleInputClick(isChecked, index){
        let list = [...this.state.list];
        list[index].active = !list[index].active;
        list[index].checked = isChecked;

        this.setState({
            list: list
        })
    }
    getTodoItems(){
        return(
            this.state.list.map((item,index)=>{
                return (
                    <ToDoItem
                        handleDelete={this.handleDelete.bind(this, index)}
                        handleInputClick={(isChecked) => this.handleInputClick(isChecked, index)}
                        key={index}
                        content={item}
                        index={index}
                    />
                );
            })
        )
    }
    render(){
        //jsx语法
        return(
            <div className='todoapp'>
                <div className='header'>
                    <input className="new-todo" value={this.state.inputValue} onKeyDown={this.handleInputKeyDown} onChange={this.handleInputChange} placeholder="What needs to be done?"/>
                   <button className='add-btn' onClick={this.handleBtnClick}>add</button>
                </div>
                <div className='main'>
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all" ></label>
                    <ul className='todo-list'>{this.getTodoItems()}</ul>
                </div>

                <div className='footer'>
                    <span className='todo-count'>2 item left</span>
                    <ul className="filters">
                        <li><a>All</a></li>
                        <li><a className="selected">Active</a></li>
                        <li><a>Completed</a></li>
                    </ul>
                    <button className="clear-completed" >Clear completed</button>
                </div>
            </div>

        );
    }
}

export default TodoList;