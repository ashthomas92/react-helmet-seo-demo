import React from 'react';
import { Helmet } from "react-helmet";

export default class Header extends React.Component {
  render(){
    return (
      <div className="Wrapper">
        <Helmet>
          <title>Home</title>
          <meta name="description" content="React Helmet SEO Demo Home page" />
          <meta name="keywords" cpntent="react,helmet,seo" />
        </Helmet>
        <p>This is the home page content for the React Helmet SEO Demo App.</p>
      </div>
    );
  }
}
