import React, {useEffect, useState} from 'react';
import Home from '../pages';
// import {useDispatch, useSelector} from 'react-redux';
// import {articleActions} from '../../store/_actions/article.actions';
// import {voiceAction} from '../../store/_actions/voice.action';
// import {VoiceEnum} from './voice'
// import {timerService} from '../../_services/timer.service';

const Message = (props) => {
    // console.log(props);
    // const msg = new SpeechSynthesisUtterance();
    // const voices = speechSynthesis.getVoices();
    const [show, setShow] = useState(false);
    const [article, setArticle] = useState('');

    let showSound = false;
    // const randomArticleVoice = useSelector(state => state.article);
    // const dispatch = useDispatch();
    // let voicesDropdown;

    useEffect(() => {
        // dispatch(articleActions.random());
        // voicesDropdown = document.querySelector('[name="voice"]');
        setArticle(props.article);

    }, []);
    const nextHandle = (e) => {
        console.log(e);
        nextArticle().then(r => setArticle(r.article));

    };
    const nextArticle = async () => {
        const res = await fetch('https://letter-to-mother.herokuapp.com/article/random');
        const data = await res.json();
        return {
            article: data.data.article[0].article
        };
    };

    const soundHandle = () => {
        showSound = !showSound;

    };


    // function toggle(startOver = true) {
    //     speechSynthesis.cancel();
    //     if (startOver) {
    //         console.log(msg);
    //
    //         speechSynthesis.speak(msg);
    //     }
    // }

    // function setOption() {
    //     console.log(this.name, this.value);
    //     msg[this.name] = this.value;
    // }

    return (
        <div id='message' className=' '>

            {/*<div>*/}
            {/*    <button className="btn btn-primary" onClick={() => {*/}
            {/*        setShow(!show);*/}
            {/*    }}>*/}
            {/*        Voice*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div className={show ? 'show' : 'none'}>*/}
            {/*    <button className="btn btn-primary" onClick={() => nextHandle(VoiceEnum.eng)}>*/}
            {/*        English*/}
            {/*    </button>*/}

            {/*    <button className="btn btn-primary" onClick={() => nextHandle(VoiceEnum.he)}>*/}
            {/*        Hebrew*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="border border-1 child-borders note  ">
                <div id='tttt' className="">
                    <div id='tsx' className='note'>
                        {/*{randomArticleVoice.randomArticle.article}*/}
                        {article}
                    </div>
                    {/*}*/}
                </div>

            </div>
            <button className="btn btn-primary" onClick={nextHandle}>
                ⟹
            </button>
            <style jsx>{`
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
             
              `}
            </style>
        </div>

    );
};
Message.getInitialProps = async () => {

};
export default Message;
