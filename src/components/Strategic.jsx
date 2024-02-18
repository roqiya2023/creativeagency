import strategicImgDesktop from '../assets/desktop/image-strategic.jpg';
import strategicImgTablet from '../assets/tablet/image-strategic.jpg';
import strategicImgMobile from '../assets/mobile/image-strategic.jpg';
import bgpattern from '../assets/desktop/bg-pattern-wave-red.svg';

import './Strategic.css';

function Strategic() {
  return (
    <>
      <div className="stra-main" style={{boxSizing: 'borderBox'}}>
        
        <div className="stra-left">
          <picture>
            <source media="(max-width: 599px)" srcSet={strategicImgMobile} />
            <source media="(min-width: 600px) and (max-width: 1199px)" srcSet={strategicImgTablet} />
            <img src={strategicImgDesktop} alt="Strategic" className="strategic-img" />
          </picture>
        </div>

        <div className="stra-right" >
            <h1>
              <span className='orange-text'>Design</span> is
            
              Strategic
            </h1>
            <p className='p-strategic'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, 
                repellendus, reiciendis odit accusamus, unde vero magni voluptate ab 
                quisquam aliquam 
                atque sequi error adipisci placeat cupiditate. Nam atque et qui?
              
            </p>
            <button className="stra-btn">Scheule a call</button>
        </div>
        <img src={bgpattern} alt="bgpattern" className="bgpattern"/>
       
    </div>
    <div className="bottom">
        <div className="bottom-h1-container">
        <h1 className='bottom-h1'>Our approach for</h1>
        <h1 className='bottom-h1'>creating a winning</h1>
        <h1 className='bottom-h1'>brand</h1>
        </div>
        <div className="pink-card-container">
            <div className="pink-card">
                <h1 className='pink-card-h1'>01</h1>
                <div className="lower-car-container">
                    <h2>Brand Strategy</h2>
                    <p>Brand strategy is critical for long-term success. We help you define goals, 
                        target audience, competitors and more.</p>
                </div>
            </div>
            <div className="pink-card">
                <h1 className='pink-card-h1'>02</h1>
                <div className="lower-car-container">
                    <h2>Brand Identity</h2>
                    <p>Brand identity is how you want the market to perceive your product or brand. 
                        We help you define that identity.</p>
                </div>
        </div>
        <div className="pink-card">
                <h1 className='pink-card-h1'>03</h1>
                <div className="lower-car-container">
                    <h2>Brand Marketing</h2>
                    <p>Brand marketing is how you promote your product or service. We help you define 
                        that identity.</p>
                </div>
        </div>      
        </div>
        <div className="roadmap-img-container">

        </div>

    </div>
</>
)
}
export default Strategic;
