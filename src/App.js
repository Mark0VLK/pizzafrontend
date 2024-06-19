import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CategoryNavBar from "./components/category/CategoryNavBar";
import CategoryList from "./components/category/CategoryList";
import AddCategory from "./components/category/AddCategory";
import EditCategory from "./components/category/EditCategory";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            <Router>
                <div className="d-flex flex-column min-vh-100">
                    <CategoryNavBar/>
                    <div className="container flex-grow-1">
                        <Routes>
                            <Route exact path="/" element={<CategoryList/>}> </Route>
                            <Route exact path="/add-category" element={<AddCategory/>}> </Route>
                            <Route exact path="/edit-category/:id" element={<EditCategory/>}> </Route>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App;
