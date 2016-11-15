
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
        console.log(this.state.newTodo);
        //const that = this;
        //setTimeout(() => console.log(that.state.newTodo));
    }
    render(){
        const {onAdd} = this.props;
        const {newTodo} = this.state;
        return (
            <div>
                <input type='text' placeholder='Add todo' value={newTodo} onChange={this.changeNewTodo}/>
                <button onClick={() => {
                    onAdd(newTodo);
                    this.setState({newTodo: ''});
                }}>Add</button>
            </div>
        )
    }
}
export default AddTodo;
