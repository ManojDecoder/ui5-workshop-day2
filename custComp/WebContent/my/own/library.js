sap.ui.define(['jquery.sap.global','sap/ui/core/Core','sap/ui/core/library'],
		function(jQuery,Core,Lib){
	"use strict";
	
	
	(function(){
		
		
		jQuery.sap.require("my.own.Circle");
		
		sap.ui.getCore().initLibrary({
			name:"my.own",
			dependencies:["sap.ui.core"],
			interfaces:[],
			controls:[
			          "my.own.Circle"
			          ],
		    elements:[],
		    version:"0.0.1"
			
		});

	
	
		})();
	
	
	
},true);