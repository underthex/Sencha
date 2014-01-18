
Ext.define('FirstApp.store.Places', {
    extend: 'Ext.data.Store',
    config:{
        model: 'FirstApp.model.Place',
        autoLoad: 'true',
        //### Retrieve Data
        proxy:{
            type: 'ajax',
            url: 'package.json',
            reader: {
                type:'json',
                rootProperty: 'results'
            }
        }
//        data:[
//            {
//                name: 'Name 1',
//                icon: 'icon1',
//                vicinity: 'vicinity1'
//            },
//            {
//                name: 'name2',
//                icon: 'icon2',
//                vicinity: 'icon2'
//            },
//            {
//                name: 'name3',
//                icon: 'icon3',
//                vicinity: 'vicinity3'
//            }
//        ]
    }
});