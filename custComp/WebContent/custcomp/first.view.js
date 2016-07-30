sap.ui.jsview("custcomp.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf custcomp.first
	*/ 
	getControllerName : function() {
		return "custcomp.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf custcomp.first
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Circle",
			content: [
			
			          new my.own.Circle({
			        	  
			        	  fill:"#000",
			        	  cx:'3rem'
			          })
			          	,new my.own.Circle({
			        	  
			        	  fill:"#211"
			          })
			
			]
		});
	}

});