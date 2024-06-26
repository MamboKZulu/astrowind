import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        
        {
          text: 'Our Annual MUCOWAFEST',
          href: getPermalink('/homes/mucowafest'),
        },
        /*{
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        }, */
        {
          text: 'The Team!',
          href: getPermalink('/homes/ourteam'),
        },
      ],
    },
    {
      text: 'Services',
      links: [
        /*{
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },*/
        {
          text: 'Services',
          href: getPermalink('taoservices', 'post'),
        },
      /*  {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },*/
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
       /* {
          text: 'Terms',
          href: getPermalink('/terms'),
        },*/
        {
          text: 'Policy',
          href: getPermalink('taopolicy', 'post'),
        },
      ],
    },
    /*{
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },*/
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'You Should READ!',
          href: getPermalink('blogging-importance', 'post'),
        },
 /*        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
       {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        }, */
      ],
    },
    {
      text: 'Go To Top',
      href: '#',
    },
  ],

};

export const footerData = {
  links: [
    
        {
      title: 'Support',
      links: [
        { text: 'Contact', href: getPermalink('/contact')},
        { text: 'Donate', href: '#' },
        //{ text: '', href: '#' },
        { text: 'Participate/Volunteer', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: getBlogPermalink()},
       // { text: 'Careers', href: '#' },
        //{ text: 'Press', href: '#' },
        //{ text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        //{ text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
