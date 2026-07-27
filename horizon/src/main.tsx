import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


async function bootstrap() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    await worker.start();
  }
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>,
   <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
  />
  </Provider>
)
}

bootstrap()