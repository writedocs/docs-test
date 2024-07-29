/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 const { 
  gettingStarted,
  integration,
  additionalInformation,
  authorization,
  merchants,
  payments
} = require('./.sidebar');

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Getting Started</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...gettingStarted,
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Integration</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...integration,
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Additional Information</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...additionalInformation,
  ],
  apiReference: [
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Authorization</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...authorization,
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Merchants</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...merchants,
    {
      type: 'html',
      value: '<span class=\'sidebar_title\'>Payments</span>',
      defaultStyle: true,
      className: 'sidebar_title',
    },
    ...payments,
  ]
};

module.exports = sidebars;
