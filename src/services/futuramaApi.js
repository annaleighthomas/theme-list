export const fetchCharacters = async () => {
  const res = await fetch(
    'https://futuramaapi.herokuapp.com/api/v2/characters'
  );
  const json = await res.json();
  console.log(json);

  return json.map(({ Name, Planet, Species, Status }) => ({
    Name,
    Planet, 
    Species, 
    Status
  }));
};


