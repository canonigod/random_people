import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserProfile from "./UserProfile";
import TranslationContext from "../../context/TranslationContext";

const mockT = jest.fn((key) => key);
const mockSetUserProfile = jest.fn();
const userMock = {
  name: { first: "John", last: "Doe" },
  dob: { age: 30, date: "1990-01-01" },
  email: "john@example.com",
  phone: "123-456-7890",
  location: {
    street: { number: 123, name: "Main St" },
    city: "Metropolis",
    state: "NY",
    postcode: "12345",
    country: "USA"
  },
  picture: {
    large: 'https://www.image.com/largeImage.png'
  }
};

const wrapper = ({ children }) => (
  <TranslationContext.Provider value={{ t: mockT }}>
    {children}
  </TranslationContext.Provider>
);

describe("UserProfile component", () => {
  test("renders user information correctly", () => {
    render(
      <UserProfile userProfile={userMock} setUserProfile={mockSetUserProfile} />,
      { wrapper }
    );

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText("Metropolis")).toBeInTheDocument();
    expect(screen.getByText("NY")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
  });

  test("translates labels correctly", () => {
    render(
      <UserProfile userProfile={userMock} setUserProfile={mockSetUserProfile} />,
      { wrapper }
    );

    expect(mockT).toHaveBeenCalledWith("personal_info");
    expect(mockT).toHaveBeenCalledWith("name");
    expect(mockT).toHaveBeenCalledWith("age");
  });

  test("resets user profile on button click", () => {
    render(
      <UserProfile userProfile={userMock} setUserProfile={mockSetUserProfile} />,
      { wrapper }
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockSetUserProfile).toHaveBeenCalledWith(null);
  });
});

