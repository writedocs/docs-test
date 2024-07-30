module.exports = {
  "docs": [
    {
      "type": "html",
      "value": "<span class='sidebar_title'>Getting Started</span>",
      "defaultStyle": true,
      "className": "sidebar_title"
    },
    {
      "type": "doc",
      "id": "getting-started/what-is-deets"
    },
    {
      "type": "doc",
      "id": "getting-started/start-using-deets"
    },
    {
      "type": "doc",
      "id": "getting-started/onboard-merchants"
    },
    {
      "type": "html",
      "value": "<span class='sidebar_title'>Integration</span>",
      "defaultStyle": true,
      "className": "sidebar_title"
    },
    {
      "type": "doc",
      "id": "integration/overview"
    },
    {
      "type": "category",
      "label": "Create a Token",
      "link": {
        "type": "doc",
        "id": "integration/create-a-token"
      },
      "items": [
        {
          "type": "doc",
          "id": "integration/iframe-configuration-object"
        },
        {
          "type": "category",
          "label": "Integrating Deets iFrame",
          "link": {
            "type": "doc",
            "id": "integration/integrating-deets-iframe"
          },
          "items": [
            {
              "type": "doc",
              "id": "integration/events"
            },
            {
              "type": "doc",
              "id": "integration/function"
            }
          ]
        },
        {
          "type": "doc",
          "id": "integration/styling-the-iframe"
        }
      ]
    },
    {
      "type": "category",
      "label": "Create a Payment",
      "link": {
        "type": "doc",
        "id": "integration/create-a-payment"
      },
      "items": [
        {
          "type": "doc",
          "id": "integration/payment-types"
        }
      ]
    },
    {
      "type": "html",
      "value": "<span class='sidebar_title'>Additional Information</span>",
      "defaultStyle": true,
      "className": "sidebar_title"
    },
    {
      "type": "doc",
      "id": "additional-information/pci-compliance"
    },
    {
      "type": "doc",
      "id": "additional-information/tokenization"
    }
  ],
  "apiReference": [
    {
      "type": "html",
      "value": "<span class='sidebar_title'>Authorization</span>",
      "defaultStyle": true,
      "className": "sidebar_title"
    },
    {
      "type": "doc",
      "id": "api-reference/authorization/create-api-key",
      "className": "api-method post"
    },
    {
      "type": "doc",
      "id": "api-reference/authorization/create-app-token",
      "className": "api-method post"
    },
    {
      "type": "html",
      "value": "<span class='sidebar_title'>Merchants</span>",
      "defaultStyle": true,
      "className": "sidebar_title"
    },
    {
      "type": "doc",
      "id": "api-reference/merchants/create-merchant",
      "className": "api-method post"
    },
    {
      "type": "doc",
      "id": "api-reference/merchants/get-merchant-list",
      "className": "api-method get"
    },
    {
      "type": "doc",
      "id": "api-reference/merchants/get-merchant-by-id",
      "className": "api-method get"
    },
    {
      "type": "doc",
      "id": "api-reference/merchants/update-merchant",
      "className": "api-method put"
    },
    {
      "type": "html",
      "value": "<span class='sidebar_title'>Payments</span>",
      "defaultStyle": true,
      "className": "sidebar_title"
    },
    {
      "type": "doc",
      "id": "api-reference/payments/create-payments",
      "className": "api-method post"
    },
    {
      "type": "doc",
      "id": "api-reference/payment-split/create-split-payments",
      "className": "api-method post"
    },
    {
      "type": "doc",
      "id": "api-reference/refund-split/refund-split-payments",
      "className": "api-method post"
    },
    {
      "type": "doc",
      "id": "api-reference/refund/refund-payments",
      "className": "api-method post"
    },
    {
      "type": "doc",
      "id": "api-reference/payments/get-payment-list-for-merchant",
      "className": "api-method get"
    },
    {
      "type": "doc",
      "id": "api-reference/payments/get-payment-by-id",
      "className": "api-method get"
    },
    {
      "type": "doc",
      "id": "api-reference/payments/get-payment-status-by-id",
      "className": "api-method get"
    }
  ]
};