import { skillInterface } from "@/utils/interfaces";

export default function SkillComponent({ skill }: { skill: skillInterface }) {
  return (
    <div className="flex gap-5 rounded-md w-fit h-12 justify-center items-center bg-[linear-gradient(#4d50fe55,#a11cde55)] p-2">
      <p className="text-[#efefef] cursor-default">{skill?.name}</p>
      <div>{skill?.icon && <skill.icon size={30}/>}</div>
    </div>
  );
}
