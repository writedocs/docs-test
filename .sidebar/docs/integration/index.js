module.exports = [
  {
    type: 'doc',
    id: 'integration/overview',
  }, 
  {
    type: 'category',
    label: "Create a Token",
    link: {
      type: 'doc',
      id: 'integration/create-a-token',
    },
    items: [
      'integration/iframe-configuration-object',
      {
        type: 'category',
        label: "Integrating Deets iFrame",
        link: {
          type: 'doc',
          id: 'integration/integrating-deets-iframe',
        },
        items: [
          'integration/events',
          'integration/function'
        ],
      },
      'integration/styling-the-iframe',
    ],
  },
  {
    type: 'category',
    label: "Create a Payment",
    link: {
      type: 'doc',
      id: 'integration/create-a-payment',
    },
    items: [
      'integration/payment-types'
    ],
  },
]