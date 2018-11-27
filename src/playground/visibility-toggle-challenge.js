const appRoot = document.getElementById('app');

let buttonText = 'Show details';
const text = 'Hey. These are some details you can now see!';

const onButtonToggle = () => {
    
    if (buttonText === 'Show details')
        buttonText = 'Hide details';
    else 
        buttonText = 'Show details';

    renderPage();
}

const renderPage = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onButtonToggle}>{buttonText}</button>
            <p>{(buttonText === 'Hide details') ? text : false}</p>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderPage();