import React from 'react'; // importing from node_modules
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // import entire contents of a file
import Home from './pages/Home'; // importing from a local file
import Navigation from './components/Navigation';
import { Container } from 'reactstrap';

/*
  Preparing the React Tree into your HTML document
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navigation />
    <Container className="mt-3">
      <Home />
    </Container>
  </div>
);
