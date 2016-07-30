sap.ui.jsview("router02.third", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf router02.third
	 */
	getControllerName : function() {
		return "router02.third";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf router02.third
	 */
	createContent : function(oController) {
		return new sap.m.Page({
			title : "Third",
			content : [

			new sap.m.IconTabBar({
				id : "idTabCont",
				select : [ oController.select, oController ],
				items : [ new sap.m.IconTabFilter({
					key : "tab1",
					icon : "sap-icon://hint",
					content : [ new sap.m.Text({
						text : "first Tab"
					}) ]
				}), new sap.m.IconTabFilter({
					key : "tab2",
					icon : "sap-icon://attachment",
					content : [ new sap.m.Text({
						text : "Second Tab"
					}) ]
				}), new sap.m.IconTabFilter({
					key : "tab3",
					icon : "sap-icon://notes",
					content : [ new sap.m.Text({
						text : "Third Tab"
					}) ]
				}) 
				]
			})

			]
		});
	}

});