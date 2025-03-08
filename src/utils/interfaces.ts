import React from "react";

export interface projectInterface{
    src: string,
    title: string,
    desc: string,
    techStack: {name: string, icon: React.ElementType}[],
    liveLink: string,
    githubLink: string, 
}

export interface skillInterface{
    name: string,
    icon: React.ElementType,
    fill?: string,
}