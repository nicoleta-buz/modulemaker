import * as React from "react";
import Action from "./Action";
import Goal from "./Goal";

import './module.css';

function Module(props) {
    const [name, setName] = React.useState(props.module.name);
    const [goals, setGoals] = React.useState(props.module.goals);
    const [actions, setActions] = React.useState(props.module.actions);

    const updateGoal = (updatedGoal, index) => {
        //updating arrays _must_ update the reference; probably better ways than this but :shrug: cba installing lodash
        setGoals(goals.map((g, i) => (i === index) ? updatedGoal : g));
    }

    const updateAction = (updatedAction, index) => {
        setActions(actions.map((a, i) => (i === index) ? updatedAction : a));
    }

    return (
        <form>
            <h1>Module Maker</h1>

            <div className="well form-group">
                <label> Module Name:
                    <input name="moduleName" className="form-control" type="text" value={name}
                           onChange={(e) => setName(e.target.value)}
                    ></input>
                </label>
            </div>
            <div className='wellRow'>
                <div className="well orange">
                    <h4>Goals</h4>
                    {goals.map((goal, index) =>
                        <Goal goal={goal} onUpdate={(updated) => updateGoal(updated, index)} className='wellItem'/>
                    )}
                </div>
                <div className="well yellow">
                    <h4>Actions</h4>
                    {actions.map((action, index) =>
                        <Action action={action} onUpdate={(updated) => updateAction(updated, index)} className='wellItem'/>
                    )}
                </div>
            </div>
        </form>
    );
}

export default Module;
