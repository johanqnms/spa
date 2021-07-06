import getData from '../utils/getData';


const HomePage = async () => {
    const characters = await getData();

    const view = `
      <div class="home-page">
        <h1>Main Page</h1>
      </div>
    `;
    return view;
  };
  
  export default HomePage;