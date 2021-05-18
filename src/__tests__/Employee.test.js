const Employee = require("../lib/Employee")

describe("Employee", () => {
it("generates an instance of the employee class",()=>{
    const employee = new Employee() 
    expect(typeof employee).toBe("object")
})
it("sets the name, id & email of the employee",() => {
    const employee = new Employee("Marcus",2,"marcuslau@gmail.com")
    console.log(employee)
    expect(employee.name).toBe("Marcus")
    expect(employee.id).toBe(2)
    expect(employee.email).toBe("marcuslau@gmail.com")
})
it("gets the role", () => {
    const employee = new Employee("Marcus",2,"marcuslau@gmail.com")
    expect(employee.getRole()).toBe("Employee")
})
})