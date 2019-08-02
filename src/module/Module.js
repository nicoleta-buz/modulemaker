import * as React from "react";
import Action from "./Action";
import Goal from "./Goal";

import './module.css';

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

                <marquee>Module maker!!</marquee>

                <div className="well form-group">
                    <label> Module Name:
                        <input name="moduleName" className="form-control" type="text" value={this.state.name}
                               onChange={this.handleChange}
                        ></input>
                    </label>
                </div>
                <div className='wellRow'>
                    <div className="well yellow">
                        <h4>Actions</h4>
                        {this.state.actions.map(action =>
                            <Action action={action} className='wellItem'/>
                        )}
                    </div>
                    <div className="well orange">
                        <h4>Goals</h4>
                        {this.state.goals.map(goal =>
                            <Goal goal={goal} className='wellItem'/>
                        )}
                    </div>
                </div>
            </form>
        );
    }

}

export default Module;
