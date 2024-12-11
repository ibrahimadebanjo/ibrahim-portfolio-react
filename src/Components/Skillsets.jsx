import next from "../assets/nextjs-icon-512x512-y563b8iq.png"
import material from "../assets/material-ui.svg"
import PropTypes from "prop-types"
const Skillsets = (props) => {
    return (
      <div className="mb-10">
       <h2 className="text-center  text-stone-600 mt-4 mb-4 text-4xl"> MY SKILLS</h2>
       <p className="text-stone-700 text-xl text-center mb-8" >The key Skills/ Technologies I use for my Projects. </p>

       <div className="flex flex-col gap-3 items-center">
 <h3 className="text-2xl  text-stone-400 font-bold">Frameworks/Library </h3>
 <div className="flex flex-wrap gap-4 justify-center items-center">
       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-100 text-center">
        <i className={props.framework.tailwind}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.framework.react}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={props.framework.bootstrap}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <img src={next} alt="" className="w-[110px] h-[110px] p-2" />

        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={props.framework.vue}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.framework.redux}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <img src={material} alt="" className="w-[110px] h-[110px] p-2" />
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.framework.angular}></i>
        </div>

       </div>
       
       </div>
       </div>
{/*  */}

<div className="flex flex-col gap-3 items-center mt-9">
 <h3 className="text-2xl  text-stone-400 font-bold">LANGUAGES/TOOLS </h3>
 <div className="flex flex-wrap gap-4 justify-center items-center">
       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.git}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.github}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.firebase}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.html}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.node}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.javascript}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.css}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={props.tools.typescript}></i>
        </div>

       </div>
       
       </div>
       </div>

    </div>
    )
  }

Skillsets.propTypes = {
  framework: 
  PropTypes.objectOf(PropTypes.string).isRequired,
  tools: 
  PropTypes.objectOf(PropTypes.string).isRequired
}

  export default Skillsets;