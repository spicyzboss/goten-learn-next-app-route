import Counter from "@/components/counter";
import { Course } from "@/components/course-card";
import Courses from "@/components/courses";

export default function Home() {
  const courses: Course[] = [
    {
      courseId: 1,
      courseImage: "/suturing.jpg",
      courseName: "Suturing",
      courseCode: "MED-101",
      courseSemester: "1/2564",
    },
    {
      courseId: 2,
      courseImage: "/suturing.jpg",
      courseName: "Suturing",
      courseCode: "MED-101",
      courseSemester: "1/2564",
    },
    {
      courseId: 3,
      courseImage: "/suturing.jpg",
      courseName: "Suturing",
      courseCode: "MED-101",
      courseSemester: "1/2564",
    },
    {
      courseId: 4,
      courseImage: "/suturing.jpg",
      courseName: "Suturing",
      courseCode: "MED-101",
      courseSemester: "1/2564",
    },
    {
      courseId: 5,
      courseImage: "/suturing.jpg",
      courseName: "Suturing",
      courseCode: "MED-101",
      courseSemester: "1/2564",
    },
    {
      courseId: 6,
      courseImage: "/suturing.jpg",
      courseName: "Suturing",
      courseCode: "MED-101",
      courseSemester: "1/2564",
    },
  ];

  return (
    <div>
      <p>home page</p>
      <Counter />
      <Courses courses={courses} />
    </div>
  );
}
