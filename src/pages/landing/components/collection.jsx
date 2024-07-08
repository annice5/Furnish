import { furnitureFive, furnitureFour, furnitureOne, furnitureSix, furnitureThree, furnitureTwo } from "../../../assets"

const Collection = () => {
  return (
    <div>
      <div className="mt-36 text-center">
        <p className="text-sm font-serif text-[#9E9D9D] font-normal">OUR FINISH PROJECTS</p>
        <h1 className="text-[#052C43] font-sans text-4xl font-bold pt-5">Furniture Collection</h1>
      </div>


      <div className="container ml-3 pt-9" >
        <div className="grid grid-cols-3 gap-2 mr-80">
          <div className="col-span-1  ">
             <img src={furnitureOne} alt=" Furniture One" className="object-cover h-[345px] w-[320px] " />
          </div>

          <div className="col-span-1 ">
            <img src={furnitureTwo} alt="Furniture Two" className="object-cover h-[345px] w-[320px] "/>
          </div>

          <div className=" md:col-span-2 row-span-2 order-1  ">
            <img src={furnitureThree} alt="Furniture Three" className="object-cover w-full h-[345px] md:h-full " />
          </div>

          <div className="col-span-1 md:col-span-2 row-span-1">
            <img src={furnitureFour} alt=" Furniture Four" className="object-cover"/>
          </div>

          <div className="  "> 
            <img src={furnitureFive} alt="Furniture Five" className="object-cover h-[345px] w-[320px" />
          </div>

          <div className="">
            <img src={furnitureSix} alt="Furniture Six" className="object-cover" />
          </div>

        </div>
      </div>


    </div>
  )
}

export default Collection