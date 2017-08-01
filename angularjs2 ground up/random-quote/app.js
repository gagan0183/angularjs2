(function () {
    var AppComp = ng.core.Component({
        selector: 'my-app',
        template: '<p>JoinsAngulars</p>'
    })
    .Class({
        constructor: function() {}
    });

    var AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComp],
        bootstrap: [AppComp]
    })
    .Class({
        constructor: function () {  }
    });

    ng.platformBrowserDynamic.platformBrowserDynamic()
        .bootstrapModule(AppModule);
})();