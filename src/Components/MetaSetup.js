import React from "react";
import { Helmet } from "react-helmet";

const MetaSetup = () => (
  <div>
    <Helmet>
      <title>Inan Celis</title>
      <meta
        name="description"
        content="Full-stack web developer specializing in React, Vue, Laravel, and WordPress. Building scalable web applications with modern technologies and user-centered design."
      />
      <meta
        name="keywords"
        content="Inan, Inan Celis, inan portfolio, inan celis"
      />
      <meta property="og:title" content="" />
      <meta
        property="og:description"
        content="Description of your site for SEO purposes"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.inancelis.com/" />
      <meta
        property="og:image"
        content="https://www.inancelis.com/static/media/meee.4c7463169d8947aeed63.png"
      />
    </Helmet>
  </div>
);

export default MetaSetup;
