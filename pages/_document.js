import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { AmpScripts, AmpScriptsManager, headerBoilerplate } from 'react-amphtml/setup';
import * as Amp from 'react-amphtml';

export default class MyDocument extends Document {
  static getInitialProps({ req, renderPage }) {
    const ampScripts = new AmpScripts();
    const sheet = new ServerStyleSheet();

    const page = renderPage((
      App => props => (
        sheet.collectStyles((
          <AmpScriptsManager ampScripts={ampScripts}>
            <App {...props} />
          </AmpScriptsManager>
        ))
      )
    ));

    const ampScriptTags = ampScripts.getScriptElements();

    // AMP only allows for 1 style tag, so we need to compbine all the style
    // tags generated by styled-components
    /* eslint-disable react/no-danger */
    const ampStyleTag = (
      <style
        amp-custom=""
        dangerouslySetInnerHTML={{
          __html: sheet.getStyleElement().reduce(
            (
              css,
              {
                props: {
                  dangerouslySetInnerHTML: {
                    __html = '',
                  } = {},
                } = {},
              } = {},
            ) => (
                `${css}${__html}`
              ),
            '',
          ),
        }}
      />
    );
    /* eslint-enable */

    // Get the dynamic `<title />` from the head generated by next.js
    const title = (
      page.head.filter(({ type }) => type === 'title').slice(0, 1) ||
      <title>ampreact</title>
    );

    return {
      ...page,
      title,
      url: req.url,
      ampScriptTags,
      ampStyleTag,
    };
  }

  render() {
    const {
      title,
      url,
      ampScriptTags,
      ampStyleTag,
      html,
    } = this.props;

    /* eslint-disable react/no-danger */
    return (
      <Amp.Html specName="html ⚡ for top-level html" lang="en">
        <Head>
          {title}
          {headerBoilerplate(url)}
          {ampScriptTags}
          {ampStyleTag}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Amp.Html>
    );
    /* eslint-enable */
  }
}
