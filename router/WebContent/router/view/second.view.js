sap.ui.jsview("router.view.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf router.second
	*/ 
	getControllerName : function() {
		return "router.view.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf router.second
	*/ 
	createContent : function(oController) {
		var oPage =  new sap.m.Page({
			title: "Second",
			content: [
			
			]
		});
 		var oFooter = new sap.m.Bar({
 	        contentRight: [
 	          new sap.m.Button({
 	            text: "go to next page",
 	            press: [oController.next, oController]
 	          })
 	        ]
 	      });
 		oPage.setFooter(oFooter);
 		return oPage;
	}

});