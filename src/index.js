import React from 'react';
import { createRoot } from 'react-dom/client';
import RunApp from './components/RunApp';

// import style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<RunApp/>);