var granimInstance = new Granim({
    element: '#canvas-interactive',
    name: 'interactive-gradient',
    elToSetClassOn: '.canvas-interactive-wrapper',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    stateTransitionSpeed: 500,
    states : {
        "default-state": {
            gradients: [
                ['#C2C9D4', '#B2B7C1'],
            ],
            transitionSpeed: 3500
        },
        "happy-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#47a7d1', '#26D0CE'],
                ['#EAEE6C', '#B3EE6C']
            ],
            transitionSpeed: 3500
        },
        "violet-state": {
            gradients: [
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9']
            ],
            transitionSpeed: 3500
        },
        "orange-state": {
            gradients: [ 
                ['#FF4E50', '#F9D423'], 
                ['#EF2C60', '#EE6C8F']
            ],
            transitionSpeed: 3500,
        }
    }
});

// With jQuery
$('#default-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('default-state');
    setClass('#default-state-cta')
});
$('#happy-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('happy-state');
    setClass('#happy-state-cta')
});
$('#violet-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('violet-state');
    setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function(event) {
    event.preventDefault();
    granimInstance.changeState('orange-state');
    setClass('#orange-state-cta')
});

function setClass(element) {
    $('.canvas-interactive-wrapper a').removeClass('active');
    $(element).addClass('active');
};
