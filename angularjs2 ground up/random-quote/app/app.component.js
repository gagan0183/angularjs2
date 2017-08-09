(function (app) {
    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;

    app.AppComp = Component({
        selector: 'my-app',
        template: '<p>JoinsAngulars</p>'+
                    '<random-quote></random-quote>'
    })
    .Class({
        constructor: function() {}
    });


   })(window.app || (window.app = {}));