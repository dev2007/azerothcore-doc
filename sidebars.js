/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "intro",
    "installation",
    {
      type: 'category',
      label: '1. 安装要求',
      link: {type: 'doc',id: 'requirements'},
      items: [
        'requirements/linux-requirements',
        'requirements/macos-requirements',
        'requirements/windows-requirements'
      ]
    },
    {
      type: 'category',
      label: '2. 核心安装',
      link: {type: 'doc',id: 'core-installation'},
      items: [
        'core-installation/linux-core-installation',
        'core-installation/macos-core-installation',
        'core-installation/windows-core-installation'
      ]
    },
    {
      type: 'category',
      label: '3. 服务器设置',
      link: {type: 'doc',id: 'server-setup'},
      items: [
        'server-setup/linux-server-setup',
        'server-setup/macos-server-setup',
        'server-setup/windows-server-setup'
      ]
    },
    "database-installation",
    "networking",
    "final-server-steps",
    {
      type: 'category',
      label: '7.保持服务器更新',
      link: {type: 'doc',id: 'keeping-the-server-up-to-date'},
      items: [
        'keeping-the-server-up-to-date/linux-keeping-the-server-up-to-date',
        'keeping-the-server-up-to-date/macos-keeping-the-server-up-to-date',
        'keeping-the-server-up-to-date/windows-keeping-the-server-up-to-date',
        'keeping-the-server-up-to-date/database-keeping-the-server-up-to-date'
      ]
    },
    "client-setup"
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
