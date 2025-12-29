// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Docs",
  tagline: "Open Source Feature Flags and Remote Config",
  url: "https://docs.flagsmith.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Flagsmith",
  projectName: "flagsmith",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-openapi-docs"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          routeBasePath: "/", // Serve the docs at the site's root

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: { autoCollapseCategories: true, hideable: true },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "MGPE2FRVE0",
      // Public API key: it is safe to commit it
      apiKey: "dd394fec7a4b6f1427dd6e3d978711ca",
      indexName: "flagsmith",
    },
    tagManager: {
      trackingID: "GTM-5ZV5K5G",
    },
    navbar: {
      // title: "Flagsmith",
      // logo: {
      //   alt: "Flagsmith Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "React",
        // },
        {
          type: "docSidebar",
          sidebarId: "aws",
          position: "left",
          label: "AWS CLF-02",
        },
        // {
        //   label: "Edge API Specification",
        //   position: "left",
        //   to: "/edge-api/",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Flagsmith",
          items: [
            {
              label: "Flagsmith.com",
              to: "https://flagsmith.com/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Flagsmith",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://flagsmith.com/blog/",
            },
          ],
        },
        {
          title: "How-to guides",
          items: [
            {
              label: "Swift/iOS",
              href: "https://www.flagsmith.com/blog/swift-ios-feature-flags",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bullet Train Ltd. Built with Docusaurus.`,
    },
    // announcementBar: {
    //     id: 'support_us',
    //     content: `If you like Flagsmith, give us a star 🌟 on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Flagsmith/flagsmith">GitHub</a> and follow us ❤️ on <a target="_blank" rel="noopener noreferrer" href="https://x.com/getflagsmith">X</a>`,
    //     backgroundColor: '#5d60cc',
    //     textColor: '#ffffff',
    //     isCloseable: true,
    // },
    prism: {
      additionalLanguages: [
        "java",
        "scala",
        "csharp",
        "ruby",
        "rust",
        "swift",
        "dart",
        "php",
        "kotlin",
        "groovy",
        "hcl",
        "json",
      ],
    },
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
  } satisfies Preset.ThemeConfig,

  customFields: {
    CI: process.env.CI,
  },

  plugins: ["./plugins/flagsmith-versions"],

  scripts: [
    {
      src: "//js-eu1.hs-scripts.com/143451822.js",
      async: true,
      defer: true,
      id: "hs-script-loader",
    },
  ],

  clientModules: [
    require.resolve("./plugins/reo.js"),
    require.resolve("./plugins/amplitude.js"),
  ],
};

export default async function createConfig() {
  return config;
}
