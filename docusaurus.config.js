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
        // { to: "blog", label: "Blog", position: "left" },
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
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
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
