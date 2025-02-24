export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Deal Kh',
  description:
    'Best ecommerce platform for your business needs with a modern design and easy to use.',
  navItems: [
    {
      label: 'Home',
      href: '/',
      tooltip: 'Go to Home Page',
    },
    {
      label: 'Deal',
      href: '/deal',
      tooltip: 'Go to Discount Page',
    },
    {
      label: 'About',
      href: '/about',
      tooltip: 'Go to About Page',
    },
    {
      label: 'Policy',
      href: '/policy',
      tooltip: 'Go to Policy Page',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
