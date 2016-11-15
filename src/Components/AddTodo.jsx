
import React from 'react';

class AddTodo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }

        this.changeNewTodo = this.changeNewTodo.bind(this);
    }
    changeNewTodo(evt){
        this.setState({newTodo: evt.target.value})
    }
    render(){
        const {onAdd} = this.props;

        return (
            <div>
                <input type='text' placeholder='Add todo' value={this.state.newTodo} onChange={this.changeNewTodo}/>
                <button onClick={() => {
                    onAdd(this.state.newTodo);
                    this.setState({newTodo: ''});
                }}>Add</button>
            </div>
        )
    }
}
export default AddTodo;
