import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
import UserList from "./UserList";

test("each user should have one row", () => {
  const usersList = [
    { name: "ujwal", email: "ujwaldanta@gmail.com" },
    { name: "ujwal2", email: "ujwaldanta2@gmail.com" },
  ];
  // not preferred approach
  // const { container } = render(<UserList users={usersList} />);
  // const rows = container.querySelectorAll("tbody tr");
  // expect(rows).toHaveLength(2);
  render(<UserList users={usersList} />);
  const users = within(screen.getByTestId("users")).getAllByRole("row");
  expect(users).toHaveLength(2);
});

test("name and email is rendered", () => {
  const usersList = [
    { name: "ujwal", email: "ujwaldanta@gmail.com" },
    { name: "ujwal2", email: "ujwaldanta2@gmail.com" },
  ];
  render(<UserList users={usersList} />);
  usersList.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});

test("name and email show in correct columns", () => {
  const usersList = [
    { name: "ujwal", email: "ujwaldanta@gmail.com" },
    { name: "ujwal2", email: "ujwaldanta2@gmail.com" },
  ];
  render(<UserList users={usersList} />);
  const rows = screen.getByTestId("users").querySelectorAll("tr");
  expect(rows.length).toBe(usersList.length);
  rows.forEach((row, index) => {
    const name = row.querySelector("td:first-child");
    const email = row.querySelector("td:last-child");
    expect(name).toHaveTextContent(usersList[index]?.name);
    expect(email).toHaveTextContent(usersList[index]?.email);
  });
});
