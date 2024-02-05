
import video from './media/videoTagset.MP4';

function Home (){
    return(
        <div className='container'>
            <div>
                <video autoPlay muted loop>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>
    <div className='cardBox' >
        <div className='cardInfo' data-aos='fade-up' data-aos-duration="1800">
                <h2>Business <br/>is for <br/><span>everyone</span></h2>
                <h4>Turn your obsession into a business with us</h4>
                <p>Our experienced and qualified team of accountants can assist you with bookkeeping, financial statements, tax preparation, payroll management, and more.We understand that every business is unique, and we tailor our services to meet your specific needs and goals. </p>
            </div>

            <div className='cardInfo' data-aos='fade-up' data-aos-duration="1800" >
                <h2>Briefly <br/>about our <br/><span>team</span></h2>
                <h4>We are young and always ready for change</h4>
                <p>We stay up-to-date with the latest laws and regulations, so you can have peace of mind knowing that your business is being handled accurately and efficiently. Our team provides exceptional service to our clients. </p>
            </div>
    </div>
            

            <footer className='footer'>
                <h6>Copyright © 2024 TAGSET group, Inc. </h6>
                <a className='ancor' href='https://t.me/karinekasyan' target="_blank" rel="noreferrer">get in touch</a>
            </footer>

        </div>
    )
}

export default Home;