import React from "react";
import { Helmet } from "react-helmet";
import DefaultPhoto from "../assets/images/Inan Celis with Laptop.png";

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
      <meta property="og:url" content="https://inancelis.com/" />
      <meta
        property="og:image"
        content={`https://inancelis.com${DefaultPhoto}`}
      />
    </Helmet>
  </div>
);

export default MetaSetup;
