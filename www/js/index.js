var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        document.querySelector('#deviceready .pending').className += ' hide';
        var completeElem = document.querySelector('#deviceready .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};
