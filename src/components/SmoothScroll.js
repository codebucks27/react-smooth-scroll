import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';




  const overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: '#fff',
  };

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

  
const options = {
    damping : 0.07,
    thumbMinSize: 100,
    plugins: {
      overscroll: { ...overscrollOptions },
    },
    
  }
  
  const Scroll = () => {

    useEffect(() => {

        Scrollbar.use(OverscrollPlugin);

        Scrollbar.init(document.body, options);
        
    
      
    
        return () => {
          if (Scrollbar) Scrollbar.destroy(document.body)
        }  },[])
  


    return null;
}

export default Scroll;