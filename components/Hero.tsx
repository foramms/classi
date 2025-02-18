import Image from 'next/image'
import Button from './Button'
import Link from "next/link"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* remove below for map removal */}
      { <div className="hero-map" />}

      <div className= "realtive z-20 flex flex-1 flex-col xl:w1/2">
        <Image
          src="/Icon-notepad.svg"
          alt="camp"
          width={50}
          height = {50}
          className="absolute-left-[-5px] top[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 text-blue-90">
          CLASSI
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Welcome to a collaborative website to gain information about classes to guide your educational journey.
          For students by students!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className ="flex items-center gap-2">
            {Array(5).fill(1).map((_,index)=> (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height= {24}
              />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            5k
            <span className="regular-16 lg:regular-20 ml-1"> "Excellent"</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-2">
          <Link href="/login">
          <Button
              type="button"
              title="Write a Review"
              icon="/herowrite.svg"
              variant="btn_green" backgroundcolor={''}          />
          </Link>
        </div>
      </div>
      
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268nx] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                   
          
          <div className="flex flex-col">
            <div className = "flexBetween">
              <p className = "regular-16 text-gray-20">Class Name</p>
              <Image src="/close.svg" alt="close" width={24} height= {24} />
            </div>
            <p className=" bold-20 text-white"> ECS 120 </p>
          </div>

          <div className = "flexBetween">
            <div className = "flex flex-col">
              <p className = "regular-16 block text-gray-20">Term</p>
              <p className="bold-20 text-white"> F23 </p>
            </div>

            <div className = "flex flex-col">
              <p className = "regular-16 block text-gray-20">Overall</p>
              <p className="bold-20 text-white"> 4.8/5 </p>
            </div>
          </div>
        </div>
    </div>

    </section>
  )
}

export default Hero