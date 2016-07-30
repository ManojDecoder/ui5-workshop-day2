  jQuery.sap.declare("demo.Component");

  sap.ui.core.UIComponent.extend("demo.Component", {
    metadata: {
      routing: {
        config: {
          viewType: "JS",
          viewPath: "router.view",
          targetControl: "navConteiner",
          targetAggregation: "pages",
          clearTarget: false
        },
        routes: [
          {
            pattern: "",
            name: "first",
            view: "first",
           targetAggregation: "pages"
          }, {
            pattern: "second",
            name: "second",
            view: "second",
            targetAggregation: "pages"
          }, {
            pattern: "third/{id}/:tab?:",
            name: "third",
            view: "third",
           targetAggregation: "pages"
          }
        ]
      }
    },


    init: function() {
      var router;
      jQuery.sap.require("sap.ui.core.routing.History");
      jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
      sap.ui.core.UIComponent.prototype.init.apply(this);
      router = this.getRouter();
      this.routerHandler = new sap.m.routing.RouteMatchedHandler(router);
      return router.initialize();
    },

    
    destory: function() {
      if (this.routerHandler) {
        this.routerHandler.destroy();
      }
      return sap.ui.core.UIComponent.prototype.destory.apply(this);
    },
    createContent: function() {
      this.view = sap.ui.view({
        id: "app",
        viewName: "router.view.App",
        type: sap.ui.core.mvc.ViewType.JS
      });
      return this.view;
    }
  });
