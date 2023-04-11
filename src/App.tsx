import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import FormBuild from './pages/FormBuild'
import MainLayout from './layouts/MainLayout/MainLayout';
import GlobalProvider from './context/GlobalContext';

function App() {

  return (
    // ADD REACT ROUTER HERE
    <>
      <GlobalProvider>
        <MainLayout>
          <FormBuild />
        </MainLayout>
      </GlobalProvider>
    </>
  )
}

export default App
