import React, {useEffect, useState} from 'react';
import moment from 'moment';


const Message = (props) => {
    console.log(props);
    const [show, setShow] = useState(false);
    const [article, setArticle] = useState(props.article);

    let showSound = false;


    useEffect(() => {
        setArticle(props.article);

    }, [props.article]);
    const nextHandle = (e) => {
        console.log(article._id);
        props.handleNext(article._id);

    };

    const handleOldData = (data) => {
        return (data === '23-05-2020') ? '11-05-2020' : data;
    };

    return (
        <div id='message' className=' '>

            <div className="border border-1 child-borders note  ">
                <div id='tttt' className="">
                    <div id='tsx' className='note main-text'>
                        <div>{article && handleOldData(moment(article.createdDate).format('DD-MM-YYYY'))}</div>
                        {article && article.article}
                    </div>
                </div>

            </div>
            <button className="btn btn-primary" onClick={nextHandle}>
                <span className='main-text'>Следующее</span>
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

export default Message;
