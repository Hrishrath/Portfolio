import './App.css';
import Body from './Components/Body'
import Header from './Components/Header';
import Menu from './Components/Menu';




function App() {

   return (
    <div className = "App">
     <div className="container">
    <div className="row fixed-top">
        <div className="col-lg-12">
          <Header/>
        </div>
    </div>
    <div className="row page-content">
        <div className="col-12 col-lg-4 menu" > 
        <Menu/>
        </div>
        <div className="col-lg-8">
          <Body/>
        </div>
    </div>
</div>
      
     
    </div>
  );
}

export default App;



