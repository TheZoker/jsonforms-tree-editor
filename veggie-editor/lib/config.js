"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labels = {
    "#fruitsOrVeggies": {
        constant: "Fruits/Vegetables"
    },
    "#veggie": {
        property: "veggieName"
    }
};
exports.modelMapping = {
    attribute: 'type',
    mapping: {
        fruitsOrVeggies: '#fruitsOrVeggies',
        veggies: '#veggies'
    }
};
exports.uischemas = {
    '#fruitsOrVeggies': {
        type: 'VerticalLayout',
        elements: [
            {
                type: 'Control',
                scope: '#/properties/fruits'
            },
            {
                type: 'Control',
                scope: '#/properties/vegetables'
            }
        ]
    },
    '#veggie': {
        type: 'HorizontalLayout',
        elements: [
            {
                type: 'Control',
                scope: '#/properties/veggieName'
            },
            {
                type: 'Control',
                scope: '#/properties/veggieLike'
            }
        ]
    }
};
//# sourceMappingURL=config.js.map