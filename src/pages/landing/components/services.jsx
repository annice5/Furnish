import { DoorClosed, Handshake, Headset, Sofa } from "lucide-react"
import K from "../../../constants"

const Services = () => {
  return (
    <div className="grid grid-cols-4 gap-x-2 pt-2  ml-3 mr-3">
      {
        K.SERVICES.map(
          (service, index) => {
            return <div className="p-10 relative" key={index}
              // className={`w-[service.width]`}
              style={{ backgroundColor: service.bgColor }} >
                <span className=" absolute  rounded-full p-5" style={{backgroundColor: service.iconBg}}  >{service.Icon}</span>
              <div className="pt-20">
              <h3 className="font-medium font-sans text-lg ">{service.title}</h3>
              <p className="mt-2 font-serif text-[#80809C] text-lg font-medium">{service.description}</p>
              </div>

            </div>



          }
        )
      },


    </div>
  )
}

export default Services