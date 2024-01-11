import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skils";
import {About} from "./layout/sections/about/About";
import {Projects} from "./components/projects/Projects";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;