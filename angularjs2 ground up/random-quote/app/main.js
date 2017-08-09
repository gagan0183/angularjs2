(function (app) {
    var Class = ng.core.Class;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
    var AppModule = app.AppModule;

    var MockQuoteService = Class({
        constructor: function () {  },
        getRandomQuote: function () {  
          return {
            line: 'A mock quote',
            author: 'Authors'
          };
        }
    })
   
    platformBrowserDynamic().bootstrapModule(AppModule);


})(window.app || (window.app = {}));