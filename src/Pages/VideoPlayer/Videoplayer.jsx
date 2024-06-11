import { useParams } from 'react-router-dom'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommend from '../../Components/Recommend/Recommend'
import './Videoplayer.css'
const Videoplayer = () => {
  
  const{videoId,categoryId} = useParams()

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId}/>
      <Recommend categoryId={categoryId}/>
    </div>
  )
}

export default Videoplayer