String.prototype.remove = function (str) {
    return this.toString().replace(new RegExp('(' + str +')+'), '');
}

var bind = function () {
    var hamburgers = document.querySelectorAll('.js-hamburger');
    if (hamburgers) {
        hamburgers.forEach(function (item) {
            item.onclick = function () {
                if (item.className.indexOf('is-active') !== -1) {
                    item.className = item.className.replace(new RegExp('(?:^|\\s)' + 'is-active' + '(?:\\s|$)'), '');
                } else {
                    item.className += " is-active";
                }
            };
        });
    }
};

var Reveal = window.Reveal;

function handleShowPanelType(domElement, isShow) {
    if(isShow) {
        domElement.className += ' is-active';
    } else {
        domElement.className = domElement.className.remove(' is-active');
    }
}

function handleFragmentEvents(event, isShow) {
    let dataSet = event.fragment.dataset;
	if(dataSet && dataSet.type) {
        let elements = document.querySelectorAll('.js-' + dataSet.type);
        handleShowPanelType(elements[dataSet.index], isShow); 
    }
}

Reveal.addEventListener( 'fragmentshown', function( event ) {
    handleFragmentEvents(event, true);
} );

Reveal.addEventListener( 'fragmenthidden', function( event ) {
	handleFragmentEvents(event, false);
} );

window.onload = function () {
    bind();
};