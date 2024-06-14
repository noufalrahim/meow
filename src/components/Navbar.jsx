import React from 'react';
import Select from './Select';
import { navbar, navbarTitle } from '../styles';

export default function Navbar(
    {
        chosenLanguage,
        setChosenLanguage
    }
) {
    return (
        <nav style={navbar}>
            <h1 style={navbarTitle}>Meow Facts</h1>
            <Select
                chosenLanguage={chosenLanguage}
                setChosenLanguage={(language) => setChosenLanguage(language)}
            />
        </nav>
    )
}