import Header from '../components/Header';
import HomePage from '../views/HomePage';
import Footer from '../components/Footer';
import Results from '../views/Results';

const routes = {
  '': HomePage,
  '/results': Results,
};

const router = async (route) => {
    console.log(`Ruta Hash:  ${route}`);
    // Header
     const header = null || document.getElementById('header');
     header.innerHTML = await Header();

  // Main Content
  const content = null || document.getElementById('content');
//   let render = routes[route] ? routes[route] : HomePage;
//   content.innerHTML = await render();
    content.innerHTML = await HomePage();

  // Footer
};

export default router;