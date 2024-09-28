import React from 'react'
class AddConatactList extends React.Component{
    state = {
        name: ""
    }
}


class AddConatactList extends React.Component {
    render() {//it is root components to join the child components
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className='ui from'>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email"/>
               </div>
               <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}
export default AddConatactList;