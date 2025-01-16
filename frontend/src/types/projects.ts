import { skill } from "./skills";

export interface Project extends skill {
  date: string;
  skills: string[] ;
}
