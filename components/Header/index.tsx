import type { FC } from "react";
import Head from "next/head";
interface IProps {
  title: string
}
export const Header:FC<IProps> = function({title}){
    return (
    <Head>
        <title>Link Kısaltıcı | draxya.</title>
        <meta name="description" content="Tek tıkla istediğin linki kısalt!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="title" content="Link Kısaltıcı"/>
        <meta name="description" content="Tek tıkla istediğin linki kısalt!"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://url.draxya.com"/>
        <meta property="og:title" content="Link Kısaltıcı"/>
        <meta property="og:description" content="Tek tıkla istediğin linki kısalt!"/>
        <meta property="og:image" content="https://url.draxya.com/screenshot.png"/>
        <meta property="theme-color" content="#A68BFB"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        

      </Head>
    );
};