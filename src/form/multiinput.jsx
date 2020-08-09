import React from "react";
class Multiple extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            city:"",
            date:"01-01-2020"

        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
    }
    onFormSubmit(){
        alert(` this is my name : ${this.state.name}  and my city is  ${this.state.city} and date of birth ${this.state.date}` );
    }
    onChangeData(event){
        event.preventDefault();

        this.setState({[event.target.name]:event.target.value});

        // if(event.target.name==="name"){
        //     this.setState({name:event.target.value});
        // }
        // else if(event.target.name==="city"){
        //     this.setState({city:event.target.value});
        // }
        // else{
        //     this.setState({date:event.target.value});
        // }

    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <label>
                    Enter name :<input  name="name" type="text" value={this.state.name}  onChange={this.onChangeData}/>
                </label>
                <label>
                    Enter your city :<input name="city" type="text" value={this.state.city} onChange={this.onChangeData}/>
                </label>
                <label>
                    Enter your city :<input name="date" type="date" value={this.state.date} onChange={this.onChangeData}/>
                </label>
                <button type="submit">submit</button>
            </form>


        );
    }
}
export default Multiple;