import React from "react";
import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from "next/document";
import {ServerStyleSheets} from '@mui/styles';




export default class MyDocument extends Document{
  

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const sheets = new ServerStyleSheets(),
        originalRenderPage = ctx.renderPage;
        ctx.renderPage = () => originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props}/>)
        })

       const initialProps = Document.getInitialProps(ctx);

       return {
        ...initialProps,
        styles: [
          ...React.Children.toArray((await initialProps).styles),
          sheets.getStyleElement(),
        ],
       }
  }

  render(): JSX.Element {
      return <Html>
        <Head>
        
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
  }
}