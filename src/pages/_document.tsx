import React from "react";
import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from "next/document";
import {ServerStyleSheets} from '@mui/material/styles';



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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
  }
}