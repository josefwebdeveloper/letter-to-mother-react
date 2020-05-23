import Head from 'next/head';

import Layout from '../components/Layout';
import Message from '../components/message';
import React, {useEffect, useRef, useState} from 'react';
import Form from '../components/form';
import Timer from '../components/timer';
import img from '../components/data';
import * as Swiper from '../public/js/swiper';
// <script>
//     var swiper = new Swiper('.swiper-container', {
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//     shadow: true,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
// },
//     pagination: {
//     el: '.swiper-pagination',
// },
// });
// </script>

const Home = (props) => {
    let imgUrlDb = img;


    const [article, setArticle] = useState(props.article);
    const [imgUrlData, setImgUrl] = useState(imgUrlDb);
    const [timer, setTimer] = useState(props.timer);
    // const ms = moment(now,).diff(moment(startTime,));
    const childRef = useRef();
    useEffect(() => {
        // dispatch(articleActions.random());
        // voicesDropdown = document.querySelector('[name="voice"]');
        // setArticle(props.article);
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
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }, []);
    const nextArticle = async () => {
        const res = await fetch('https://letter-to-mother.herokuapp.com/article/random');
        const data = await res.json();
        setArticle(data.data.article[0].article);
    };
    return (
        <Layout>
            {/*<div style={{backgroundImage:`url('/images/3.jpeg')`,width:100,height:100}}></div>*/}
            <div className="main-carousel">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"
                             style={{backgroundImage: `url('/images/3.jpeg')`}}></div>
                        <div className="swiper-slide"
                             style={{backgroundImage: `url('/images/1.jpeg')`}}></div>
                        <div className="swiper-slide"
                             style={{backgroundImage: `url('/images/2.jpeg')`}}></div>
                        <div className="swiper-slide"
                             style={{backgroundImage: `url('/images/4.jpeg')`}}></div>
                        <div className="swiper-slide"
                             style={{backgroundImage: `url('/images/5.jpeg')`}}></div>
                        <div className="swiper-slide"
                             style={{backgroundImage: `url('/images/6.jpeg')`}}></div>
                        {/*<div className="swiper-slide"*/}
                        {/*     style="backgroundImage:url(https://swiperjs.com/demos/images/nature-3.jpg)"></div>*/}
                        {/*<div className="swiper-slide"*/}
                        {/*     style="backgroundImage:url(https://swiperjs.com/demos/images/nature-4.jpg)"></div>*/}
                        {/*<div className="swiper-slide"*/}
                        {/*     style="background-image:url(https://swiperjs.com/demos/images/nature-5.jpg)"></div>*/}
                        {/*<div className="swiper-slide"*/}
                        {/*     style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></div>*/}
                        {/*<div className="swiper-slide"*/}
                        {/*     style="background-image:url(https://swiperjs.com/demos/images/nature-3.jpg)"></div>*/}
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
            {/*<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>*/}

            {/*<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"*/}
            {/*        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"*/}
            {/*        crossOrigin="anonymous"></script>*/}
            {/*<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"*/}
            {/*        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"*/}
            {/*        crossOrigin="anonymous"></script>*/}
            {/*<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"*/}
            {/*        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"*/}
            {/*        crossOrigin="anonymous"></script>*/}
            {/*<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">*/}
            {/*    <div className="carousel-inner container-carusel">{*/}
            {/*        imgUrlData.map((data) => (*/}
            {/*                 <div key={data.id} className={` carousel-item ${data.active}`}>*/}
            {/*                    <img  src={data.imageUrl} className=" responsive d-block w-100" alt={data.imageUrl}/>*/}
            {/*                </div>*/}

            {/*        ))*/}
            {/*    }*/}
            {/*<div className="carousel-item active">*/}
            {/*    <img src="/images/1.jpeg" className="d-block w-100" alt="..."/>*/}
            {/*</div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img src="/images/2.jpeg" className="d-block w-100" alt="..."/>*/}
            {/*</div>*/}
            {/*<div className="carousel-item">*/}
            {/*    <img src="/images/3.jpeg" className="d-block w-100" alt="..."/>*/}
            {/*</div>*/}
            {/*    </div>*/}
            {/*    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">*/}
            {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
            {/*        <span className="sr-only">Previous</span>*/}
            {/*    </a>*/}
            {/*    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">*/}
            {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
            {/*        <span className="sr-only">Next</span>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<button type="button" className="btn btn-light">Primary</button>*/}
            <div id='header' className='full-rotate '>
                <h1>Time from last Letter
                    <span>
                        <Timer startCounter={timer}/>
                    </span></h1>

                <Message article={article} handleNext={nextArticle}/>
                <div id='header' className='full-rotate'>

                    <Form/>

                </div>

            </div>
            <style jsx>{`

h1 {
  font-family: Patrick Hand SC, sans-serif;
  font-weight: 400;
}
//.main-carousel{
//margin: 0 auto;
//width: 300px;
//height: 300px;
//}
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
        //.container {
        //  min-height: 100vh;
        //  padding: 0 0.5rem;
        //  display: flex;
        //  flex-direction: column;
        //  justify-content: center;
        //  align-items: center;
        //}
      `}</style>
            <style jsx global>{`
          body {
    background-color: #d2bf9e;
    font-family: Architects Daughter, cursive;
     position: relative;
      height: 100%;
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
.container-carusel{
height: 250px;
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


    return {article: article.data.article[0].article, timer: timer.data.timer[0].startTime};

};
export default Home;
