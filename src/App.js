import './App.css';
import Banner from './Components/Banner';
import Layout from './Layout';
import AllCharactersList from './Sections/AllCharactersList';
import HightLight from './Sections/Highlight';



function App() {
  return (
    <div className="App">
      <Layout>
        <Banner />
        <HightLight />
        <AllCharactersList />
      </Layout>
    </div>
  );
}

export default App;
