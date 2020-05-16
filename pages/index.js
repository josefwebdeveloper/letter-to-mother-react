import Head from 'next/head';

import Layout from '../components/Layout';
import Message from '../components/message';
import React from 'react';
import Form from '../components/form';

const Home = (props) => {
    return (
        <Layout>
            <div id='header' className='full-rotate '>
                <h1>This website will self destruct
                    <span>
                        {/*<Timer ref={childRef} startCounter={startCounter.timer}/>*/}
                    </span></h1>

                <Message article={props.article}/>
                <div id='header' className='full-rotate'>

                    <Form />

                </div>

            </div>
            <style jsx>{`
h1 {
  font-family: Patrick Hand SC, sans-serif;
  font-weight: 400;
}
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
            <style jsx global>{`
          body {
    background-color: #d2bf9e;
    font-family: Architects Daughter, cursive;
}
.full-rotate {
  margin: auto;
  width: 80vw;
  max-width: 40em;
  transform: rotate(-3deg);
}
.note{
    background-color: #e6ddd0;
    padding: 1em;
    margin-bottom: 1rem;
}


.btn {
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    transition: all 235ms ease 0s;
    box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, .2);
    transition: all 235ms ease-in-out 0s;
    align-self: center;
    background: 0 0;
    border: 2px solid #41403e;
    color: #41403e;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    outline: 0;
    padding: .75rem;
}
.btn:hover {
    transform: translate3d(0,2px,0);
    box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
}
.btn:active {
    border-color: rgba(0,0,0,.2);
    transition: none;
}

        `}
            </style>
        </Layout>
    );
};
Home.getInitialProps = async () => {
    const res = await fetch('https://letter-to-mother.herokuapp.com/article/random');
    const data = await res.json();
    // console.log(data.data.article[0].article, 'article');
    return {
        article: data.data.article[0].article
    };
};
export default Home;
