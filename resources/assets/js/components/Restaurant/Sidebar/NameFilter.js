import React, {Component} from "react";

class NameFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    }

    handleInputChange(event) {
        // clear timeout when input changes value
        clearTimeout(this.timeout);
        const value = event.target.value;
        this.setState({input: value});
        this.props.onNameTyping(this.state.input)
        this.timeout = setTimeout(() => {
            this.props.onNameTyping(this.state.input)
        }, 1000);
    }

    handleInputKeyDown(event) {
        console.log(event)
    }

    render() {
        return (
            <input className="form-control"
                   type="text"
                   placeholder="Type here..."
                   aria-label="Search"
                   value={this.state.input}
                   onChange={this.handleInputChange}
                   onKeyDown={this.handleInputKeyDown}/>
        );
    }
}

export default NameFilter
