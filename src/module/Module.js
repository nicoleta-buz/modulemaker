import * as React from "react";
import Action from "./Action";
import Goal from "./Goal";

import './module.css';

function Module(props) {
    const [name, setName] = React.useState(props.module.name);
    const [goals, setGoals] = React.useState(props.module.goals);
    const [actions, setActions] = React.useState(props.module.actions);

    return (
        <form>
            <h1>Module Maker</h1>

            <div className="well form-group">
                <label> Module Name:
                    <input name="moduleName" className="form-control" type="text" value={name}
                           onChange={setName}
                    ></input>
                </label>
            </div>
            <div className='wellRow'>
                <div className="well orange">
                    <h4>Goals</h4>
                    {goals.map(goal =>
                        <Goal goal={goal} className='wellItem'/>
                    )}
                </div>
                <div className="well yellow">
                    <h4>Actions</h4>
                    {actions.map(action =>
                        <Action action={action} className='wellItem'/>
                    )}
                </div>
            </div>
        </form>
    );
}

export default Module;
