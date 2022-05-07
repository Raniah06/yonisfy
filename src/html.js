import React from "react";
import PropTypes from "prop-types";
import config from "config";
import { scrollbar } from "./styles";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {config.metadata.ogImage ? (
            <meta property="og:image" content={config.metadata.ogImage} />
          ) : null}
          <meta property="twitter:card" content="summary_large_image" />
          {config.metadata.ogImage ? (
            <meta property="twitter:image" content={config.metadata.ogImage} />
          ) : null}
          {config.metadata.favicon ? (
            <link
              rel="shortcut icon"
              type="image/svg"
              href={config.metadata.favicon}
            />
          ) : null}
          <noscript key="noscript"></noscript>
          <script async src="https://cdn.splitbee.io/sb.js"></script>

          {this.props.headComponents}
        </head>
        <body css={scrollbar} {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          {/* <script
            data-ad-client="ca-pub-7184953078273171"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
