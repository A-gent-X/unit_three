import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import './Header.css';
import axios from 'axios';

function Header() {
  const [recipes, setRecipes] = useState();

  const getRecipes = () => {
    axios
      .get("https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  },[])

  return (
    <header className='navList'>
      <h1 className='fontSize'>DevMountain Eatery</h1>
      <Link to='/homeScreen'>
        <h1 className='btn'>Home</h1>
      </Link>
      <Link to='/recipeScreen'>
        <h1 className='secBtn'>Add Recipe</h1>
      </Link>
 

    </header>
  )
}

export default Header