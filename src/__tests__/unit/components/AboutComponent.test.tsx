import { render, screen, fireEvent } from "@testing-library/react";
import AboutPage from "../../../pages/AboutUsPage/AboutUs";
import HistoryComponent from "../../../pages/AboutUsPage/History";
import { BrowserRouter} from "react-router-dom";

describe("About Component", ()=>{
    beforeEach(()=>{
        render(
            <BrowserRouter>
                <AboutPage/>
                <HistoryComponent/>
            </BrowserRouter>
            );
    })
    it("AboutUs text", ()=>{
        const output = screen.getByText("About Us");
        expect(output).toBeDefined();
    });

    it("AboutUs Description Text", ()=>{
        const output = screen.getByText("We have the capabilities and experience to deliver the products you need to move forward");
        expect(output).toBeDefined();
    });

    it("AboutUs - Text should change on button click",()=>{
        const output:HTMLButtonElement = screen.getByRole("button");
        expect(screen.getByText("to read more")).toBeInTheDocument();
        fireEvent.click(output);
        expect(screen.getByText("to read less")).toBeInTheDocument();
    });

    it("AboutUs - On button click History component should be display and hidden on another click",()=>{
        const output:HTMLButtonElement = screen.getByRole("button");
        expect(screen.getByText("Our History!!!")).toBeInTheDocument();
        fireEvent.click(output);
        expect(screen.getByText("Our History!!!")).toBeInTheDocument();
    })
});