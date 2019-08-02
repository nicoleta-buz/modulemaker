import * as React from "react";

class Action extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.action;
        this.handleActionNameChange = this.handleActionNameChange.bind(this);
        this.handleTargetTypeChange = this.handleTargetTypeChange.bind(this);
    }

    handleActionNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTargetTypeChange(event) {
        this.setState({targetType: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label> Action Name:
                        <input name="actionName" className="form-control" type="text" value={this.state.name}
                               onChange={this.handleActionNameChange}
                        ></input>
                    </label>
                </div>
                <div className="form-group">
                    <label> Target Type:
                        <input name="targetType" className="form-control" type="text" value={this.state.targetType}
                               onChange={this.handleTargetTypeChange}
                        ></input>
                    </label>
                </div>
            </form>
        );
    }

}

export default Action;
