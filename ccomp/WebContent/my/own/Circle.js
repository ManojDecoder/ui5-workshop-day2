sap.ui.define(['jquery.sap.global','sap/ui/core/Control'],
		function(jQuery,Control){
	"use strict";
	
	var Circle = sap.ui.core.Control.extend('my.own.Circle',{
	
		metadata:{
			properties:{
				
				'width':{
					type:'sap.ui.core.CSSSize',
					group:'Dimension',
					defaultValue:'1rem'
					
				},
				'radius':{
					type:'sap.ui.core.CSSSize',
					group:'Dimension',
					defaultValue:'1rem'
					
				},
				'cx':{
					type:'sap.ui.core.CSSSize',
					group:'Dimension',
					defaultValue:'1rem'
					
				},
				'cy':{
					type:'sap.ui.core.CSSSize',
					group:'Dimension',
					defaultValue:'1rem'
					
				},'fill':{
					type:'sap.ui.core.CSSColor',
					defaultValue:'#fff'
					
				}
			}
			
		},
		
		renderer : function(oRm,oControl){
			
			
			if(!oControl.getVisible()){
				return;
				}
			oRm.write('<div>');
			oRm.write('<svg>');
			oRm.write('<circle');
			oRm.write(" width='"+oControl.getWidth()+"'");
			oRm.write(" r='"+oControl.getRadius()+"'");
			oRm.write(" cx='"+oControl.getCx()+"'");
			oRm.write(" cy='"+oControl.getCy()+"'");
			oRm.write(" fill='"+oControl.getFill()+"'");
			oRm.write('>');
			//oRm.write('/>');
			oRm.write('</div>');
		
			
		}
		
		
	});
	
	Circle.prototype.init = function(){
		console.log("in the circle");
	};
	
	return Circle;
	
	
},true);
