import * as React from "react";

function Goal(props) {

    const {goal, onUpdate} = props;

    return (
        <form>
            <div className="form-group">
                <label> Goal Name:
                    <input name="goalName" className="form-control" type="text" value={goal.name}
                           onChange={(e) => onUpdate({...goal, name: e.target.value})}
                    ></input>
                </label>
            </div>
        </form>
    );

}

export default Goal;
