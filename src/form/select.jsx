import React from "react";
class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tag:"fruit"
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }
    onChangeData(event){
        event.preventDefault();
        this.setState({tag:event.target.value});
    } 
    onSubmit(){
        alert(`you selected : ${this.state.tag}`);
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <lalel>select your favourite fruit :
                    <select value={this.state.tag} onChange={this.onChangeData}>
                        <option value="grapes">grapes</option>
                        <option value="mango">mango</option>
                        <option value="apple">apple</option>
                        <option value="pomgranets">pomgranets</option>
                    </select>
                </lalel>
                <button type="submit">submit</button>
            </form>

        );
    }
}
export default Select;