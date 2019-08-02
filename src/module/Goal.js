import * as React from "react";

class Goal extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.goal;
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label> Goal Name:
                        <input name="goalName" className="form-control" type="text" value={this.state.name}
                               onChange={this.handleNameChange}
                        ></input>
                    </label>
                </div>
            </form>
        );
    }

}

export default Goal;
