import Head from 'next/head';

import "../styles/global.css";

function layout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>My Page Title</title>
      </Head>
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default layout;
