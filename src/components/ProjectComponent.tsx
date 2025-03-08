import { projectInterface } from "@/utils/interfaces";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Fade, Zoom } from "@mui/material";
import SpotlightCard from "./GlowingCard";
import Link from "next/link";
import { GitHubLight } from "developer-icons";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

export default function ProjectComponent({
  project,
}: {
  project: projectInterface;
}) {
  return (
    <SpotlightCard>
      <div className="group w-full max-w-[400px] min-h-[565px] text-slate-50 rounded-xl overflow-hidden bg-slate-900">
        <div className="w-full h-52 overflow-hidden">
          <img
            src={project?.src}
            alt={project?.title}
            className="size-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col p-3">
          <h2 className="text-4xl">{project?.title}</h2>
          <p className="text-lg py-4">{project?.desc?.slice(0, 100)}...</p>
          <div className="flex flex-wrap gap-4">
            {project?.techStack?.map((Tech, index) => (
              <div key={index}>
                <Tooltip
                  title={Tech?.name}
                  placement="top"
                  arrow
                  slots={{ transition: Zoom }}
                  slotProps={{ transition: { timeout: 300 } }}
                >
                  <Tech.icon size={40} />
                </Tooltip>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 py-5">
            {project?.liveLink && (
              <Link href={project?.liveLink} target="_blank">
                <Tooltip
                  title="Live Link"
                  placement="top"
                  arrow
                  slots={{ transition: Zoom }}
                  slotProps={{ transition: { timeout: 300 } }}
                >
                  <LinkRoundedIcon fontSize="medium" />
                </Tooltip>
              </Link>
            )}
            <Link href={project?.githubLink} target="_blank">
            <Tooltip
                  title="Github Link"
                  placement="top"
                  arrow
                  slots={{ transition: Zoom }}
                  slotProps={{ transition: { timeout: 300 } }}
                >
              <GitHubLight size={20} />
                </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
