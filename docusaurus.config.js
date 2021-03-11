module.exports = {
  title: "Led Departure Board Docs",
  tagline: "Documentation on Led Departure Board",
  url: "https://docs.leddepartureboard.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "benfl3713", // Usually your GitHub org/user name.
  projectName: "DepartureBoard-Docs", // Usually your repo name.
  themeConfig: {
    description: "Documentation on Led Departure Board",
    navbar: {
      title: "Departure Board Docs",
      logo: {
        alt: "Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          to: "docs/getting-started/introduction",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/benfl3713/DepartureBoard/discussions/176",
          label: "Help",
          position: "right",
        },
        {
          href: "https://leddepartureboard.com",
          label: "Website",
          position: "right",
        },
        {
          href: "https://github.com/benfl3713/DepartureBoard",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    googleAnalytics: {
      trackingID: "UA-140494832-6",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            // {
            //   label: "Style Guide",
            //   to: "docs/",
            // },
            {
              label: "Introduction",
              to: "docs/getting-started/introduction",
            },
            {
              label: "Main Board",
              to: "docs/board-types/main-board",
            },
            {
              label: "Single Board",
              to: "docs/board-types/single-board",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Docs GitHub",
              href: "https://github.com/benfl3713/DepartureBoard-Docs",
            },
            {
              label: "Github Project",
              href: "https://github.com/benfl3713/DepartureBoard",
            },
            {
              label: "Led Departure Board",
              href: "https://leddepartureboard.com",
            },
          ],
        },
        {
          title: "Requests",
          items: [
            {
              label: "Feature Request",
              href:
                "https://github.com/benfl3713/DepartureBoard/issues/new?assignees=&labels=enhancement&template=feature_request.md",
            },
            {
              label: "Bug Report",
              href:
                "https://github.com/benfl3713/DepartureBoard/issues/new?assignees=&labels=bug&template=bug_report.md",
            },
            {
              label: "Ask Anything",
              href:
                "https://github.com/benfl3713/DepartureBoard/discussions/176",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Led Departure Board. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/benfl3713/DepartureBoard-Docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/benfl3713/DepartureBoard-Docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
