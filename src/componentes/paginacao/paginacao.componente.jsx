import "./paginacao.css";
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getCharactersFromAPI, cleanFilter, setFilter, swapPage, pageSelector } from "../../state/characters/characters.slice";
/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch()

  const page = useSelector(pageSelector)
  console.log(page)

  useEffect(() => { 
    dispatch(cleanFilter())
    dispatch(getCharactersFromAPI())
  }, [dispatch, page])
  

  const pageUp = () => dispatch(swapPage(page + 1))
  
  const pageDown = () => dispatch(swapPage(page - 1))

  return (

    <div className="paginacao">
      <button onClick={pageDown} disabled={page === 1 ? true : false} className={"primary"}>
        Anterior
      </button>
      <button onClick={pageUp} disabled={false} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
