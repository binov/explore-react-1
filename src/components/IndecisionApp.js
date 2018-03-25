import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

// First letter capital is a mst in React classes to diferentiate it from html
// Props - pass data in when we initialize the componenets (same as setting html attributes)

// Class based component.There are also stateless functional components
class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

     // handleDeleteAllOptions() {
    //     this.setState(() => {
    //         return ({
    //             options: []
    //         });
    //     });
    // }

    // Another way for handleDeleteAllOptions
    handleDeleteAllOptions = () => {
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption = (optionToRemove) => {
        console.log('hdo',optionToRemove);
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => option !== optionToRemove)})
        );
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
       // alert(option);
       this.setState(() => ({ selectedOption: option }));
    }

    clearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))        
    }

 // state array.push is not recommended as its changing the state value.Use Arrays.concat
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'Item already exists!'
        }
       this.setState((prevState) =>  ({ options: prevState.options.concat(option)}));
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

   
    render() {
        const subtitle = 'Put your life in the hands of a computer!!';
        
        return(
            <div>
                <Header subtitle={subtitle}/>
                    <div className="container">
                        <Action 
                            hasOption={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                        <div className="widget">
                            <Options
                                options={this.state.options}
                                handleDeleteAllOptions={this.handleDeleteAllOptions}
                                handleDeleteOption={this.handleDeleteOption}
                            />
                            <AddOption
                                handleAddOption={this.handleAddOption}
                            />
                        </div>
                    </div>
                <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
            </div>
        );
    }
}

export default IndecisionApp;