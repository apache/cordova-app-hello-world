var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.event.deviceready, false);
    },
    event: {
        deviceready: function() {
            app.report('deviceready');
        }
    },
    report: function(id) {
    }
};
