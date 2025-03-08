import { skillInterface } from "@/utils/interfaces";
import { allSkills, languages } from "@/utils/skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {allSkills?.map((language: skillInterface,index)=>(
        <div key={index}>
          <p>{language?.name}</p>
          <div><language.icon/></div>
        </div>
      ))}
    </div>       
  );
}
