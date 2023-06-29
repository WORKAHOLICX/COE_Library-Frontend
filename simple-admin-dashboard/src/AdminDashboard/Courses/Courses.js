import React from "react";
import { Wrapper } from "../Delete/DeleteStyled";
import Sidebar1 from "../Sidebar/Sidebar1";

import { Container } from "../Upload/uploadStyled";
import Table from "./Table";

const Course = () => {
    return <>


        <Container>
            <div className='overlay'>



                <Sidebar1 isopen={false} style={{ marginRight: '10px' }} />

                {/* <NavBar>
                    <GiHamburgerMenu className="hamburger" onClick={showSidebar} style={{ paddingLeft: '10px' }} />


                </NavBar> */}


                <Wrapper>
                    <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#FF652F' }}>
                        ALL ENGINEERING COURSES
                    </h1>
                    <Table />

                </Wrapper>

            </div>

        </Container >
    </>
}

export default Course;