import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Module from "./module/Module";
import './App.css';

function App() {
    return (
        <Router>
            <Route exact path={"/"} component={() => <div className="container">
                {modules.map(m =>
                    <div className="centered">Module Name: <a href={`/detail/${m.name}`}>{m.name}</a></div>
                )}
            </div>}>
            </Route>
            <Route path={"/detail/:name"} component={({match}) =>

                <div>
                    <Link to={"/"}>back</Link>
                    <Module module={modules.find(function (elem) {
                        return elem.name === match.params.name;
                    })}></Module>
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
