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
