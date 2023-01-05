import './App.css';
import Banner from './Components/Banner';
import Layout from './Layout';
import AllCharactersList from './Sections/AllCharactersList';
import CardsFanMarvel from './Sections/CardsFanMarvel';
import Footer from './Sections/Footer';
import HightLight from './Sections/Highlight';

function App() {
  return (
    <div className="App">
      <Layout>
        <Banner />
        <HightLight />
        <AllCharactersList />
        <CardsFanMarvel />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
