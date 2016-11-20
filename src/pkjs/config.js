module.exports = [
    { 
        "type": "heading", 
        "defaultValue": "Preferences" ,
        "size": 3
    }, 
    { 
        "type": "section",
        "items": [
            {
                "type": "heading",
                "defaultValue": "Timezone"
            },
            {
                "type": "text",
                "defaultValue": "NOTE not DST aware."
            },
            {
                "type": "input",
                "label": "TZ1 name",
                "description": "Name limited to 6 bytes",
                "messageKey": "TZ1_NAME",
                "defaultValue": "GMT-1",
                "attributes": {
                    "limit": 6
            }
            },
            {
                "type": "slider",
                "label": "TZ1 UTC offset",
                "description": "UTC offset (whole hours only)",
                "messageKey": "TZ1_UTC_OFFSET",
                "defaultValue": -1,
                "min": -12,
                "max": +12,
                "step": 1
            },
            {
                "type": "input",
                "label": "TZ2 name",
                "description": "Name limited to 6 bytes",
                "messageKey": "TZ2_NAME",
                "defaultValue": "GMT+1",
                "attributes": {
                    "limit": 6
            }
            },
            {
                "type": "slider",
                "label": "TZ2 UTC offset",
                "description": "UTC offset (whole hours only)",
                "messageKey": "TZ2_UTC_OFFSET",
                "defaultValue": +1,
                "min": -12,
                "max": +12,
                "step": 1
            },
        ]
    },
    {
        "type": "submit",
        "defaultValue": "Save"
    }
];
