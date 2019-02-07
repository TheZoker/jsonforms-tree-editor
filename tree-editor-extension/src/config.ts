export const labels = {
  '#root': 'label',
  '#elements': '',
  '#horizontallayout': '',
  '#verticallayout': '',
  '#categorization': '',
  '#control': 'label',
  '#category': 'label',
  '#group': 'label',
  '#rule': '',
  '#scope': '',
  '#labelObject': '',
  '#options': '',
};

export const modelMapping = {
  'attribute': 'type',
  'mapping': {
    'root': '#root',
    'elements': '#elements',
    'HorizontalLayout': '#horizontallayout',
    'VerticalLayout': '#verticallayout',
    'Categorization': '#categorization',
    'Control': '#control',
    'Category': '#category',
    'Group': '#group',
    'rule': '#rule',
    'scope': '#scope',
    'labelObject': '#labelObject',
    'options': '#options'
  }
};

export const uischemas = {
  '#fruitsOrVeggies': {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/name'
      },
      {
        type: 'Control',
        label: 'Birth Date',
        scope: '#/properties/birthDate'
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
