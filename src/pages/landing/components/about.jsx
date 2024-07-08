import { Play } from "lucide-react"
import { aboutBg } from "../../../assets"
const About = () => {
  return (
    <div className="relative" >
      <div className="">
      <img src={aboutBg} alt="About Background" />
      </div>
      <div className="text-start absolute top-44 right-32">
        <h6 className="text-sm font-serif text-[#9E9D9D] font-normal ">ABOUT FURNISH</h6>
        <h1 className="text-[#052C43] font-sans text-4xl font-bold pt-5">Quality Makes the Belief for <br /> Customers</h1>
        <p className="pt-12 text-[#757575] text-lg">Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts. Separated they <br /> live in Bookmarksgrove right at the coast of the Semantics, a large <br /> language ocean.</p>
        
        <div className="pt-8  ">
        <span className="absolute  rounded-full p-6 bg-[#CF7500]  "><Play/></span>
        </div>
        <h3 className="text-[#CF7500] ml-24 mt-6 font-serif font-bold ">Watch Video</h3>
      </div>

    

      
    </div>
  )
}

export default About