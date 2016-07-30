sap.ui.jsview("router.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf router.view.App
	*/ 
	getControllerName : function() {
		return "router.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf router.view.App
	*/ 
	createContent : function(oController) {
		 this.setDisplayBlock(true);
	      return sap.m.App("navConteiner");
	}

});