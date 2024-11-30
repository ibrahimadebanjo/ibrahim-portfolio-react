import abuImage from '../assets/abu-image.png'
import ileseImage from '../assets/Ilese-comp.jpg'
import yic from '../assets/YIC-logo.jfif'
import codeSmith from '../assets/codesmith.ico'
import alx from '../assets/alx.jpg'
import fcda from '../assets/fcta.png'
const Experience = () => {
  return (
    <div>
        <h2 className="text-center text-4xl mt-3 mb-4">EXPERIENCE</h2>
            <p className="text-stone-700 text-xl text-center mb-8 ">My Professional Experience. </p>
           
    <div className="flex  justify-between items-center flex-col md:flex-row gap-[2%] mb-8">
{/* first row */}
    <div className="flex flex-col md:w-[49%] ">

      <h1 className='text-neutral-600 mb-6 ml-4 '>Education/Experience</h1>
{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={ileseImage} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2012 - 2018</p>
<h3 className='text-[18px] font-semibold '>Ilese Comprehensive High School</h3>
<p className='text-[14px]'>Completed high school diploma with strong foundation in sciences and Mathematics and Computer Science. laying the groundwork for my future pursuits in technology and Veterinary Medicine.</p>
</div>
  </div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={abuImage} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500"></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2023 - Present</p>
<h3 className='text-[18px] font-semibold '>Ahmadu Bello University Of Zaria.</h3>
<p className='text-[14px]'>Currently Pursuing a degree in Veterinary Medicine with a focus on leveraging technology to improve animal </p>
</div>
  </div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={yic} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2022 - 2023</p>
<h3 className='text-[18px] font-semibold '>Frontend Developer Internship.</h3>
<p className='text-[14px]'>Participated in a 4-month Frontend Development Scholarship Program, 
  mastering HTML, CSS, JavaScript, and React through weekly hands-on projects, assignments, and testing. 
  The program consisted of three levels: Basic (HTML/CSS), Intermediate (JavaScript), and 
  Advanced (React with NPM, Yarn, and Vite). Consistently demonstrated expertise, 
  earning weekly Best Student of the Week certifications,
   and acquired skills in frontend development, problem-solving, and time management</p>
</div>
  </div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={alx} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2023 - 2024</p>
<h3 className='text-[18px] font-semibold '>ALX Professional Foundations</h3>
<p className='text-[14px]'>Completed an 8-week professional development program,
   enhancing expertise in 8 key meta skills: Self-Awareness, Teamwork and Management, 
   Effective Communication, Quantitative Reasoning, Entrepreneurial Thinking, Critical Thinking, 
   Time Management, and Tech Foundations. This comprehensive program equipped me with essential skills to excel in 
   specialized fields, 
  fostering a strong foundation for career growth and professional success.</p>
</div>
  </div>
</div>
{/*  */}

   </div>
      {/* second row */}
      <div className="flex flex-col md:w-[49%] h-auto">

      <h1 className='text-neutral-600 mb-6 ml-4'>Education/Experience</h1>
{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={codeSmith} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2022 - 2023</p>
<h3 className='text-[18px] font-semibold '>Codesmith SWE Bootcamp </h3>
<p className='text-[14px]'>Joined software engineering bootcamp  where i learnt more about programming languages like Javascript.</p>
</div>
  </div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={alx} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2023 - 2024</p>
<h3 className='text-[18px] font-semibold '>ALX AICE</h3>
<p className='text-[14px]'>ALX AICE focus on AI-powered tools and techniques, such as predictive analytics, generative adversarial networks,
   and deep learning, help software engineers build more efficient, reliable, and innovative software systems.
ALX AICE empowers software engineers to build cutting-edge systems leveraging AI-powered tools and techniques, 
including: Predictive Analytics, Generative Adversarial Networks (GANs) and Deep Learning</p>
</div>
  </div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={alx} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2023 - 2024</p>
<h3 className='text-[18px] font-semibold '>ALX Frontend Programme </h3>
<p className='text-[14px]'>ALX Frontend Engineering program focus on building intuitive and interactive
   digital interfaces, frontend developers bring websites and applications to life using cutting-edge technologies
    like HTML, CSS, JavaScript, 
  and frameworks like React, Angular, or Vue and best practices.</p>
</div>
  </div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
      <div className="flex flex-col items-center">
  <div className="w-8 h-8 rounded-full">
<img src={fcda} className="" alt="" />
  </div>
  <div className="h-full w-[2px] bg-green-500 "></div>
  </div>

  <div className=" bg-green-400 text-white p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold '>2023 - 2024</p>
<h3 className='text-[18px] font-semibold '>Industrial Trainee  </h3>
<p className='text-[14px]'>As a veterinary medical student, I enrolled in a comprehensive 2-month industrial training
   program at Nyanya veterinary clinic (FCTA), leveraging technology to enhance animal healthcare. This hands-on
    experience combined clinical expertise with digital 
innovation. conducted post-mortem examinations on animal carcasses to identify disease/abnormalities,
 ensuring ethical compliance. performed meticulous examinations, documented findings, and maintained accurate records, 
 adhering to regulatory standards.</p>
</div>
  </div>
</div>
{/*  */}

   </div>


    </div>
    </div>
  )
}

export default Experience