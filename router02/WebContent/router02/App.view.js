sap.ui.jsview("router02.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf router02.App
	*/ 
	getControllerName : function() {
		return "router02.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf router02.App
	*/ 
	createContent : function(oController) {
 		
		
		
		return sap.m.App("navContainer");
	}

});