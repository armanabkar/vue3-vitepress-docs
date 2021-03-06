module.exports = {
  title: "Vue3 VitePress Docs",
  description: "Just playing around.",
  themeConfig: {
    sidebar: {
      "/": getMainSidebar(),
    },
  },
};

function getMainSidebar() {
  return [
    {
      text: "Introduction",
      children: [
        { text: "Home Page", link: "/" },
        { text: "Page 2", link: "/page2" },
        { text: "Page 3", link: "/page3" },
      ],
    },
    {
      text: "Markdown",
      children: [{ text: "Guide", link: "/markdown" }],
    },
    {
      text: "Advanced",
      children: [{ text: "API", link: "/api/overview" }],
    },
  ];
}
