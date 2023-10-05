import './map.css'
import mapaImagem from 'assets/mapa.png'

const Map = () => {
    return (
        <section className='map section flex'>
            <div className='map__container flex'>
                <h2 className='map__title'>Mapa da Cidade</h2>
                <h3 className='map__subtitle'>Encontre serviços públicos disponíveis</h3>

                <div className='mapa'>
                    <img src={mapaImagem} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Map;