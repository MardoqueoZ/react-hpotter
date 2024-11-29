import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PersonContextProvider} from './context/PersonContext.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from "./utils/i18n.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <PersonContextProvider>
        <App />
      </PersonContextProvider>
    </I18nextProvider>
  </StrictMode>,
)
