import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  /*const whoLovesMost = () => {
    let names = ["haroun","siwar"]
    const chosen = Math.floor(Math.random()*2)
    return `${names[chosen]} loves ${names[names.length-chosen-1]} more`
  }*/
  return (  
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
