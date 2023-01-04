import './App.css';
import Banner from './Components/Banner';
import Layout from './Layout';
import HightLight from './Sections/Highlight';



function App() {
  return (
    <div className="App">
      <Layout>
        <Banner />
        <HightLight />
      </Layout>
    </div>
  );
}

export default App;
