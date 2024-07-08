import { personOne, personThree, personTwo } from "../../../assets"
import K from "../../../constants"
const Testimonial = () => {
  return (
    <div>
      <div className="bg-[#F7F7F7]">
        <div className="container mx-auto text-center pt-36 pb-24">
        <h3 class="text-sm font-serif text-[#9E9D9D] font-semibold mb-2 ">Testimonial</h3>
        <h2 class="text-[#052C43] font-sans text-4xl font-bold mb-8">Happy Customers</h2>
        </div>

        <div className="grid grid-cols-3 ml-24 mr-24 gap-5 ">
          {
            K.TESTIMONIAL.map(
              (testimonial, index) => {
                return <div className="p-20 relative rounded-md shadow-md" key={index}
                
                  style={{ backgroundColor: testimonial.bgColor }} >
                    <span className=" absolute  rounded-full p-2 top-0 left-8" style={{backgroundColor: testimonial.iconBg}}  >{testimonial.Icon}</span>
                  <div>
                <p className="mt-1 font-serif text-[#c7aaaa] text-lg font-medium ">{testimonial.description}</p>
                  </div>

                  <div>
                    <img src={personOne} alt="Person One" />
                    <h3>Roger Scott</h3>
                    <p>Marketing Manager</p>
                  </div>
        
    
                </div>
    
    
    
              } 

            )
          }
        </div>

      </div>
    </div>
  )
}

export default Testimonial