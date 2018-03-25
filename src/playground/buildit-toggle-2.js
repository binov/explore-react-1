class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            visibility: false
        };

        this.toggleVisibility = this.toggleVisibility.bind(this);

    }

    toggleVisibility() {
       this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           }
       });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>Hey! Here are the details</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));