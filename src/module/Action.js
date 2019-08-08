import * as React from "react";
import ControlSelector from '../controls/ControlSelector'

import './module.css';

function Action(props) {

    const {action, onUpdate} = props;


    const onNameChange = (event) => {
        onUpdate({...action, name: event.target.value});
    }

    const onTypeChange = (event) => {
        onUpdate({...action, targetType: event.target.value});
    }

    //TODO move state higher up tree, so can reuse etc
    const [selectedControlName, setSelectedControlName] = React.useState(null);
    const [config, setConfig] = React.useState(null);

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

            {selectedControlName && config && <div>

                <h4>Control: {selectedControlName}</h4>

                {Object.keys(config).map((key) =>
                    (<p key={key}>{key}: {config[key]}</p>))
                }

            </div>}
            {/*TODO pass in initial config to allow editing, etc*/}
            <ControlSelector onSave={(name, config) => {
                setSelectedControlName(name);
                setConfig(config);
            }}/>

        </div>
    );

}

export default Action;
