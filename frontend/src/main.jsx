import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import './Sidebar.css'
import './RegisterCourse.css'
import './Dashboard.css'
import './CourseTable.css'
import './Auth.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
