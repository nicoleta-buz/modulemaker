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
                    "name": "Track steps",
                    "targetType": "target",
                    "metric": {
                        "threshold": 10000,
                        "metricId": "stepsTrack"
                    }
                },
                {
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
                    "name": "Track steps",
                    "targetType": "target",
                    "metric": {
                        "threshold": 10000,
                        "metricId": "stepsTrack"
                    }
                },
                {
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

function App(props) {

    const [modules, setModules] = React.useState(hardcodedModules);
    const updateModule = (updatedModule, index) => {
        //updating arrays _must_ update the reference; probably better ways than this but :shrug: cba installing lodash
        setModules(modules.map((m, i) => (i === index) ? updatedModule : m));
    }

    const add = () => {
        setModules([...modules, {id: modules.length + 1, name: "Unnamed Module", goals: [], actions: []}])
    }

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
                                    <Link to={`/detail/${m.id}`}>Edit</Link>
                                </div>
                                <div className="moduleBody">
                                    <h5>Goals</h5>
                                    {m.goals.length > 0
                                        ? (<ol>{m.goals.map(goal => <li>{goal.name}</li>)}</ol>)
                                        : (<span className='emptyMessage'>None 😿</span>)
                                    }
                                </div>
                                <div className="moduleBody">
                                    <h5>Actions</h5>
                                    {m.actions.length > 0
                                        ? <ol>{m.actions.map(action => <li>{action.name}</li>)}</ol>
                                        : (<span className='emptyMessage'>None 😿</span>)
                                    }
                                </div>
                            </div>
                        )}

                        <div className="addWrapper">
                            <button className='add' onClick={add}>Add new</button>
                        </div>
                    </div>
                }/>
                <Route path={"/detail/:id"} component={({match}) =>
                    <div>
                        <Link to={"/"}>back</Link>

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
