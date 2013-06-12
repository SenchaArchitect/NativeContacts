/*
 * File: app/view/Form.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Contact.view.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactform',

    requires: [
        'Contact.view.Picture'
    ],

    config: {
        itemId: 'formCancelBtn',
        padding: '10px',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'starContact',
                        itemId: 'cancelBtn',
                        ui: 'decline',
                        text: 'Cancel'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'saveContactBtn',
                        ui: 'action',
                        iconCls: '',
                        text: 'Save'
                    }
                ]
            },
            {
                xtype: 'contactpic'
            },
            {
                xtype: 'textfield',
                itemId: 'firstName',
                margin: '10px 0 0 0',
                label: 'First Name',
                labelAlign: 'top',
                name: 'firstName',
                required: true,
                readOnly: false
            },
            {
                xtype: 'textfield',
                itemId: 'lastName',
                label: 'Last Name',
                labelAlign: 'top',
                name: 'lastName',
                readOnly: false
            },
            {
                xtype: 'textfield',
                itemId: 'phoneNumber',
                label: 'Phone Number',
                labelAlign: 'top',
                name: 'phoneNumber',
                required: true,
                readOnly: false
            },
            {
                xtype: 'emailfield',
                itemId: 'emailAddress',
                label: 'Email Address',
                labelAlign: 'top',
                name: 'emailAddress',
                placeHolder: 'email@example.com',
                readOnly: false
            },
            {
                xtype: 'textfield',
                itemId: 'address',
                label: 'Address',
                labelAlign: 'top',
                name: 'address',
                readOnly: false
            },
            {
                xtype: 'textfield',
                itemId: 'city',
                label: 'City',
                labelAlign: 'top',
                name: 'city',
                readOnly: false
            },
            {
                xtype: 'textfield',
                id: 'state',
                itemId: 'address',
                label: 'State',
                labelAlign: 'top',
                name: 'city',
                readOnly: false
            },
            {
                xtype: 'numberfield',
                id: 'zipcode',
                itemId: 'address',
                label: 'Zipcode',
                labelAlign: 'top',
                name: 'zipcode',
                readOnly: false
            }
        ]
    },

    getValidationErrors: function() {
        var errors = [];
        var reqFields = this.query('field[required=true]');
        var i = 0, ln = reqFields.length, field;
        for (; i < ln; i++) {
            field = reqFields[i];
            if (!field.getValue()) {
                errors.push(field.getLabel() + ' must be completed.');
            }
        }
        console.dir(errors);
        return errors;
    },

    setRecord: function(record) {
        this.callParent(arguments);
        if (record) {
            this.child('contactpic').setData(record.data);
        }
    }

});