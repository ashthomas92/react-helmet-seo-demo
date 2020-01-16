import React from 'react';
import { Helmet } from "react-helmet";

export default class Header extends React.Component {
  render(){
    return (
      <div className="Wrapper">
        <Helmet>
          <title>About</title>
          <meta name="description" content="About the React Helmet SEO Demo" />
          <meta name="keywords" cpntent="react,helmet,seo,about,information" />
        </Helmet>
        <p>This page tells us all about the React Helmet SEO Demo App.</p>
      </div>
    );
  }
}
