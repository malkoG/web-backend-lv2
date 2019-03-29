import * as React from 'react'

import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div id="content">
                    <div>
                        <Section id='section' />
                    </div>
                </div>
                <Footer />
            </div>
        );        
    }
}

export default App;
