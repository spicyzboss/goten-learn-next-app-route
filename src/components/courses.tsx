import CourseCard, { Course } from "./course-card";

interface CoursesProps {
  courses: Course[];
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <>
      {courses.map((el: Course) => (
        <CourseCard
          courseId={el.courseId}
          courseImage={el.courseImage}
          courseName={el.courseName}
          courseCode={el.courseCode}
          courseSemester={el.courseSemester}
          key={el.courseId}
        />
      ))}
    </>
  );
}
