import orangewave from '../assets/desktop/bg-pattern-wave-red.svg'

function Footer(){
    return (
        <footer>
            <img src={orangewave} alt="orange wave" className="orange-wave"/>
            <div className="footer-container">
                <div className="footer-text">
                    <h1>Let's build something</h1>
                    <h1>great together</h1>
                    
                </div>
                <div className="footer-button">
                    <button className='footer-btn'>Schedule A call</button>
                </div>
            </div>
            
        </footer>
    )
}
export default Footer;