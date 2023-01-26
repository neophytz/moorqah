import React, { useEffect, useState } from 'react'

import img from "../assets/Landscape-Color.jpg";

const Hero = () => {  
    
    const MAX_SCROLL = 300;
    const [imagesSrc, setImagesSrc]= useState([
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        },
     
        {
            source: img,
            xVal:0,
            yVal:0,
        }]);
    const [opacity, setOpacity] = useState(1);
    useEffect(()=>{
        const handleScroll = () =>{
            const initialOffset = document.querySelector('#scrolling_images').offsetTop;
            let scroll = window.pageYOffset - initialOffset + 100;
            let windowHeight = window.innerHeight; 
            if(scroll > 0 && scroll < windowHeight+ initialOffset){
                const opac = scroll <= MAX_SCROLL ? 1- (scroll / MAX_SCROLL) : 0;
                setOpacity(opac);
                const latestSrc = imagesSrc;
                // x values
                latestSrc[0].xVal=((-scroll)/MAX_SCROLL*25)
                latestSrc[1].xVal=((scroll)/MAX_SCROLL*25)
                latestSrc[2].xVal=((scroll)/MAX_SCROLL*25)
                latestSrc[3].xVal=((scroll)/MAX_SCROLL*25)
                latestSrc[4].xVal=((scroll)/MAX_SCROLL*25)
                latestSrc[5].xVal=((-scroll)/MAX_SCROLL*25)
                latestSrc[6].xVal=((scroll)/MAX_SCROLL*25)
                latestSrc[7].xVal=((-scroll)/MAX_SCROLL*25)
                latestSrc[8].xVal=((scroll)/MAX_SCROLL*25)
    
                // y values
                latestSrc[0].yVal=((scroll)/MAX_SCROLL*50)
                latestSrc[1].yVal=((-scroll)/MAX_SCROLL*50)
                latestSrc[2].yVal=((scroll)/MAX_SCROLL*50)
                latestSrc[3].yVal=((scroll)/MAX_SCROLL*50)
                latestSrc[4].yVal=((scroll)/MAX_SCROLL*50)
                latestSrc[5].yVal=((-scroll)/MAX_SCROLL*50)
                latestSrc[6].yVal=((scroll)/MAX_SCROLL*50)
                latestSrc[7].yVal=((-scroll)/MAX_SCROLL*50)
                latestSrc[8].yVal=((scroll)/MAX_SCROLL*50)

                setImagesSrc([...latestSrc])
            }
            else {
                setImagesSrc([
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    },
                 
                    {
                        source: img,
                        xVal:0,
                        yVal:0,
                    }]);
            }
        }
        window.addEventListener("scroll",handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [imagesSrc]);

  return (
    <div className='d-flex align-items-center' style={{height:'400vh'}}>
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6 text-dark'>
                    <h1>
                        This is a heading.
                    </h1>
                    <p className='text-justify'>
                        Labore reprehenderit amet anim cillum amet amet ad quis Lorem laborum laboris cupidatat velit. Id aute esse eiusmod cupidatat irure duis est anim labore. Occaecat duis ex in Lorem voluptate culpa duis ullamco velit nostrud tempor laborum quis aliquip. In in nostrud ex incididunt consectetur aute duis do elit ea amet pariatur. Ad cupidatat cillum elit dolor est sint aliquip pariatur mollit elit aliqua laboris sint. Officia tempor excepteur cupidatat quis consequat in.
                    </p>
                </div>
                <div className='col-md-5' id="scrolling_images">
                    <div className='row'>
                    {   
                        imagesSrc.map((image, idx) =>
                            <div key={idx} className='col-4 py-3 d-flex justify-content-center align-items-center'>
                                <div className='grid-img' style={{opacity:opacity, backgroundImage:`url(${image.source})`, transform:`translateX(${image.xVal}px) translateY(${image.yVal}px)`}}>
                                </div>
                            </div>)
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero