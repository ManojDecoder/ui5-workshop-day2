sap.ui.controller("maps02.first", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf maps02.first
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf maps02.first
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf maps02.first
*/
	onAfterRendering: function() {

		this.map = null;
		
		var initialCord ={
				
				"lat":53.9173483,
				"lang":25.4605058
				
		}
	
		var latlng = new google.maps.LatLng(initialCord['lat'],initialCord['lang']);
		
		var myOption ={
				
				zoom:10,
				center:latlng,
				mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		
		this.map = new google.maps.Map($("#map-canvas").get(0),myOption);
	
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf maps02.first
*/
//	onExit: function() {
//
//	}

});