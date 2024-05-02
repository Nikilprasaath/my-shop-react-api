import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const AboutUs = () => {
    const[readText, setReadText] = useState("to read more");
    const[isClicked, setIsClicked] = useState(true);
    const navigate = useNavigate();

    const handleClick = () =>{
        readText === "to read more" ? setReadText("to read less") : setReadText("to read more");
        isClicked ? setIsClicked(false):setIsClicked(true);
        isClicked ? navigate("/about-us/history"): navigate("/about-us");
    }

    return(
        <>
            <h2>About Us</h2>
            <p>We have the capabilities and experience to deliver the products you need to move forward</p>
            <p><button onClick={handleClick}>Click</button> {readText}</p>
            <Outlet></Outlet>
        </>
    )
}

export default AboutUs;