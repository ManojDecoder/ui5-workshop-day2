sap.ui.jsview("maps02.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf maps02.first
	*/ 
	getControllerName : function() {
		return "maps02.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf maps02.first
	*/ 
	createContent : function(oController) {
 		
		var oMapView = new sap.ui.core.HTML("idMapCanvas",{
			
			content:
				"<div style='position:absolute;height:100%;width:100%;'>"+
				"<div id='map-canvas' style='width:100%;height:100%;border:1px solid #999;'></div>"+
				"</div>"
			
		});
		
		
		return new sap.m.Page({
			title: "Maps",
			content: [
			          	oMapView
			
			]
		});
	}

});