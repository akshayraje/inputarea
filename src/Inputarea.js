import React, { Component } from 'react';

class Inputarea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initType: this.props.initType,
            disableType: this.props.disableType,
            value: this.props.value
        }
        this.cleanProps();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    cleanProps(){
        this.inputProps = Object.assign({}, this.props);
        let privateProps = ['initType', 'disableType'];
        privateProps.forEach(prop => {
            delete this.inputProps[prop];
        })
    }

    handleKeyDown(e){
        if(!this.state.disableType && this.state.initType === 'input' && e.keyCode === 13){
            this.setState({
                initType: 'textarea'
            })
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    componentDidUpdate(){
        if(!this.focused && this.nameTextarea){
            this.nameTextarea.focus();
            this.focused = true;
        }
    }

    render() {
        if(this.state.initType === 'input'){
            return (
                <input 
                    {...this.inputProps}
                    type="text" 
                    onKeyDown={this.handleKeyDown} 
                    onChange={this.handleChange} 
                    value={this.state.value} 
                />
            );
        }
        if(this.state.initType === 'textarea'){
            return (
                <textarea
                    {...this.inputProps}
                    ref={(textarea) => this.nameTextarea = textarea} 
                    onChange={this.handleChange} 
                    value={this.state.value}
                />
            );
        }
    }
}

Inputarea.defaultProps = {
    initType: 'input',
    value: ''
}

export default Inputarea;