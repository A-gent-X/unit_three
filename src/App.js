import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/homeComponents/HomeScreen';
import DetailScreen from './pages/detailComponents/DetailScreen';
import RecipeScreen from './pages/recipeComponent/RecipeScreen';
import RecipeCard from './pages/RecipeCard';
import Header from './pages/Header';
import Footer from './pages/Footer';
import AdBanner from './pages/homeComponents/AdBanner';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


// const router = createBrowserRouter([
//   { path: '/homeScreen', element: <HomeScreen /> },
//   { path: '/detailScreen', element: <DetailScreen /> },
//   { path: '/recipeScreen', element: <NewRecipeScreen />},
//   { path: '/header', element: <Header />},
// ]);

// const routeDefinitions = createRoutesFromElements(
  // <Route>
  //   <Route path="/homePage" element={<HomePage />} />
  //   <Route path="/detailScreen" element={<DetailScreen />} />
  //   <Route path="/recipeScreen" element={<NewRecipeScreen />} />
  // </Route>
// );


// const router = createBrowserRouter(routeDefinitions);

function App(){

  return (
    
    <div className="App">
      <Header />
          <Routes>
            <Route index path="/homeScreen" element={<HomeScreen />} />
            <Route path="/adBanner" element={<AdBanner />} />
            <Route path="/detailScreen/:id" element={<DetailScreen />} />
            <Route path="/recipeScreen" element={<RecipeScreen />} />
            <Route path="/recipeCard" element={<RecipeCard />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
