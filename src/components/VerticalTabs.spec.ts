import VerticalTabs from "./VerticalTabs.svelte";
import { render, screen, fireEvent } from '@testing-library/svelte';

describe("VerticalTabs Component", () => {

    test("should render the component", () => {
        render(VerticalTabs);
        expect(screen.getByTestId('heading1')).toBeTruthy()
    });

    test("should render second tab on click", async () => {
        render(VerticalTabs);

        await fireEvent.click(screen.getByTestId('tab2'));
        expect(screen.getByTestId('heading2')).toBeTruthy()
    });

})
