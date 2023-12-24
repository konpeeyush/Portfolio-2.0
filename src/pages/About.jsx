import CTA from "../components/CTA"
import { skills } from "../constants"
const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hello👋, I'm <span className="blue-gradient_text font-semibold drop-shadow">Peeyush</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm  a tech enthusiast who weaves code into captivating experiences. From React to AI, I've ventured into the tech realm to create a better tomorrow. 🌟

          My passion lies in shaping the future with lines of code, while my love for human connections fuels user-centric designs. 🚀


          Hackathons and open-source projects invigorate my creativity, but when I'm not coding, you'll find me with a book, coffee in hand, or humming along to my favorite tunes. 🎵☕📚

          Let's embark on this tech adventure together, solving challenges and leaving a lasting impact. Reach out, and let's make magic happen! 🌈✨


        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">

        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}

      </div>
      <hr  className="mt-24 border-slate-200"/>
      <CTA />
    </section>
  )
}

export default About