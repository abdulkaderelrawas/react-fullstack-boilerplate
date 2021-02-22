import React from 'react';
import { Helmet } from 'react-helmet';

const MetaHelmet = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

MetaHelmet.defaultProps = {
  title: 'Welcome',
  description: '',
  keywords: '',
};

export default MetaHelmet;
