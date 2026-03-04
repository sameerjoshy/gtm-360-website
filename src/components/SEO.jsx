import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, canonical, type = 'website', children }) => {
    const siteName = 'GTM-360';
    const defaultTitle = `${siteName} | Your Revenue Partner at the Growth Plateau`;
    const defaultDescription = 'Most B2B teams hit a wall around $10M. Pipeline looks fine. The team is working hard. But the numbers aren\'t moving. We help you find what\'s actually in the way — and fix it.';
    const defaultOgImage = 'https://gtm-360.com/og-image.png';
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://gtm-360.com';
    const pageTitle = title || defaultTitle;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link rel="canonical" href={canonical || currentUrl} />
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonical || currentUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={defaultOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical || currentUrl} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={defaultOgImage} />

            {children}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node
};

export default SEO;
