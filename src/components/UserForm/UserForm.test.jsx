import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import UserForm from "./UserForm";
import userEvent from "@testing-library/user-event";

test("two input one button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  expect(inputs).toHaveLength(2);
  const button = screen.getByRole("button");
  expect(button).toBeVisible();
});

test("add user callback", async () => {
  const mock = vi.fn();
  render(<UserForm onUserAdd={mock} />);
  const name = screen.getByRole("textbox", {
    name: /name/i,
  });
  const email = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");
  const user = userEvent.setup();
  await user.click(name);
  await user.keyboard("ujwal");
  await user.click(email);
  await user.keyboard("ujwaldanta@gmail.com");
  await user.click(button);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "ujwal",
    email: "ujwaldanta@gmail.com",
  });
});
