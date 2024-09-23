import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                {/* Course 1 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" width={200} alt="Java course image"/>
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 2 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1235/Home">
                        <img src="https://www.jrebel.com/sites/default/files/styles/social_preview_image/public/image/2020-05/image-blog-revel-top-java-tools.jpg?itok=34P5v4AD" width={200} alt="Java course image"/>
                        <div>
                            <h5>CS1235 Intro to Java</h5>
                            <p className="wd-dashboard-course-title">Software Development in Java</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 3 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1236/Home">
                        <img src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png" width={200} alt="Python course image"/>
                        <div>
                            <h5>CS1236 Intro to Python</h5>
                            <p className="wd-dashboard-course-title">Data Analysis through Python</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 4 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1237/Home">
                        <img src="https://download.logo.wine/logo/R_(programming_language)/R_(programming_language)-Logo.wine.png" width={200} alt="R course image"/>
                        <div>
                            <h5>CS1237 Intro to R</h5>
                            <p className="wd-dashboard-course-title">Beginners Course into Programming in R</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 5 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1238/Home">
                        <img src="https://sumatosoft.com/wp-content/uploads/2023/03/ruby-lang-ar21.png" width={200} alt="Ruby course image"/>
                        <div>
                            <h5>CS1238 Intro to Ruby</h5>
                            <p className="wd-dashboard-course-title">Software Development in Ruby</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 6 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1239/Home">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/0*F0Tb3LtoIPzHRcUx" width={200} alt="SQL course image"/>
                        <div>
                            <h5>CS1239 Intro to SQL</h5>
                            <p className="wd-dashboard-course-title">Creating Queries in SQL</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

                {/* Course 7 */}
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1240/Home">
                        <img src="https://www.jrebel.com/sites/default/files/image/2021-01/what%20is%20kotlin%20banner%20image.png" width={200} alt="Kotlin course image"/>
                        <div>
                            <h5>CS1240 Intro to Kotlin</h5>
                            <p className="wd-dashboard-course-title">Android Based Development in Kotlin</p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
