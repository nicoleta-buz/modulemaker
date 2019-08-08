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
        }
    ];

function App(props) {

    const [modules, setModules] = React.useState(hardcodedModules);
    const updateModule = (updatedModule, index) => {
        //updating arrays _must_ update the reference; probably better ways than this but :shrug: cba installing lodash

        console.log('updating? ', updatedModule, index);
        setModules(modules.map((m, i) => (i === index) ? updatedModule : m));
    }

    return (
        <Router>

            <div className="container">
                <h1>Module Maker</h1>

                <Route exact path={"/"} component={() =>
                    <div>
                        {modules.map(m =>
                            <div className="centered">Module Name: <Link to={`/detail/${m.id}`}>{m.name}</Link></div>
                        )}
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
