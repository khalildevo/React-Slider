import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [slide, setSlide] = useState(0);
  const delay = 2000;
  const slides = [
    'Marketing & Web Development',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      goForward()
    }, delay);
  
    return () => clearInterval(interval);
    
    
  });
  const width = window.innerWidth;
    let dotSize = (width - (width*0.2))/(slides.length - 1);
    if(dotSize > 30){
      dotSize = 10
    }
  const goForward = ()=>{
    setSlide(slide + 1);
    if(slide === slides.length - 1){
      setSlide(0)
    }
  }
  const goBack=()=>{
    setSlide(slide - 1);
    if(slide === 0){
      setSlide(slides.length - 1)
    }
  }
  const dotNext=(numb: number)=>{
    setSlide(numb)
  }
  
  return (
    <div className="slider">
      <button className='prev' onClick={goBack}>Previous</button>
      <button className='next' onClick={goForward}>Next</button>
      <div className='slideWrapper'>
      {slides.map((slider,i)=>(
        <div className={slide === i ? 'active' : ''}>{slider}</div>
      ))}
      </div>
      <div className="dots">
        {slides.map((_,i)=>(
          <div style={{width: dotSize}} onClick={() => dotNext(i)} className={slide === i ? 'active' : i === (slide - 1) ? 'prv' : i === (slide - 2) ? 'pprv' : i === (slide + 1) ? 'nxt' : i === (slide + 2) ? 'nnxt':''}></div>
        ))}
      </div>
    </div>
  )
}

export default App