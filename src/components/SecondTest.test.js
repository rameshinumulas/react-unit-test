import { render, screen } from "@testing-library/react"
import SecondTest from "./SecondTest"

describe('Second test component rendering', () => {
    test('Component reders sucussfully', () => {
        render(<SecondTest />);
        

        // **** getByRole *** query --- use for multiple roles --- name, level(for heading), 
        // hidden, selected, checked, pressed

        const inputEle = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(inputEle).toBeInTheDocument();

        const inputEleTextArea = screen.getByRole('textbox', {
            name: 'Bio'
        });
        expect(inputEleTextArea).toBeInTheDocument();

        const selectEle = screen.getByRole('combobox');
        expect(selectEle).toBeInTheDocument();

        const terms = screen.getByRole('checkbox');
        expect(terms).toBeInTheDocument();

        const submit = screen.getByRole('button');
        expect(submit).toBeInTheDocument();

    })
})