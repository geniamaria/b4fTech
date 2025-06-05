export interface CourseProps {
  id: string;
  title: string;
  description: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  isFree: boolean;
}
