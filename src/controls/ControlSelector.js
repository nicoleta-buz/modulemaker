import React, { Component } from 'react';
import './styles.css';

const availableMetrics = [
    {id: "8bXN7", name: "Steps"},
    {id: "e5CEk", name: "Blood Sugar"},
    {id: "AFQ12", name: "Weight"}
];
const availableMetricLabels = availableMetrics.map(metric => metric.name);

const availableControls = [
    {
        name: "Bar Chart",
        previewImage: "http://placekitten.com/300/300",
        config: [
            {name: "Metric", type: "option", values: availableMetricLabels},
            {name: "Time Range", type: "option", values: ["Weekly", "Monthly"]}
        ]
    },
    {
        name: "Line Chart",
        previewImage: "http://placekitten.com/299/299",
        config: [
            {name: "Metric", type: "option", values: availableMetricLabels},
            {name: "Time Range", type: "option", values: ["Weekly", "Monthly"]},
        ]
    },
    {
        name: "Reminder",
        previewImage: "http://placekitten.com/301/301",
        config: [
            {name: "Reminder Message", type: "text"},
        ]
    }
];

/*const ThresholdInput = props => {
    return <div className='wrapper'>
        Min {props.label}: <input></input>
        Max {props.label}: <input></input>
    </div>

}*/

const OptionInput = props => (
    <div className='optionInput'>
        <label>{props.name}</label>
        <select value={props.selected} onChange={event => props.onUpdate(event.target.value)}>
            {props.values.map(v => <option>{v}</option>)}
        </select>
    </div>
);

const TextInput = props => (
    <div className='textInput'>
        <label>{props.name}</label>
        <input onChange={(e) => props.onUpdate(e.target.value)} />
    </div>
);

const AdvancedView = (props) => {
    const {control, onSave} = props;

    const components = {
        "text": TextInput,
        "option": OptionInput
    }

    const initialConfig = {};
    control.config.forEach((configItem) => {

        if (configItem.type === "text") {
            initialConfig[configItem.name] = "";    
        } else if (configItem.type === "option") {
            initialConfig[configItem.name] = configItem.values[0];
        }
        
    });
    const [config, setConfig] = React.useState(initialConfig);

    const updateConfigValue = (name, value) => {
        setConfig({...config, [name]: value});
    }
    /*TODO add state here*/

    return (
        <div className="configWrapper">
            <div className="configHeaders">
                <img src={control.previewImage}/>
                <h4>{control.name} Configuration</h4>
            </div>

            <div className="wrapper">
                {control.config.map(item => {
                if (components[item.type]) {
                    const TagName = components[item.type];
                    return <TagName
                        {...item}
                        value={initialConfig[item.name]}
                        onUpdate={(value) => {updateConfigValue(item.name, value)}}
                    />
                }
            })}
            </div>

            <button className="save" onClick={() => onSave(config)}>Save</button>

        </div>
    );
}

class ControlItem extends Component {

    clicked = () => {
        this.props.onClick(this.props.name)
    }

    render() {
        const {control, onClick} = this.props;
        return <span onClick={onClick} className="controlWrapper">
            <img className="imgBox" src={control.previewImage} />
            <div className="controlName"> {control.name}</div>
        </span>
    }

}

class ControlList extends Component {

    constructor(props) {
        super(props)
        this.state = { selectedComponentIndex: null }
    }
    configureComponent = (index) => {
        this.setState({ selectedComponentIndex: index })
    }

    render() {
        return <div className='controlListWrapper'>
            <div className='listWrapper'>
                {availableControls.map((control, index) =>
                    <ControlItem onClick={() => this.configureComponent(index)} control={control} />
                )}
            </div>
            {this.state.selectedComponentIndex !== null
                ? <AdvancedView
                    control={availableControls[this.state.selectedComponentIndex]}
                    onSave={(config) => this.props.onSave(
                        availableControls[this.state.selectedComponentIndex].name,
                        config
                    )}/>
                : null}
        </div>
    }
}

class ControlSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false
        }
    }
    render() {
        return <div>
            <button className={`listButton ${this.state.listOpen ? "active" : ""}`} onClick={() => {
                this.setState({ listOpen: !this.state.listOpen })
            }}>Select a control</button>
            {this.state.listOpen
                ? <ControlList onSave={(name, config) => {
                    this.props.onSave(name, config);
                    this.setState({listOpen: false});
                }}/>
                : null}
        </div>
    }
}

export default ControlSelector