import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Module from "./module/Module";

function App() {
    return (
        <Router>

            <Route exact path={"/"} component={() => <div>
                {modules.map(m =>
                    <div><a href={"/detail"}>{m.name}</a></div>
                )}
            </div>}>

            </Route>

            <Route path={"/detail"} component={() =>
                <div>
                    <Module module={modules[0]}></Module>
                    <Link to={"/"}>back</Link>
                </div>
            }/>

        </Router>
    );
}

let modules =
    [
        {
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
    ]


export default App;
