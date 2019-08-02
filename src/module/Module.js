import * as React from "react";

class Module extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: "defaultName"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label> Module Name:
                        <input name="moduleName" className="form-control" type="text" value={this.state.name}
                               onChange={this.handleChange}
                        ></input>
                    </label>
                    <h5> {this.state.name} ----</h5>
                </div>
            </form>
        );
    }

}

export default Module;
