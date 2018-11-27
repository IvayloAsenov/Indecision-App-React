'use strict';

var appRoot = document.getElementById('app');

var buttonText = 'Show details';
var text = 'Hey. These are some details you can now see!';

var onButtonToggle = function onButtonToggle() {

    if (buttonText === 'Show details') buttonText = 'Hide details';else buttonText = 'Show details';

    renderPage();
};

var renderPage = function renderPage() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onButtonToggle },
            buttonText
        ),
        React.createElement(
            'p',
            null,
            buttonText === 'Hide details' ? text : false
        )
    );

    ReactDOM.render(template, appRoot);
};

renderPage();
