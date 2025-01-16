import { StaticImageData } from "next/image";

export interface skill {
  title: string;
  description?: string;
  link?: string;
  image: string | StaticImageData ;
  alt?: string;
}
