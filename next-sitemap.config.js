/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ekuphumuleni.ngo',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: ['https://ekuphumuleni.ngo/sitemap.xml'],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page type
    const customConfig = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };

    // Homepage - highest priority
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'daily';
    }
    // Main pages - high priority
    else if (
      ['/about', '/services', '/contact', '/facilities'].includes(path)
    ) {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'weekly';
    }
    // Secondary pages - medium priority
    else if (['/team', '/donors'].includes(path)) {
      customConfig.priority = 0.7;
      customConfig.changefreq = 'monthly';
    }
    // Policy pages - lower priority
    else if (['/privacy', '/terms'].includes(path)) {
      customConfig.priority = 0.5;
      customConfig.changefreq = 'yearly';
    }

    return customConfig;
  },
};
