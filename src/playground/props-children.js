const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
}

ReactDOM.render((
    <Layout>
        <div>
            <h1>Heading</h1>
            <p>Content</p>
        </div>
    </Layout>
),document.getElementById('app'));