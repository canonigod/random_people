import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileImage from "./ProfileImage";
import TranslationContext from "../../context/TranslationContext";

const mockT = jest.fn((key) => key);
const userMock = {
  name: { first: "John", last: "Doe" },
  picture: { large: "https://example.com/john.jpg" },
};
const wrapper = ({ children }) => (
  <TranslationContext.Provider value={{ t: mockT }}>
    {children}
  </TranslationContext.Provider>
);

describe("ProfileImage component", () => {
  test("renders with user image", () => {
    render(<ProfileImage user={userMock} />, { wrapper });

    const userImage = screen.getByAltText("John Doe");
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute("src", '/_next/image?url=https%3A%2F%2Fexample.com%2Fjohn.jpg&w=640&q=75');
  });

  test("renders translated title for the profile image", () => {
    render(<ProfileImage user={userMock} />, { wrapper });

    const title = screen.getByText("profile_image");
    expect(title).toBeInTheDocument();
    expect(mockT).toHaveBeenCalledWith("profile_image");
  });

  test("does not render image when user data is not present", () => {
    render(<ProfileImage user={null} />, { wrapper });

    const images = screen.queryByRole("img");
    expect(images).toBeNull();
  });

});
