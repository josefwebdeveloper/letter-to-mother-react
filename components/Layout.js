import Head from 'next/head';
const Layout = (props) => (
  <div>
    <Head>
      <title>To Mother</title>
        <meta
            name="description"
            content="letter to mother"
        />
      {/*<link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>*/}
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap" rel="stylesheet"/>

    </Head>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;