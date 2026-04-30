import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Delft Taiwan Student Organization',
  tagline: 'DTSO, connecting Taiwanese students in Delft',
  favicon: 'img/dtso_logo_white.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DTSO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/dtso_logo_white.png',
      },
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/events',
          label: 'Events',
          position: 'left',
        },
        {
          to: '/resources',
          label: 'Resources',
          position: 'left',
        },
        {
          to: '/team',
          label: 'Team',
          position: 'left',
        },
        {
          to: '/gallery',
          label: 'Gallery',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'DTSO',
          items: [
            {
              label: 'Delft Taiwan Student Organization',
              to: '/',
            },
            {
              html: `
    <div style="
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      line-height: 1.8;
    ">
      <span>📍</span>
      <div>
        Kanaalweg 4<br/>
        2628 EB Delft<br/>
        The Netherlands
      </div>
    </div>
  `,
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About Us',
              to: '/about',
            },
            {
              label: 'Our Mission',
              to: '/about',
            },
            {
              label: 'Team',
              to: '/team',
            },
          ],
        },
        {
          title: 'Events',
          items: [
            {
              label: 'Upcoming Events',
              to: '/events',
            },
            {
              label: 'Past Events',
              to: '/events',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Life in Delft',
              to: '/resources',
            },
            {
              label: 'Useful Links',
              to: '/resources',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/dtso_tud/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/tudelftdtso/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/dtso-delft-taiwanese-student-organization/',
            },
            {
              label: 'Email',
              href: 'mailto:delft.taiwan.student.org@gmail.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} DTSO Delft Taiwan Student Organization`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
