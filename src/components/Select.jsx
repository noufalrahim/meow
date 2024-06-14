import React from 'react';
import { select } from '../styles';
import { LANGUAGES } from '../constant';

export default function Select({
    chosenLanguage,
    setChosenLanguage
}) {
    
    return (
        <select
            style={select}
            value={chosenLanguage}
            onChange={(event) => {
                setChosenLanguage(event.target.value);
            }}
        >
            {
                LANGUAGES.map((language, index) => {
                    return (
                        <option key={index} value={language.code}>{language.language}</option>
                    )
                })
            }
        </select>
    )
}
