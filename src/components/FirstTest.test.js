import { render, screen } from "@testing-library/react"
import FirstTest from "./FirstTest"

test('this is for first test childresn', () => {
    render(<FirstTest />);
    const renderText = screen.getByText('this is first test');
    expect(renderText).toBeInTheDocument();
})
test('second test is for element capture', () => {
    render(<FirstTest />);
    const renderText = screen.getByLabelText('Username');
    expect(renderText).toBeInTheDocument();
})
test('Testing by role', () => {
    render(<FirstTest />);
    const getRoleName = screen.getByRole('button');
    expect(getRoleName).toBeInTheDocument();
})
test('Testing with placeholder', () => {
    render(<FirstTest />);
    const getPlaceholder = screen.getByPlaceholderText('Enter your username');
    expect(getPlaceholder).toBeInTheDocument();
})
test('Testin with alt text', () => {
    render(<FirstTest />);
    const altText = screen.getByAltText('Logo');
    expect(altText).toBeInTheDocument();
})
describe('grouping test cases', () => {
    test('testing id findout', () => {
        render(<FirstTest />);
        const getDivId = screen.getByTestId('first_div');
        expect(getDivId).toBeInTheDocument();
    })
})