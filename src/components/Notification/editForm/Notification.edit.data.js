export default [
  {
    key: 'multiple',
    ignore: true
  },
  {
    key: 'clearOnHide',
    ignore: true
  },
  {
    key: 'allowCalculateOverride',
    ignore: true
  },
  {
    key: 'striped',
    ignore: true
  },
  {
    weight: 30,
    type: 'radio',
    label: 'Description method',
    tooltip: 'How should the Description field be assigned to the new Notification',
    key: 'method-desc',
    input: true,
    inline: true,
    defaultValue: true,
    values: [{
      label: 'Static',
      value: false
    }, {
      label: 'Dynamic',
      value: true
    }]
  }
];
