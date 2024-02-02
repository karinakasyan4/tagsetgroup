import { useState } from "react";
import { data } from "./data";


function Services(){
const [service, setService] = useState(data);


    return(
        <div>
            {service.map((element => {
                const{id, title, image, descriptionOne, descriptionTwo, descriptionThree, descriptionFour} = element;
                return(
                    <div key={id} className="service-box">
                        <img src={image} alt='service' width='280px'/>
                        <div className="benefit">
                        <h2 className="serviceTitle">{title}</h2>
                        <ul>
                            <li>{descriptionOne}</li>
                            <li>{descriptionTwo}</li>
                            <li>{descriptionThree}</li>
                            <li>{descriptionFour}</li>
                        </ul>
                        <button className="btn-service"><a className="ancor-service" href="https://t.me/karinekasyan">get in touch</a></button>
                        </div>
                        
                        
                    </div>
                )
            }))}
        </div>
    )
}

export default Services;