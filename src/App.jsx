import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
// import Newsitem from './Components/NewsItem';

class App extends Component {
    pageSize = 15;
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" key="general" element={<News pageSize={this.pageSize} country="in" category="general" />} />
                        <Route exact path="/business" key="business" element={<News pageSize={this.pageSize} country="in" category="business" />} />
                        <Route exact path="/entertainment" key="entertainment" element={<News pageSize={this.pageSize} country="in" category="entertainment" />} />
                        <Route exact path="/health" key="health" element={<News pageSize={this.pageSize} country="in" category="health" />} />
                        <Route exact path="/science" key="science" element={<News pageSize={this.pageSize} country="in" category="science" />} />
                        <Route exact path="/sports" key="sports" element={<News pageSize={this.pageSize} country="in" category="sports" />} />
                        <Route exact path="/technology" key="technology" element={<News pageSize={this.pageSize} country="in" category="technology" />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;