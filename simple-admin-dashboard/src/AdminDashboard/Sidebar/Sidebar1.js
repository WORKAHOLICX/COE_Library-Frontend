import React from "react";
import { SidebarBox, NavBar, SidebarMenu, SidebarProfileIcon, NavLink } from "./styled";
import AdminProfile from "../../Images/Admin-pana.svg";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';

function Sidebar1(props) {

    // const [isopen, setIsopen] = useState(true);

    // const showSidebar=()=>{
    //     setIsopen(!isopen)
    // }

    return (
        <SidebarBox >

            {/* <NavBar>
            </NavBar> */}
            {/* <GiHamburgerMenu className="hamburger" color="#ff652f" />     */}

            {/* <SidebarProfileIcon style={{ display: props.isopen ? "visible" : "hidden", height: props.isopen ? "200px" : "0px" }} >

                <img style={{ display: props.isopen ? "visible" : "hidden", width: props.isopen ? "150px" : "0px", height: props.isopen ? "150px" : "0px" }} src={AdminProfile} alt="Admin Profile" />
            </SidebarProfileIcon> */}

            <SidebarMenu>


                <NavLink to="/dashboard">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiFillHome /></span>
                    <span className="title" style={{ display: props.isopen ? "block" : "none" }} >DashBoard</span>
                </NavLink>

                <NavLink to="/dashboard/course" >
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiFillBook /></span>
                    <span className="title" style={{ display: props.isopen ? "block" : "none" }}>All Programmes</span>
                </NavLink>

                <NavLink to="/dashboard/upload">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><FaIcons.FaFileUpload /></span>
                    <span className="title" style={{ display: props.isopen ? "block" : "none" }}>Upload File</span>
                </NavLink>

                <NavLink to="/dashboard/delete" >
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiFillDelete /></span>
                    <span className="title" style={{ display: props.isopen ? "block" : "none" }}>Delete File</span>
                </NavLink>

                <NavLink to="/logout">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiOutlineLogout /></span>
                    <span className="title" style={{ display: props.isopen ? "block" : "none" }}>Log Out</span>
                </NavLink>





            </SidebarMenu>

        </SidebarBox>
    )
}

export default Sidebar1;