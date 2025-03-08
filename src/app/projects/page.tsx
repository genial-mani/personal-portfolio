import ProjectComponent from "@/components/ProjectComponent";
import { projects } from "@/utils/projects";

export default function Projects() {
    return <div className="w-full max-w-full gap-8 p-5 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] place-items-center">{projects?.map((project,index)=>(
        <ProjectComponent project={project} key={index}/>
    ))}</div>
}