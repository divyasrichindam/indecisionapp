class VisibilityToggle extends React.Component {
constructor(props) {
    super(props);
    this.handleToggleVivibility = this.handleToggleVivibility.bind(this);
        this.state = {
  visibility : false 
        };
    }

handleToggleVivibility() {
    this.setState((prevState) => {
return {
    visibility : !prevState.visibility
};
    });
}

render() {
    return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVivibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey! There are some details you can see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))




