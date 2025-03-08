import { skillInterface } from "@/utils/interfaces";

export default function SkillComponent({ skill }: { skill: skillInterface }) {
  return (
    <div className="flex gap-5 rounded-md w-fit h-12 justify-center items-center bg-slate-900 p-2">
      <p className="text-slate-50">{skill?.name}</p>
      <div>{skill?.icon && <skill.icon size={30}/>}</div>
    </div>
  );
}
