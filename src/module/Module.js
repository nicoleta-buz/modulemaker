import * as React from "react";
import Action from "./Action";
import Goal from "./Goal";

import './module.css';

function Module(props) {

    const {module, onSave} = props;

    const [name, setName] = React.useState(module.name);
    const [goals, setGoals] = React.useState(module.goals);
    const [actions, setActions] = React.useState(module.actions);

    const updateGoal = (updatedGoal, index) => {
        setGoals(goals.map((g, i) => (i === index) ? updatedGoal : g));
    }

    const updateAction = (updatedAction, index) => {
        setActions(actions.map((a, i) => (i === index) ? updatedAction : a));
    }

    return (
        <form>
            <div className="well form-group">
                <label> Module Name:
                    <input name="moduleName" className="form-control" type="text" value={name}
                           onChange={(e) => setName(e.target.value)}
                    ></input>
                </label>
            </div>
            <div className='wellRow'>
                <div className="well purple">
                    <h4>Goals</h4>
                    {goals.length > 0
                        ? goals.map((goal, index) =>
                            <Goal goal={goal} onUpdate={(updated) => updateGoal(updated, index)} className='wellItem'/>
                          )
                        : <span className='emptyMessage'>None 😿</span>
                    }
                </div>
                <div className="well pink">
                    <h4>Actions</h4>
                    {actions.length > 0
                        ? actions.map((action, index) =>
                            <Action action={action} onUpdate={(updated) => updateAction(updated, index)} className='wellItem'/>
                          )
                        : <span className='emptyMessage'>None 😿</span>
                    }

                </div>
            </div>

            <div className="buttonWrapper">
                <button className="button grey">Cancel</button>
                <button className="button success" onClick={() => onSave({...module, name, goals, actions})}>Save</button>
            </div>
        </form>
    );
}

export default Module;
