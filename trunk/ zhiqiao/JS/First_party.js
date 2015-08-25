/// <reference path="../JavascriptLib/jquery-1.2.6-intellisense.js" />
var db = {
   'predesign':[
   { id: 1, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 2, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 3, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 4, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 5, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 6, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 7, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 8, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 9, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' }
   ],
   prebuilt:[
   { id: 1, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 2, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 3, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 4, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 5, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 6, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 7, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 8, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 9, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' }
   ],
   built:[
   { id: 1, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 2, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 3, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 4, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 5, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 6, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 7, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 8, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' },
   { id: 9, surveyname: '地勘一', submitTime: '', surveyfile: 'sfadf.rar', designname: '', state: '' }
   ]
};
var predesignGrid;
var prebuiltGrid;
var builtGrid;

Ext.onReady(function() {
    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [
        new Ext.BoxComponent({
            region: 'north',
            el: 'title',
            height: 60
        }),
        new Ext.TabPanel({
            region: 'center',
            deferredRender: false,
            activeTab: 0,
            items: [
            {
                contentEl: 'tab1',
                title: '待完成的设计',
                closeable: true,
                autoScroll: true
            },
            {
                contentEl: 'tab2',
                title: '已完成设计尚未建造',
                closeable: true,
                autoScroll: true
            },
            {
                contentEl: 'tab3',
                title: '已完成建造',
                closeable: true,
                autoScroll: true
            }
            ]
        })
        ]
    });
    var cm1 = new Ext.grid.ColumnModel([
    new Ext.grid.RowNumberer(),
    { header: '编号', dataIndex: 'id' },
    { header: '地勘名称', dataIndex: 'surveyname' },
    { header: '提交时间', dataIndex: 'submitTime' },
    { header: '查看', dataIndex: 'surveyfile' },
    { header: '出图名称', dataIndex: 'designname' },
    { header: '基础设计', dataIndex: 'state' },
    { header: '状态', dataIndex: 'state' }
    ]);
    var ds1 = new Ext.data.Store({
        proxy: new Ext.data.MemoryProxy(db),
        reader: new Ext.data.JsonReader({ root: 'predesign'}, [
            { name: 'id' },
            { name: 'surveyname' },
            { name: 'submitTime' },
            { name: 'surveyfile' },
            { name: 'designname' },
            { name: 'state' },
            { name: 'state' }
        ])
    });
    ds1.load();
    prebuiltGrid = new Ext.grid.GridPanel({
        el: 'grid1',
        ds: ds1,
        cm: cm1,
        title: '基站项目',
        autoScroll: true,
        autoHeight:true
    });
    prebuiltGrid.render();
})
