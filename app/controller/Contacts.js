/*
 * File: app/controller/Contacts.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Contact.controller.Contacts', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'ContactStore'
        ],

        refs: {
            contactinfo: {
                autoCreate: true,
                selector: 'contactinfo',
                xtype: 'contactinfo'
            },
            contactform: {
                autoCreate: true,
                selector: 'contactform',
                xtype: 'contactform'
            },
            contactlist: {
                autoCreate: true,
                selector: 'contactlist',
                xtype: 'contactlist'
            }
        },

        control: {
            "button#addContactBtn": {
                tap: 'onAddContactBtnTap'
            },
            "button#saveContactBtn": {
                tap: 'onSaveContactBtnTap'
            },
            "button#editContactBtn": {
                tap: 'onEditContactBtnTap'
            },
            "button#cancelBtn": {
                tap: 'onCancelBtnTap'
            },
            "dataview": {
                itemtap: 'onContactItemTap'
            },
            "button#infoBackBtn": {
                tap: 'onInfoBackBtnTap'
            },
            "favoriteview": {
                activate: 'onFavoriteViewActivate'
            },
            "list": {
                activate: 'onListActivate'
            },
            "contactpic": {
                change: 'onContactPickerChange'
            }
        }
    },

    onAddContactBtnTap: function(button, e, eOpts) {
        var referrer = Ext.Viewport.getActiveItem();
        var form = this.getContactform();
        form.setRecord(null);
        form.reset();
        form.referrer = referrer;
        Ext.Viewport.setActiveItem(form);
    },

    onSaveContactBtnTap: function(button, e, eOpts) {
        var form = this.getContactform();
        var errors = form.getValidationErrors();

        if (errors.length) {
            Ext.Msg.alert('Error', errors.join('<br/>'));
        } else {
            var values = form.getValues();
            var record = form.getRecord();
            if (record) {
                record.setData(values);
                record.commit();
                if (form.referrer.setRecord) {
                    form.referrer.setRecord(record);
                }
            } else {
                Ext.StoreManager.lookup('ContactStore').add(values);
            }
            Ext.Viewport.setActiveItem(form.referrer);
            delete form.referrer;
        }

    },

    onEditContactBtnTap: function(button, e, eOpts) {
        var referrer = Ext.Viewport.getActiveItem();
        var form = this.getContactform();
        var info = this.getContactinfo();
        form.referrer = referrer;
        Ext.Viewport.setActiveItem(form);
        form.setRecord(info.getRecord());
    },

    onCancelBtnTap: function(button, e, eOpts) {
        var form = this.getContactform();
        Ext.Viewport.setActiveItem(form.referrer);
        delete form.referrer;

    },

    onContactItemTap: function(dataview, index, target, record, e, eOpts) {
        var info = this.getContactinfo();
        info.setRecord(record);
        Ext.Viewport.setActiveItem(info);

    },

    onInfoBackBtnTap: function(button, e, eOpts) {
        Ext.Viewport.setActiveItem(0);
    },

    onFavoriteViewActivate: function(container, newActiveItem, oldActiveItem, eOpts) {
        var ds = Ext.StoreManager.lookup('ContactStore');
        ds.filter('isFavorite', true);
    },

    onListActivate: function(container, newActiveItem, oldActiveItem, eOpts) {
        var ds = Ext.StoreManager.lookup('ContactStore');
        ds.clearFilter();
    },

    onContactPickerChange: function(picker, value, eOpts) {
        var currentForm = Ext.Viewport.getActiveItem();
        var record = currentForm.getRecord();
        if (record) {
            //    Ext.Msg.alert('pic', 'setting pic to ' + value);
            record.set('picture', value);
            record.commit();
            currentForm.setRecord(record);
        }

    }

});