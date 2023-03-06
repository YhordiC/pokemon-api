import '../sass/Card.scss'

function Card({nombre,imagen}) {
  return (
    <div className="card">
        <p className="card-pokemon">{nombre}</p>
        <div className="card-circulo"></div>
        <img className="card-img" src={imagen} alt='pokemon'/>
    </div>
  )
}

export  {Card};