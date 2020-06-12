import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [text, setText] =  useState("");
    const [wordList, setWordList] = useState(['first', 'second', 'third']);

    function handleChange({target: {value}}) {
        setText(value);
    }

    useEffect(() => {
        fetch("http://localhost:8000/api/get_continue_by_input", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: {
                "text": text
            }
        }).then(response => {
            return response.json();
        }).then(data => setWordList(data))
    });

    function clearText() {
        setText("");
        setWordList([]);
    }

    function selectWord(value) {
        setText(text + value);
    }

    return (
        <div className="App">
            <header className="App-header">
                Курсовой проект "Языковые модели"
            </header>
            <div className="App-body">
                <input className="Input" value={text} type="text" onChange={handleChange}/>
            <button className="Button" onClick={clearText}>Очистить</button>
                <ul className="List">
                {
                    wordList.map(item => {
                        return(<li key={item} onClick={() => selectWord(item)}>
                            <span>{text}</span>
                            <span className="boldText">{item}</span>
                        </li>)
                    })
                }
                </ul>
            </div>
        </div>
);
}

export default App;
