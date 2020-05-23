import React, {useEffect, useState} from 'react';


const Form = (props) => {
    const [inputs, setInputs] = useState({
        article: 'Дорогая Наташа,'
    });
    const [submitted, setSubmitted] = useState(false);
    const {article} = inputs;


    useEffect(() => {
    }, []);

    const speech = () => {

    };

    function handleChange(e) {

        const {name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (article && article !== 'Dear WebSite,') {

            // console.log({article:article,type:'crazy'});
            // dispatch(formActions.postArticle({article: article, type: 'crazy'}));
            // props.handleTimer();
            // console.log(e.target);
            postArticle({article: article}).then(r => console.log(r));
            setInputs({article: 'Dear WebSite,'});

        }
    }

    const postArticle = async (article) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(article)
        };
        fetch('https://letter-to-mother.herokuapp.com/article/create', requestOptions)
            .then(response => response.json())
            .then(r => r);
    };

    return (
        <div id='form'>
            {/*<h1>Form</h1>*/}
            <form id='article-text' name="form" onSubmit={handleSubmit}>
                <div className="form-group  border-1 child-borders note ">
                        <textarea className='note form-textarea main-text' id='article-text' name="article" value={article}
                                  onChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary main-text">
                        Отправить
                    </button>
                </div>
            </form>
            <style jsx>{`
#form{
margin: 10px;
}
.form-textarea{
width: 100%;
height: 150px;
}

 `}
            </style>
        </div>

    );
};

export default Form;
