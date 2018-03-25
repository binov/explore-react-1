class Counter extends React.Component {
     // This gets called later which breaks the this context
    // Adding bind(this) in render function may be expensive.So we override in constructor function
    //We have to always call super(props) in the constructor function
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }

    componentDidMount() {
        const savedVal = localStorage.getItem('count');
        const count = parseInt(savedVal,10);
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    handleAddOne() {
        // use this.setState to change the state so that the re-rendering happens automatically
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState)=> {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: this.props.count
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter count={200}/>, document.getElementById('app'));