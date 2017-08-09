(function (app) {
    var Class = ng.core.Class;
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var QuoteService = app.QuoteService;
    var RandomQuoteComponent = app.RandomQuoteComponent;
    var AppComp = app.AppComp;
    
    app.AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComp, RandomQuoteComponent],
        providers: [{
          provide: QuoteService, useClass: QuoteService
        }],
        bootstrap: [AppComp]
    })
    .Class({
        constructor: function () {  }
    });

})(window.app || (window.app = {}));