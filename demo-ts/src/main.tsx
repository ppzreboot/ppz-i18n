import React from 'react'
import ReactDOM from 'react-dom/client'
import { setDefaultLang } from 'ppz-i18n'

import { Basic } from './usage/basic'
import { Setter } from './usage/setter'
import { Format } from './usage/format'

setDefaultLang('cn')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Basic />
    <Setter />
    <Format />
  </React.StrictMode>,
)

new EventSource('/esbuild').addEventListener('change', () => location.reload())
