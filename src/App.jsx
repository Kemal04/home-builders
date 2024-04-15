import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, ScrollToTop } from './components';
import { Home } from './pages';
import './App.css'

const App = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Home />} /> 
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};

export default App