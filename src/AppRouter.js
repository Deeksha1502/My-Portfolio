import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Styles/Styles.scss';
import Navbar from './components/Navbar'


import Home from './components/Home'
import Body from './components/Body'
import Blog from './components/Blog'
import Design from './components/Design'




import Footer from './components/Footer'




const AppRouter=() => (

    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/" component={Navbar} exact={true}/>
   <Route path="/Home"/>
      <Route path="/Body"/>
      <Route path="/Blog"/>
      <Route path="/Design"/>           
      <Route path="/Footer"/>
     </Switch>
   
     <Home />
     <Body />
     <Blog />
     <Design />
     <Footer />
     
  
</div>

      </BrowserRouter>


);

export default AppRouter;
