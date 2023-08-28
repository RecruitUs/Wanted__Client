import './styles/index.css'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './redux/store'


import Router from './Router.tsx'


const el = document.getElementById('root') as HTMLElement
const root = createRoot(el)

root.render(
  <Provider store={store}>
    <Router />
  </Provider>
)


