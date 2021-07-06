const API = "https://rickandmortyapi.com/api/character";

const getData = async () => {
  try {
    fetch(API)
      .then((response) => response.json())
      .then((data) => console.log(data));

  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
