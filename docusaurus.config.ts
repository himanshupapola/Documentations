// @ts-check
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "Docs",
  tagline: "Open Source Feature Flags and Remote Config",
  url: "https://docs.flagsmith.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",

  // ✅ ALGOLIA VERIFICATION (REQUIRED)
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "algolia-site-verification",
        content: "675E1F43D23918FA",
      },
    },
  ],

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
          routeBasePath: "/",
          docItemComponent: "@theme/ApiItem",
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
      appId: "MGPE2FRVE0",
      apiKey: "dd394fec7a4b6f1427dd6e3d978711ca",
      indexName: "flagsmith",
    },

    tagManager: {
      trackingID: "GTM-5ZV5K5G",
    },

    navbar: {
      items: [
        {
          type: "docSidebar",
          sidebarId: "aws",
          position: "left",
          label: "AWS CLF-02",
        },
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
      { highlight: "python", language: "python", logoClass: "python" },
      { highlight: "bash", language: "curl", logoClass: "bash" },
      { highlight: "csharp", language: "csharp", logoClass: "csharp" },
      { highlight: "go", language: "go", logoClass: "go" },
      { highlight: "javascript", language: "nodejs", logoClass: "nodejs" },
      { highlight: "ruby", language: "ruby", logoClass: "ruby" },
      { highlight: "php", language: "php", logoClass: "php" },
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
