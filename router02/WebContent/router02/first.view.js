sap.ui.jsview("router02.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf router02.first
	*/ 
	getControllerName : function() {
		return "router02.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf router02.first
	*/ 
	createContent : function(oController) {
 		
		
		
		return new sap.m.Page({
			title: "First",
			content: [
			
			          
			          new sap.m.Bar({
			        	
			        	  contentRight:[
			        	                new sap.m.Button({
			        	                	text:"go to 2nd Page",
			        	                	press:[oController.next,oController]
			        	                })
			        	                ]
			          
			        	  
			          })
			          
			]
		});
	}

});