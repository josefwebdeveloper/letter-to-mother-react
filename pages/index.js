import Head from 'next/head';

import Layout from '../components/Layout';
import Message from '../components/message';
import React, {useEffect, useRef, useState} from 'react';
import Form from '../components/form';
import Timer from '../components/timer';
import img from '../components/data';
import * as Swiper from '../public/js/swiper';
import Footer from '../components/footer';
import ReactPlayer from 'react-player';

const Home = (props) => {
    let imgUrlDb = img;


    const [article, setArticle] = useState(props.article);
    const [imgUrlData, setImgUrl] = useState(imgUrlDb);
    const [timer, setTimer] = useState(props.timer);
    // const ms = moment(now,).diff(moment(startTime,));
    const childRef = useRef();
    useEffect(() => {

        const swiper = new Swiper('.swiper-container', {
            effect: 'cube',
            grabCursor: true,
            loop: true,
            speed: 1500,
            autoplay: {
                delay: 5000,
            },
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }, []);
    const nextArticle = async () => {
        const res = await fetch('https://letter-to-mother.herokuapp.com/article/random');
        const data = await res.json();
        setArticle(data.data.article[0]);
    };
    return (
        <Layout>
            <div className="main-carousel full-rotate ">
                <h2 className='main-text  main-text-private'>Пишите...помните...
                   </h2>
                <h3 className={`main-text main-text-private`}>
                    <Timer startCounter={timer}/>
                </h3>
                <div className={`main-text main-text-private-second`}>
                    <span>прошло с последнего письма</span>
                </div>


                <div className="swiper-container">
                    <div className="swiper-wrapper">{
                        imgUrlData.map((data) => (
                            <div key={data.id} className="swiper-slide"
                                 style={{backgroundImage: `url(${data.imageUrl})`}}></div>
                        ))}
                    </div>
                    {/*<div className="swiper-pagination"></div>*/}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
            <div id='header' className='full-rotate '>

                <Message article={article} handleNext={nextArticle}/>
            </div>
            <div id='header' className='full-rotate '>
                <Form/>
            </div>
            <div id='header' className='full-rotate  '>
                <ReactPlayer  width="100%"
                    url="https://www.youtube.com/watch?v=Q0JlDZoNezw&t=991s"
                />
                <Footer/>
            </div>

            <style jsx>{`

h1 {
  font-family: Patrick Hand SC, sans-serif;
  font-weight: 400;
}
.swiper-container-cube{
overflow: hidden;
}

.main-text-private{
margin: 15px;
}
.special ReactPlayer{
width: 100% !important;
}
.main-text-private-second{
margin: 0 15px;
}
 .swiper-container {
      margin: 20px 0;
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      // background-color: #fff;
      width: 300px;
      height: 300px;
      background-position: center center;
      background-repeat: no-repeat;
       background-size: contain;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
       
      `}</style>
            <style jsx global>{`
          body {
    background-color: #d2bf9e;
    font-family: Architects Daughter, cursive;
     position: relative;
      height: 100%;
}
 .container-main {
          min-height: 100vh;
          width: 100vw;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
.border-main{
border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
}
.main-text{
font-family: 'Balsamiq Sans', cursive;
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

.active{
display: flex;
align-items: center;
height: 250px;
}
.responsive {
  max-width: 100%;
  height: auto;
}


.btn {
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    //transition: all 235ms ease 0s;
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
.border, .border-1, .child-borders > :nth-child(6n+1) {
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
}

.border, .border-1, .child-borders > :nth-child(6n+1) {
  border-bottom-left-radius: 15px 255px;
}

.border {
  border: 2px solid #41403e;
}
.main-text-footer{
font-size: 13px;
}
.center{
margin: 0 auto;
text-align: center;
}

        `}
            </style>
        </Layout>
    );
};
Home.getInitialProps = async () => {
    const [article, timer] = await Promise.all([
        fetch('https://letter-to-mother.herokuapp.com/article/random').then(r => r.json()),
        fetch('https://letter-to-mother.herokuapp.com/timer').then(r => r.json())
    ]);
    console.log(article);
    console.log(timer.data.timer[0].startTime, 'dataTimer');


    return {article: article.data.article[0], timer: timer.data.timer[0].startTime};

};
export default Home;
