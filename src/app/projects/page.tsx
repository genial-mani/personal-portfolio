import ProjectComponent from "@/components/ProjectComponent";
import { projects } from "@/utils/projects";

export default function Projects() {
    return <div className="w-full max-w-full flex flex-wrap gap-10 p-5 justify-center items-center">{projects?.map((project,index)=>(
        <ProjectComponent project={project} key={index}/>
    ))}</div>
}