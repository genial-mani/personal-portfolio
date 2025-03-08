import SkillComponent from "@/components/SkillComponent";
import { backend, databases, design, devops, frontend, languages, tools } from "@/utils/skills";

export default function Skills() {
  return <div className="w-full max-w-full flex flex-col text-slate-50">
    <h2 className="pl-5 text-3xl">Programing Languages</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{languages?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
    <h2 className="pl-5 text-3xl">Frontend</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{frontend?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
    <h2 className="pl-5 text-3xl">Backend</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{backend?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
    <h2 className="pl-5 text-3xl">Databases</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{databases?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
    <h2 className="pl-5 text-3xl">Design tools</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{design?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
    <h2 className="pl-5 text-3xl">Cloud and Hosting</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{devops?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
    <h2 className="pl-5 text-3xl">Other tools and technologies</h2>
    <div className="w-full max-w-full p-5 flex flex-wrap gap-5">{tools?.map((skill,index)=>(
        <SkillComponent key={index} skill={skill}/>
    ))}</div>
  </div>;
}
