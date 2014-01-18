Ext.define('FirstApp.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'home',

	config: {
		title: 'Home',
		iconCls: 'home',
        layout: 'fit',
        styleHtmlContent: true,
        scrollable: true,
        styleHtmlCls: 'panel-home',
        html:'<h1>Welcome to My First App</h1>' +
            '<hr>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus aliquet, lacinia mi in, congue ipsum. Duis posuere convallis neque a elementum. Aliquam pharetra erat eu fringilla vulputate. Ut suscipit ac turpis non pellentesque. Nullam tempor sem at felis accumsan tempor. Sed consequat dictum metus, vel blandit felis tincidunt nec. Phasellus a convallis ligula. Nulla ornare gravida porta. Duis et orci a libero porta venenatis. Sed varius mauris libero, porta lobortis tellus rutrum vitae.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus aliquet, lacinia mi in, congue ipsum. Duis posuere convallis neque a elementum. Aliquam pharetra erat eu fringilla vulputate. Ut suscipit ac turpis non pellentesque. Nullam tempor sem at felis accumsan tempor. Sed consequat dictum metus, vel blandit felis tincidunt nec. Phasellus a convallis ligula. Nulla ornare gravida porta. Duis et orci a libero porta venenatis. Sed varius mauris libero, porta lobortis tellus rutrum vitae.</p>' +
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed purus aliquet, lacinia mi in, congue ipsum. Duis posuere convallis neque a elementum. Aliquam pharetra erat eu fringilla vulputate. Ut suscipit ac turpis non pellentesque. Nullam tempor sem at felis accumsan tempor. Sed consequat dictum metus, vel blandit felis tincidunt nec. Phasellus a convallis ligula. Nulla ornare gravida porta. Duis et orci a libero porta venenatis. Sed varius mauris libero, porta lobortis tellus rutrum vitae.</p>',
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Home'
            }
        ]

	}
});