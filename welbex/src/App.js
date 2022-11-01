import './App.css';
import {Footer} from "./components/footer/Footer";
import {Header} from "./components/header/Header";
import {Info} from "./components/sections/info/Info";
import {Intro} from "./components/sections/intro/Intro";
import {About} from "./components/sections/about/About";
import {Problem} from "./components/sections/problem/Problem";
import {Audit} from "./components/sections/audit/Audit";
import {Calculation} from "./components/sections/calculation/Calculation";
import {Services} from "./components/sections/services/Services";
import {Widgets} from "./components/sections/widgets/Widgets";
import {Individual} from "./components/sections/individual/Individual";
import {Integration} from "./components/sections/integration/Integration";
import {Clients} from "./components/sections/clients/Clients";
import {Free} from "./components/sections/free/Free";
import {Case} from "./components/sections/case/Case";
import {Gratitude} from "./components/sections/gratitude/Gratitude";
import {FAQ} from "./components/sections/faq/FAQ";
import {Access} from "./components/sections/access/Access";

function App() {
    return (
        <div className="App">
            <Header/>
            <Info/>
            <Intro/>
            <About/>
            <Problem/>
            <Audit/>
            <Calculation/>
            <Services/>
            <Widgets/>
            <Individual/>
            <Integration/>
            <Clients/>
            <Free/>
            <Case/>
            <Gratitude/>
            <FAQ/>
            <Access/>
            <Footer/>
        </div>
    );
}

export default App;
