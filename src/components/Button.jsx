import "../sass/Button.scss"

 function Button({iconContent, funcion}) {
  return (
    <div className="button__box">
        <button className='button' onClick={funcion}>{iconContent}</button>
        <div className="button__shadow"></div>
    </div>
  )
}

export {Button}