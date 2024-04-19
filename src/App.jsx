import './App.css'
import Burger from './components/main/Burger Title/Burger'
import Combos from './components/main/Combo folder/Combos'
import Delive from './components/main/Delivery folder/Delive'
import Formfood from './components/main/Form section/Formfood'
import Hero from './components/main/Hero folder/Hero'
import Menu from './components/main/Menu folder/Menu'
import Navbar from './components/navbar/Navbar'
import About from './components/main/About Folder/About'
import Creator from './components/main/Creator folder/Creator'
import Blog from './components/main/Blog folder/Blog'
import Footer from './components/Footer/Footer'
import Copyright from './components/Footer/Copyright'

function App() {

  return (
    <div className="parent">

      <header>

        <Navbar />

      </header>

      <main>

        <Hero />

        <Burger />

        <Menu />

        <Combos />

        <Delive />

        <Formfood />

        <About />

        <Creator />

        <Blog />

      </main>

      <footer>

       <Footer />

       <Copyright />

      </footer>

    </div>
  )
}

export default App
