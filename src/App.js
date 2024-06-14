
import './App.css';
import React, { useState } from 'react';
import Image from './components/Image';
import Loader from './components/Loader';
import ContentBox from './components/ContentBox';
import Navbar from './components/Navbar';
import { content } from './styles';
import { BASEURL } from './constant';
import Footer from './components/Footer';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {

  const [meowFacts, setMeowFacts] = useState([]);
  const [numberOfFacts, setNumberOfFacts] = useState(1);
  const [loading, setLoading] = useState(false);
  const [chosenLanguage, setChosenLanguage] = useState('eng');


  const generateFact = async () => {
    console.log(BASEURL);
    try {
      setLoading(true);
      const response = await fetch(`${BASEURL}?lang=${chosenLanguage}&count=${numberOfFacts}`);
      const data = await response.json();
      setLoading(false);
      setMeowFacts(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASEURL}?lang=${chosenLanguage}&count=${numberOfFacts}`);
      const data = await response.json();
      setLoading(false);
      setMeowFacts(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Navbar
        chosenLanguage={chosenLanguage}
        setChosenLanguage={(language) => setChosenLanguage(language)}
      />
      <div style={content}>
        {!loading && <Image />}
        {loading ? <Loader loading={loading} override={override} /> :
          (
            meowFacts.map((fact, index) => {
              return (
                <ContentBox
                  key={index}
                  fact={fact}
                />
              )
            })
          )
        }
        <Footer
          numberOfFacts={numberOfFacts}
          setNumberOfFacts={(number) => setNumberOfFacts(number)}
          generateFact={generateFact}
        />
      </div>
    </div>
  );
}

export default App;
