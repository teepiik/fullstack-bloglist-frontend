import React from 'react'

class TogglableBlog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const hideWhenVisible = {
            display: this.state.visible ? 'none' : '',
            paddingTop: 10
        }
        const showWhenVisible = {
            display: this.state.visible ? '' : 'none',
            paddingTop: 10
        }

        return (
            <div>
                <div style={hideWhenVisible}>
                    <button onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
                </div>
                <div style={showWhenVisible}>
                    <button onClick={this.toggleVisibility}>{this.props.buttonLabel}</button>
                    {this.props.children}

                </div>
            </div>
        )
    }
}

export default TogglableBlog