import { useState } from "react";
import { data } from "./data";


function Services(){
const [service, setService] = useState(data);

const removeService = (id)=> {
    let newService = service.filter((item) => item.id !==id);
    setService(newService)}

    return(
        <div >
            {service.map((element => {
                const{id, title, image, descriptionOne, descriptionTwo, descriptionThree, descriptionFour} = element;
                return(
                    <div key={id} className="service-box">
                        <img src={image} alt='service' width='280px' data-aos="zoom-out-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1200"/>
                        <div data-aos="zoom-out-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1200" className="benefit">
                        <h2 className="serviceTitle">{title}</h2>
                        <ul>
                            <li>{descriptionOne}</li>
                            <li>{descriptionTwo}</li>
                            <li>{descriptionThree}</li>
                            <li>{descriptionFour}</li>
                        </ul>
                        <button className="btn-service"><a className="ancor-service" href="https://t.me/karinekasyan" target="_blank" rel="noreferrer">get in touch</a></button>
                        <button className="btn-service-remote"onClick={()=> removeService(id)}>keep out</button>
                        </div>
                        
                        
                    </div>
                )
            }))}
        </div>
    )
}

export default Services;