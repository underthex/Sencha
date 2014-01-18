Ext.define('FirstApp.view.Places', {
   extend:'Ext.Panel',
    xtype: 'places',
    config:{
        title: 'Places',
        iconCls: 'maps',
        layout: 'fit',
        items:[
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Places'
            },
            {
                xtype: 'list',
                store: 'Places',
                itemTpl: '<img src="{icon}" /><h1>{name}</h1><p>{vicinity}</p>',
                itemCls: 'place-entry'
            }
        ]
    }

});
