import './search.css'

const Search = () => {
    return (
        <section className='search section'>
            <div className='search__container flex'>
                
                    <h2 className='search__title'>Acompanhe uma denúncia</h2>
                    <h3 className='search__subtitle'>Digite o número de um protocolo e acompanhe o andamento da sua denúncia.</h3>
                
                <input type="text" className='search__input'  placeholder='Buscar denúncia..'/>
            </div>
        </section>
    )
}

export default Search;