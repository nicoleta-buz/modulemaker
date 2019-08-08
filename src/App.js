import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Module from "./module/Module";
import './App.css';

const hardcodedModules =
    [
        {
            "id": 1,
            "name": "Weight",
            "goals": [
                {
                    "name": "Manage my weight"
                }
            ],
            "actions": [
                {
                    "id": 1,
                    "name": "Track steps",
                    "targetType": "target",
                    "metric": {
                        "threshold": 10000,
                        "metricId": "stepsTrack"
                    }
                },
                {
                    "id": 2,
                    "name": "Track WC",
                    "targetType": "target",
                    "metric": {
                        "threshold": 10000,
                        "metricId": "wcTrack"
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "blood",
            "goals": [
                {
                    "name": "reduce blood "
                }
            ],
            "actions": [
                {
                    "id": 3,
                    "name": "Track steps",
                    "targetType": "target",
                    "metric": {
                        "threshold": 10000,
                        "metricId": "stepsTrack"
                    }
                },
                {
                    "id": 4,
                    "name": "Track WC",
                    "targetType": "target",
                    "metric": {
                        "threshold": 10000,
                        "metricId": "wcTrack"
                    }
                }
            ]
        },
        {
            "id": 3,
            "name": "unnamed",
            "goals": [],
            "actions": []
        }
    ];

/*TODO generally: add keys to the maps; since this is all fake and we have no `id`s for anything there's no real unique keys
would probably fix that when writing real json*/

/*TODO generally: clean up the `form` elements, causing weird reloads. should probably be minimal, 
and have some logic to prevent form submission*/
function App(props) {

    const [modules, setModules] = React.useState(hardcodedModules);
    const updateModule = (updatedModule, index) => {
        //updating arrays _must_ update the reference; probably better ways than this but :shrug: cba installing lodash
        setModules(modules.map((m, i) => (i === index) ? updatedModule : m));
    }

    const add = () => {
        setModules([...modules, {id: modules.length + 1, name: "Unnamed Module", goals: [], actions: []}])
    }

    const emptyMessage = (<span className='emptyMessage'>None 😿</span>);

    return (
        <Router>

            <div className="container">
                <h1>Module Maker</h1>

                <Route exact path={"/"} component={() =>
                    <div>
                        {modules.map(m =>
                            <div className="module">
                                <div className="moduleTitle">
                                    <h4>{m.name}</h4>
                                    <Link to={`/modules/${m.id}/detail`}>Edit</Link>
                                </div>
                                <div className="moduleBody">
                                    <h5>Goals</h5>
                                    {m.goals.length > 0
                                        ? (<ol>{m.goals.map(goal => <li>{goal.name}</li>)}</ol>)
                                        : emptyMessage
                                    }
                                </div>
                                <div className="moduleBody">
                                    <h5>Actions</h5>
                                    {m.actions.length > 0
                                        ? <ol>{m.actions.map(action => <li>{action.name}</li>)}</ol>
                                        : emptyMessage
                                    }
                                </div>
                            </div>
                        )}

                        <div className="addWrapper">
                            <button className='add' onClick={add}>Add new</button>
                        </div>
                    </div>
                }/>
                <Route path={"/modules/:id/detail"} component={({match}) =>
                    <div>
                        <Link to={"/"}>&#8249; Back</Link>

                        <Module
                            module={modules.find(elem => (elem.id === parseInt(match.params.id)))}
                            onSave={(updated) => updateModule(updated, modules.findIndex(elem => elem.id === parseInt(match.params.id)))}
                        />
                    </div>
                }/>
            </div>

        </Router>
    );
}

export default App;
