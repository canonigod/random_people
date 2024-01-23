import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import TranslationContext from "../../context/TranslationContext";

const mockSetLang = jest.fn();
const wrapper = ({ children }) => (
  <TranslationContext.Provider value={{ setLang: mockSetLang }}>
    {children}
  </TranslationContext.Provider>
);


describe("Navbar component", () => {
  test("renders with two images", () => {
    render(<Navbar />, { wrapper });

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
  });

  test("renders Centurion American Express logo image", () => {
    render(<Navbar />, { wrapper });

    const centurionLogo = screen.getByAltText("Centurion American Express Logo");
    expect(centurionLogo).toBeInTheDocument();
  });

  test("renders American Express logo image", () => {
    render(<Navbar />, { wrapper });

    const amexLogo = screen.getByAltText("American Express Logo");
    expect(amexLogo).toBeInTheDocument();
  });

  test("language buttons function correctly", () => {
    render(<Navbar />, { wrapper });

    const spanishButton = screen.getByText("🇪🇸");
    fireEvent.click(spanishButton);

    expect(mockSetLang).toHaveBeenCalledWith("es");
  });
});
