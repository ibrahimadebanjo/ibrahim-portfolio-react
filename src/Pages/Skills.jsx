

const Skills = () => {
  return (
    <div>
      <h2 className="text-center  text-stone-600 mt-4 mb-4 text-4xl"> MY SKILLS</h2>
      <p className="text-stone-700 text-xl text-center mb-8" >The key Skills/ Technologies I use for my Projects. </p>
    <div className='flex justify-between items-center flex-col sm:flex-row gap-6 mt-8  '>
<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer">
<i className="bx bxl-react text-5xl mt-4"></i>
<h3 className='text-xl'>React.js</h3>
<p className="text-sm">Powerful library for building dynamic and interactive UI.</p>
<div className="bg-green-600 skill-level ">80%</div>
</div>

<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer ">
<i className="bx bxl-tailwind-css text-5xl mt-4"></i>
<h3 className='text-xl'>Tailwind</h3>
<p className="text-sm">A utility-first CSS framework for creating responsive designs quickly including material UI</p>
<div className="bg-green-600 skill-level ">60%</div>
</div>

<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer ">
<i className="bx bxl-nodejs text-5xl mt-4"></i>
<h3 className='text-xl'>Next.js</h3>
<p className="text-sm">A React framework for building fast, scalable, and SEO-friendly web applications.</p>
<div className="bg-green-600 skill-level ">40%</div>
</div>

<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center  cursor-pointer">
<i className="bx bxl-redux text-5xl mt-4"></i>
<h3 className='text-xl'>Redux</h3>
<p className="text-sm">A state management library for handling complex application data predictably.</p>
<div className="bg-green-600 skill-level ">50%</div>
</div>
    </div>

{/*  */}
<div className='flex justify-between items-center flex-col sm:flex-row gap-6 mt-7 mb-16 '>
<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer">
<i className="bx bxl-typescript text-5xl mt-4"></i>
<h3 className='text-xl'>Typescript</h3>
<p className="text-sm">A typed superset of Javascript that enhances code reliability and scalability.</p>
<div className="bg-green-600 skill-level ">50%</div>
</div>

<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer">
<i className="bx bx-git-pull-request text-5xl mt-4"></i>
<h3 className='text-xl'>APIS</h3>
<p className="text-sm">Interfaces for seamless communication between software applications and services.</p>
<div className="bg-green-600 skill-level ">50%</div>
</div>

<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer">
<i className="bx bxl-github text-5xl mt-4"></i>
<h3 className='text-xl'>Version Control</h3>
<p className="text-sm">Tools for tracking and managing changes in code collaboratively.</p>
<div className="bg-green-600 skill-level ">96%</div>
</div>

<div className="text-stone-700 card w-56 h-56 rounded-lg md:relative text-center cursor-pointer">
<i className="bx bxl-firebase text-5xl mt-4"></i>
<h3 className='text-xl'>Firebase</h3>
<p className="text-sm">A platform for building and scaling web and mobile apps with backend services.</p>
<div className="bg-green-600 skill-level ">80%</div>
</div>
    </div>



    </div>
  )
}

export default Skills