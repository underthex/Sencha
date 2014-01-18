Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
        {
            xtype: 'home'
        },
        {
            xtype: 'places'
        }
        ]
    }
});
Ext.Viewport.add({
    xtype: 'titlebar',
    docked: 'top',
    title: 'First App',
    items: [
        {
            align: 'left',
            text: 'Settings'
        },
        {
            align: 'right',
            text: 'Close'
        }
    ]
});