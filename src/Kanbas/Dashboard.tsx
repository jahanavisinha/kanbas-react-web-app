import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                                    <img src={course.image} width="100%" height={160} alt={course.name} />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>
                                        <button className="btn btn-primary"> Go </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



// import { Link } from "react-router-dom";
// import * as db from "./Database";
//
// export default function Dashboard() {
//     const courses = db.courses;
//     return (
//         <div id="wd-dashboard">
//             <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//             <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
//             <div id="wd-dashboard-courses" className="row">
//                 <div className="row row-cols-1 row-cols-md-5 g-4">
//                 {/* Course 1 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
//                             <img
//                                 src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png"
//                                 width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1234 React JS
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Full Stack Software Developer
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                         </div>
//
//                         </div>
//                     {/* Course 2 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
//                             <img
//                                 src="https://www.jrebel.com/sites/default/files/styles/social_preview_image/public/image/2020-05/image-blog-revel-top-java-tools.jpg?itok=34P5v4AD"
//                                 width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1235 Intro to Java
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Software Development in Java
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                     </div>
//                     </div>
//
//                     {/* Course 3 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1236/Home">
//                             <img
//                                 src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png"
//                                 width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1236 Intro to Python
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Data Analysis through Python
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                         </div>
//                     </div>
//
//                     {/* Course 4 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1237/Home">
//                             <img
//                                 src="https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png"
//                                 width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1237 Intro to R
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Programming in R for Beginners
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                         </div>
//                     </div>
//
//                     {/* Course 5 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1238/Home">
//                             <img
//                                 src="https://sumatosoft.com/wp-content/uploads/2023/03/ruby-lang-ar21.png"
//                                 width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1238 Intro to Ruby
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Software Development in Ruby
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                         </div>
//                     </div>
//
//                     {/* Course 6 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1239/Home">
//                             <img src="https://miro.medium.com/v2/resize:fit:1400/0*F0Tb3LtoIPzHRcUx"
//                                  width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1239 Intro to SQL
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Creating Queries in SQL
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                         </div>
//                     </div>
//
//                     {/* Course 7 */}
//                     <div className="wd-dashboard-course col" style={{width: "300px"}}>
//                         <div className="card rounded-3 overflow-hidden">
//                         <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1240/Home">
//                             <img
//                                 src="https://www.jrebel.com/sites/default/files/image/2021-01/what%20is%20kotlin%20banner%20image.png"
//                                 width="100%" height={160}/>
//                             <div className="card-body">
//                                 <h5 className="wd-dashboard-course-title card-title">
//                                     CS1240 Intro to Kotlin
//                                 </h5>
//                                 <p className="wd-dashboard-course-title card-text">
//                                     Android Development in Kotlin
//                                 </p>
//                                 <button className="btn btn-primary"> Go</button>
//                             </div>
//                         </Link>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//     );
// }


