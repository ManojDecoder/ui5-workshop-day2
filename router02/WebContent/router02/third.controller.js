sap.ui.controller("router02.third", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf router02.third
*/
	onInit: function() {

		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		
		return this.router.attachRoutePatternMatched(this._handleR,this);

	},

	_handleR : function(oEvt){
		
		var model;
		
		tabCont = sap.ui.getCore().byId("idTabCont");
		
		this.id = oEvt.getParameter("arguments").id;
		
		tabCont.setSelectedKey("tab"+this.id);
		
		model = new sap.ui.model.json.JSONModel({
			id:this.id
		})
		
		return this.getView().setModel(model,"data");
		
		
		
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf router02.third
*/
//	onBeforeRendering: function() {
//
//	},

	select : function(oEvt){
		
		return this.router.navTo("third",{
			id:this.id,
			tab:this.tab
		});
		
	}
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf router02.third
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf router02.third
*/
//	onExit: function() {
//
//	}

});