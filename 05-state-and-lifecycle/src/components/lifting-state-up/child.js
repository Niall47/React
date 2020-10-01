import React from 'react'

export default class Child extends React.Component {

        constructor() {
            super();
            this.state = {command: ''};
        }

        handleFeedMe() {
            this.props.onFeedMe('Hello')
        }

    render() {
            // Typically an event is handled by a handler in this class
            // But we can lift state/data from child to parent by calling on the parent
        const {onFeedMe} = this.props;
        const {onCleanMe} = this.props;
        const {onPayMe} = this.props;
        return (
            <div>
                <button onClick={this.handleFeedMe} className="btn btn-primary">Feed Me</button>
                <button onClick={onCleanMe} className="btn btn-primary">Clean Me</button>
                <button onClick={onPayMe} className="btn btn-primary">Pay Me</button>
            </div>
        );
    }
}