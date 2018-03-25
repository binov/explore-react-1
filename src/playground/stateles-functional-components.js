// Stateless Functional Components
// No state , but props can be passed.no 'this'
// faster than class based
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}
ReactDOM.render(<User name="Andrew" age={26} />, document.getElementById('app'));