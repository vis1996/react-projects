import React from "react";
class TextArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data :"please write some thing....."
        }
        this.submit = this.submit.bind(this);
        this.dataChange = this.dataChange.bind(this);
    }

    submit(event){
        event.preventDefault();
        alert(`this is the data enterered by you :  ${this.state.data}`);

    }
    dataChange(event){
        event.preventDefault();
        this.setState({data:event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <label>
                    An Assay :<br />
                    <textarea value={this.state.data} onChange={this.dataChange} />
                </label>
                <button type="submit">submit</button>
               
            </form>


        );
    }
}
export default TextArea;