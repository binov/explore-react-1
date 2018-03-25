let visible = false;

const onShowDetails = () => {
    visible = true;
    renderVisibilityToggle();
}

const onHideDetails = () => {
    visible = false;
    renderVisibilityToggle();   
}

const toggleVisibility = () => {
    visible = !visible;
    renderVisibilityToggle();
}

const appRoot = document.getElementById('app');
const renderVisibilityToggle = () => {
    const template = (
        <div>
            <h1>Visibility toggle</h1>
            {!visible && <button onClick={onShowDetails}>Show Details</button>}
            {visible && <button onClick={onHideDetails}>Hide Details</button>}
            <button onClick={toggleVisibility}>
                {visible ? 'HIDE DETAILS':'SHOW DETAILS'}
            </button>
            {visible && <p>Hey! Here are the details!</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderVisibilityToggle();
