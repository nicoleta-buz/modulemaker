import * as React from "react";

import './module.css';

function Action(props) {

    const {action, onUpdate} = props;

    const onNameChange = (event) => {
        onUpdate({...action, name: event.target.value});
    }

    const onTypeChange = (event) => {
        onUpdate({...action, targetType: event.target.value});
    }

    return (
        <div className='well'>
            <div className="form-group">
                <label> Action Name:
                    <input name="actionName" className="form-control" type="text" value={action.name}
                           onChange={onNameChange}
                    ></input>
                </label>
            </div>
            <div className="form-group">
                <label> Target Type:
                    <input name="targetType" className="form-control" type="text" value={action.targetType}
                           onChange={onTypeChange}
                    ></input>
                </label>
            </div>
        </div>
    );

}

export default Action;
