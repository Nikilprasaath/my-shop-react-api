import { render, screen } from "@testing-library/react";
import HomePage from "../../../pages/HomePage/HomePage";
import { BrowserRouter} from "react-router-dom";

describe("Home Page", ()=>{
    beforeEach(()=>{
        render(
            <BrowserRouter>
                <HomePage/>
            </BrowserRouter>
            );
    })
    it("HomePage Carousel text", ()=>{
        const carouselText = screen.getAllByText("Same Day Delivery !");
        expect(carouselText).toBeDefined();
    });

    it("HomePage Carousel Description Text", ()=>{
        const carouselDescription = screen.getAllByText(
            /We have the capabilities and experience to deliver the products/i);
        expect(carouselDescription).toBeDefined();
    });
    it("Carousel previous icon background color grey", () => {
        const carouselBtnElement = screen.getByTestId('prevCarouselIcon');
        expect(carouselBtnElement).toHaveStyle(
            "background-color:#6c757d"
        )
    });

});