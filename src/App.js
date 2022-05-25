import './App.css';

import TopNav from './components/top-nav/top.nav.component';
import Navigation from './components/posts/nav.component';
import CategoriesMenu from './components/categories-menu/categories.menu.component';

function App() {

  return (
    <div className='container-conteiners'>
      <TopNav />
      <Navigation />
      <CategoriesMenu />
    </div>
  );
}

export default App;
