import { fireEvent, render } from "@testing-library/svelte";
import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';
import App from "./App.svelte";

provideFluentDesignSystem().register(allComponents);

test("should render", () => {
  const results = render(App, { props: { name: "world" } });

  expect(() => results.getByText("Hello world!")).not.toThrow();
});

test("should pick value", async () => {
  const results = render(App, { props: { name: "world" } });

  const text: any = results.getByRole("textbox");
  await fireEvent.keyPress(text, { target: { value: "A" } });
  await fireEvent.keyPress(text, { target: { value: "S" } });
  await fireEvent.keyPress(text, { target: { value: "D" } });
  expect(text.value).toEqual("ASD");
});
