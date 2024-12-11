import Skillsets from "../Components/Skillsets"

const framework = {
  github : "bx bxl-github text-8xl text-stone-600 p-2",
  tailwind : "bx bxl-tailwind-css text-8xl text-stone-600 p-2",
  react : "bx bxl-react text-8xl text-stone-600 p-2",
  bootstrap : "bx bxl-bootstrap text-8xl text-stone-600 p-2",
  redux : "bx bxl-redux text-8xl text-stone-600 p-2",
  vue : "bx bxl-vuejs  text-8xl text-stone-600 p-2",
  angular : "bx bxl-angular text-8xl text-stone-600 p-2",
}

const tools = {
  github : "bx bxl-github text-8xl text-stone-600 p-2",
 git : "bx bxl-git text-8xl text-stone-600 p-2",
  firebase : "bx bxl-firebase text-8xl text-stone-600 p-2",
  typescript : "bx bxl-typescript text-8xl text-stone-600 p-2",
  html : "bx bxl-html5 text-8xl text-stone-600 p-2",
  node : "bx bxl-nodejs text-8xl text-stone-600 p-2",
  javascript : "bx bxl-javascript text-8xl text-stone-600 p-2",
  css : "bx bxl-css3 text-8xl text-stone-600 p-2",

}
const Skills = () => {
  return (
    <div>
      <Skillsets framework={framework} tools={tools}/>
    </div>
  )
}

export default Skills