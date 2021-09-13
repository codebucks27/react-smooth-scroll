import { useEffect, useState } from 'react';
import Scroll from './components/SmoothScroll';

import './App.css';

function App() {
const [images,setImages] = useState();



  useEffect(() => {
      fetch('https://picsum.photos/v2/list?limit=10').then(res =>  res.json())
      .then(json => {
        //console.log(json);
        setImages(json);
      });

 },[])

  const random = () => {
    return Math.floor(Math.random()*50);
  }
  return (
    <div className="App">
      <h1 className="title">React Smooth Scroll</h1>
      <Scroll />
      {
        images && images.map(
          img => <div style={{marginLeft:`${random()}rem`}} key={img.id} className="imgContainer">
            <img   src={img.download_url} alt={img.author} />
          </div>
        )
      }
    </div>
  );
}

export default App;
