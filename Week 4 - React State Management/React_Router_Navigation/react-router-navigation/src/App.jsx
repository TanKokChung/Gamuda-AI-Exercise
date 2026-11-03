import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy } from 'react';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import EntryDenied from "./components/EntryDenied";
import Dashboard from "./pages/Dashboard";
import Overview from "./components/Overview";
import Settings from "./components/Settings";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
// import About from './pages/About';
// import Contact from './pages/Contact';

//This is the lazy loading of the componenets and pages
// const Navigation = lazy(() => import('./components/Navigation'))
// const Home = lazy(() => import('./pages/Home'))
// const About = lazy(() => import('./pages/About'))
// const Contact = lazy(() => import('./pages/Contact'))
// const UserProfile = lazy(() => import('./pages/UserProfile'))
// const Search = lazy(() => import('./pages/Search'))
// const Dashboard = lazy(() => import('./pages/Dashboard'))

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/user-profile/:id" element={<UserProfile />} />
//           <Route path="/Search" element={<Search />} />
//           <Route path="/Dashboard" element={<Dashboard />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

function App() {
  const isAuthenticated = true; //Change to true to allow access

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EntryDenied" element={<EntryDenied />} />
          <Route path="/Dashboard/*" element={<Dashboard />}>
            <Route path="Overview" element={<Overview />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
          <Route
            path="/Admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
