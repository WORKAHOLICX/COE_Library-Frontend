import React, { useEffect, useState } from "react";
import "../Components/home.css";
import axios from "./utils/axios";
import Searchbar from "../Components/Searchbar/Searchbar";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ProgramCard from "../Components/ProgramCard/ProgramCard";
import { useAuth } from "./hooks/useAuth";
import RecommendedBooks from "../Components/RecommendedCourses/RecommendedBooks";

const Home = () => {
  const [course, setcourse] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    function fetchData() {
      axios
        .get("/search")
        .then((res) => {
          setcourse(res.data);
        })
        .catch((err) => {
          const error = err.response.status;
          if (error === 401) {
            logout();
          }
        });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Program", JSON.stringify(1));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Everything" style={{ overflowX: "hidden" }}>
      <Navbar />

      <section className="below_nav">
        <div className="container">
          <div
            className="d-sm-flex align-items-center 
            justify-content-between"
          >
            <div>
              <h1 style={{ textAlign: "center", paddingTop: "30px" }}>
                {" "}
                <span className="text-warning">
                  WELCOME TO THE CoE VIRTUAL LIBRARY
                </span>
              </h1>
              <p style={{ color: "white", textAlign: "center" }}>
                You don't need to go through the stress of asking your
                colleagues for your course materials. Get all your engineering
                course materials right here !!
              </p>

              <div className="searchb">
                <Searchbar placeholder="Search for course..." data={course} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>

      <RecommendedBooks />
      <ProgramCard />
      <Footer />
    </div>
  );
};

export default Home;
