
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import './AppStyles.css';
import NavigationBar from'./components/NavigationBar';
import{Routes,Route}from'react-router-dom';
import CustomerFormWrapper from './components/CustomerFormWrapper';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import Comics from './components/comics';
import CharacterList from './components/CharacterList';
import Characters from './components/Characters';
;
function App(){
 return(
 <div className='app-container'>
  <NavigationBar/>
  <Routes>
  <Route path = 'homepage' element ={<HomePage/>}/>
  <Route path ='/characters/' element ={<BrowseCharacters/>}/>
  <Route path ='*' element={<NotFound/>}/>
  <Route path ='/character-details/' element ={<CharacterDetails/>}/>
  <Route path ='/character-list/' element ={<CharacterList/>}/>
  <Route path ='/comics/' element ={<Comics/>}/>
  </Routes>
  </div>
 );
}

export default App;
