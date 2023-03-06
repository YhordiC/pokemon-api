import { FiPlay, FiPause } from "react-icons/fi";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactHowler from 'react-howler'
import Pokemon from "../audio/Pokemon.mp3"
import "../sass/Audio.scss"
function Audio() {
  {
    
    const [play, setplay] = useState(false);

    
  
    

    function reproducir() {
      setplay(!play);
     
    }

    return (
        <div className="container-audio">
            <div onClick={reproducir} className="audio">
        {play ? <FiPause /> : <FiPlay />}
   
        <ReactHowler src={Pokemon} playing={play} loop={true}/>
        
      </div>
        </div>
      
    );
  }
}

export { Audio };
