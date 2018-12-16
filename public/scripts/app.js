'use strict';

var Visibility = false;

var toggleVisibility = function toggleVisibility() {
    Visibility = !Visibility;
    render();
};
var render = function render() {
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
            { onClick: toggleVisibility },
            Visibility ? 'Hide Details' : 'Show Details'
        ),
        Visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey! There are some details you can see!'
            )
        )
    );
    ReactDOM.render(template, document.getElementById('rootid'));
};
render();
