import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

describe('App Component', () => {
  test('should render the header with the current date and time including "now"', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toContain('Now is');
  });

  test('should include the ExampleComponent', () => {
    render(<App />);
    expect(screen.getByText('Example Component')).toBeInTheDocument(); // Assuming ExampleComponent renders this text
  });

  test('should include the "Edit src/App.js..." text', () => {
    render(<App />);
    expect(screen.getByText(/Edit src\/App\.js/i)).toBeInTheDocument();
  });
});


//   it('should include "Now" in the header instead of a time', () => {
//     expect(wrapper.find('header').text()).to.not.include(moment().format('MMMM Do YYYY'))
//     expect(wrapper.find('header').text()).to.include('Now')
//   });

//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });
