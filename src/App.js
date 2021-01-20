import React , {useState, useEffect} from 'react';
import Header from './Header';
import Pokelist from './PokeList';
import Pagination from './Pagination';

function App() {

    const [PokeData, setPokeData] = useState([]);
    const [postPerPage, setPostPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const [total, setTotal] = useState(150);
  
    useEffect(() =>{

    const fetchPokemons =  async () =>{
        for(let i = 1; i <= total; i++){
            await getPokemon(i);
          }
    } 
      fetchPokemons();
    }, [])


    const getPokemon = async (id)  => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await  res.json();
        let name = pokemon.name;
        let type = pokemon.types[0].type['name'];
        let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        setPokeData((prevData) =>{
             return [...prevData, {name, type, imgUrl}];
        } )
    }

    const idOfLast = pageNumber*postPerPage;
    const idOfFirst = idOfLast - postPerPage;

    const paginateNext = () =>{
      setPageNumber((PrevpageNumber)=>{
        return PrevpageNumber + 1;
      })
    }
    const paginatePrev = () =>{
      setPageNumber((PrevpageNumber)=>{
        return PrevpageNumber - 1;
      })
    }

    return (
    <>
        <Header />
        <Pokelist pokedata={PokeData.slice(idOfFirst, idOfLast)}  />
        <Pagination  pageNumber={pageNumber} paginateNext={paginateNext} paginatePrev={paginatePrev}
            total={total} postPerPage={postPerPage}/>
    </>
      );
   
}

export default App;
