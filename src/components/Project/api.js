export const fetchStats = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { label: "Courses", value: "3/7" },
          { label: "Quizzes", value: "30/70" },
          { label: "Prototypes", value: "2" },
          { label: "Hours Learning", value: "2 hours" },
        ]);
      }, 1000); // Simule un délai de 1 seconde
    });
  };
  
  export const fetchEnrolledCourses = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "Basic of English Language", progress: "2/10" },
          { title: "Introduction to Web Development", progress: "0/10" },
          { title: "Basic Data-Structure and Algorithm", completed: true },
        ]);
      }, 1000);
    });
  };
  
  export const fetchCalendarData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          month: "Sept 2023",
          assignment: "Assignment 04",
          dueDate: "Oct 02, 2022",
        });
      }, 1000);
    });
  };
  
  export const fetchFeaturedData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Featured",
          lessons: 5,
          quizzes: 4,
          description: "Quisque et tristique eu est sed id sapien, nullam erat.",
        });
      }, 1000);
    });
  };
  