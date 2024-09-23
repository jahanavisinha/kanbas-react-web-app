import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200}/>
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go</button>
                        </div>
                        <h5>
                            CS1235 Intro to Java
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Software developing in Java
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1236 Intro to Python
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Data anlysis through Python
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1237 Intro to R
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Beginners course into programming in R
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1238 Intro to Ruby
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Software developing in Ruby
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1239 Intro to SQL
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Creating queries in SQL
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1240 Intro to Kotlin
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Andriod based development in Kotlin
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1241 Intro to Racket
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of CS through Racket
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1242 Intro to C++
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Software developing in C++
                        </p>
                        <button> Go</button>
                        <h5>
                            CS1243 Intro to HTML
                        </h5>
                        <p className="wd-dashboard-course-title">
                            Looking at websites in HTML
                        </p>
                        <button> Go</button>
                    </Link>
                </div>
                <div className="wd-dashboard-course"> ...</div>
                <div className="wd-dashboard-course"> ...</div>
            </div>
        </div>
    );
}
