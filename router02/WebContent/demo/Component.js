jQuery.sap.declare("demo.Component");

sap.ui.core.UIComponent.extend("demo.Component",{
	
	metadata:{
		routing:{
			
			config:{
				viewType:"JS",
				viewPath:"router02",
				targetControl:"navContainer",
				targetAggregation:"pages",
				
			},
			routes:[
			        {
			        	pattern:"",
			        	name:"first",
			        	view:"first",
			        	targetAggregation:"pages",	        	
			        	
			        }, {
			        	pattern:"second",
			        	name:"second",
			        	view:"second",
			        	targetAggregation:"pages",	        	
			        	
			        }, {
			        	pattern:"third/{id}/",
			        	name:"third",
			        	view:"third",
			        	targetAggregation:"pages",	        	
			        	
			        }
			        
			        ]
		}
		
	},
	
	init:function(){
		
		var router;
		
		jQuery.sap.require("sap.ui.core.routing.History");
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		router = this.getRouter();
		
		this.routerHandler = new sap.m.routing.RouteMatchedHandler(router);
		
		return router.initialize();
		
	},
	
	createContent: function(){
		
		this.view = sap.ui.view({
			id:"App", 
			viewName:"router02.App",
			type:sap.ui.core.mvc.ViewType.JS
			});
		
		var that= this.view;
		return that;
		
		
	}
	
	
	
	
	
});