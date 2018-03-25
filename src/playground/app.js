// First letter capital is a mst in React classes to diferentiate it from html
// Props - pass data in when we initialize the componenets (same as setting html attributes)

// Class based component.There are also stateless functional components
class IndecisionApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            options: []
        };

        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    // Lifecycle methods are available only to class based components
    // Lifecycle Method1 - Fires when the component gets mounted to the DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing. fallback to default
        }
        
        
    }
    
     // Lifecycle Method2 - Fires after the component updates (state or props changes)
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data');
        }        
    }

    // Lifecycle method3 - Fires before the component goes away(WHEN A GIVEN COMPONENT GETS UNMOUNTED)
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // handleDeleteAllOptions() {
    //     this.setState(() => {
    //         return ({
    //             options: []
    //         });
    //     });
    // }

    // Another way for handleDeleteAllOptions
    handleDeleteAllOptions() {
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption(optionToRemove) {
        console.log('hdo',optionToRemove);
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => option !== optionToRemove)})
        );
    }


   
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
 // state array.push is not recommended as its changing the state value.Use Arrays.concat
    handleAddOption(option) {
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Item already exists!'
        }
       this.setState((prevState) =>  ({ options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!!';
        
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOption}
                >
                    What Should I do ?
             </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
                <p>Here are your options.Total number of options : {props.options.length}</p>
                {props.options.length === 0 && <p>Please add an option to get started</p>}
                {
                    props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option} 
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    ))
                }
                <button onClick={props.handleDeleteAllOptions}>Remove All</button>
            </div>
    );
}


const Option = (props) => {
    return(
        <div>
            Option: {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            error: undefined
        }

        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() =>  ({ error }));
        if(!error) {
            e.target.elements.option.value ='';
        }   
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));