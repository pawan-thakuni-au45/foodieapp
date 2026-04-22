import { render,screen } from "@testing-library/react"
import Contact from "../Contact.js"
import "@testing-library/jest-dom" 

// test("should load contact us component",()=>{
//     render(<Contact/>);

//     const heading=screen.getByRole("heading") //there can be diffrent type of rols like(heading,button,etc,text)
//     expect(heading).toBeInTheDocument()

// })

test("should load 2 header",()=>{
    render(<Contact/>);

    const heading1=screen.getAllByRole("heading") //there can be diffrent type of rols like(heading,button,etc,text)
    expect(heading1.length).toBe(2)

})