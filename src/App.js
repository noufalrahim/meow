
import './App.css';
import React, { useState } from 'react';
import { PacmanLoader } from 'react-spinners';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {

  const [meowFacts, setMeowFacts] = useState([]);
  const [numberOfFacts, setNumberOfFacts] = useState(1);
  const [chosenLanguage, setChosenLanguage] = useState('eng');
  const [loading, setLoading] = useState(false);

  const languages = [
    {
      language: 'English',
      code: 'eng'
    },
    {
      language: 'Czech',
      code: 'cze'
    },
    {
      language: 'German',
      code: 'ger'
    },
    {
      language: 'Bengali',
      code: 'ben'
    },
    {
      language: 'Spanish',
      code: 'esp'
    },
    {
      language: 'Russian',
      code: 'rus'
    },
    {
      language: 'Portuguese',
      code: 'por'
    },
    {
      language: 'Filipino',
      code: 'fil'
    },
    {
      language: 'Ukrainian',
      code: 'ukr'
    },
    {
      language: 'Urdu',
      code: 'urd'
    },
    {
      language: 'Italian',
      code: 'ita'
    },
    {
      language: 'Chinese',
      code: 'zho'
    },
    {
      language: 'Korean',
      code: 'kor'
    }
  ]

  const generateFact = async () => {
    setLoading(true);
    const response = await fetch('https://meowfacts.herokuapp.com/');
    const data = await response.json();
    setLoading(false);
    setMeowFacts(data.data);
  }

  React.useEffect(() => {
    generateFact();
  }, []);

  const handleMeow = async () => {
    console.log(numberOfFacts);
    console.log(chosenLanguage);
    setLoading(true);
    const response = await fetch(`https://meowfacts.herokuapp.com/?lang=${chosenLanguage}&count=${numberOfFacts}`);
    const data = await response.json();
    setLoading(false);
    setMeowFacts(data.data);
  };


  return (
    <div>
      <div style={{
        position: 'fixed',
        top: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d47e0f',
        color: 'white',
      }}>
        <h1 style={{ paddingLeft: '20px' }}>Meow Facts</h1>
        <select
          style={{
            ...styles.select,
            ...(false ? styles.selectFocus : null),
          }}
          value={chosenLanguage}
          onChange={(event) => {
            setChosenLanguage(event.target.value);
          }}
        >
          {
            languages.map((language, index) => {
              return (
                <option key={index} value={language.code}>{language.language}</option>
              )
            })
          }
        </select>
      </div>
      <div style={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A202C',
        minHeight: '100vh',
      }}>
        {
          !loading && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'lightgray',
              padding: '20px',
              borderRadius: '100%',
              margin: '20px',
              marginTop: '100px'
            }}>
              <img src='cat.png' alt='cat' style={{
                width: '100px',
                height: '100px',
                margin: '20px'
              }} />
            </div>
          )
        }

        {
          loading ? <PacmanLoader
            color={'#d47e0f'}
            loading={loading}
            cssOverride={override}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> : (
            meowFacts.map((fact, index) => {
              return (
                <div key={index} style={{
                  backgroundColor: 'lightgray',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderRadius: '10px',
                  margin: '20px'
                }}>
                  <p>{fact}</p>
                </div>
              )
            })
          )
        }
        <div style={{
          position: 'fixed',
          bottom: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}>
          <input type='number' style={{
            backgroundColor: '#d47e0f',
            padding: '20px',
            width: '25px',
            borderRadius: '100%',
            marginRight: '20px',
            color: 'white',
            fontSize: '20px',
            outline: 'none',
            border: 'none',
            textAlign: 'center',
          }}
            value={numberOfFacts}
            onChange={(event) => {
              setNumberOfFacts(event.target.value);
            }}
          />
          <button onClick={() => {
            handleMeow();
          }
          } style={{
            backgroundColor: '#d47e0f',
            borderRadius: '10px',
            margin: '20px',
            paddingRight: '40px',
            paddingLeft: '40px',
          }}>
            <p style={{
              color: 'white',
              fontSize: '20px'
            }}>Meow..!</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  select: {
    appearance: 'none',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px 15px',
    fontSize: '16px',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '200px',
    marginRight: '20px',
  },
};