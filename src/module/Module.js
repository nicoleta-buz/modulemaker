import * as React from "react";
import Action from "./Action";
import Goal from "./Goal";

class Module extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.module;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label> Module Name:
                        <input name="moduleName" className="form-control" type="text" value={this.state.name}
                               onChange={this.handleChange}
                        ></input>
                    </label>
                </div>
                {this.state.actions.map(action =>
                    <Action action={action}/>
                )
                }
                {this.state.goals.map(goal =>
                    <Goal goal={goal}/>
                )
                }
            </form>
        );
    }

}

export default Module;
