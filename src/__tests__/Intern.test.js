const Intern = require("../lib/Intern")

const mockIntern = new Intern(
    "Adrian",
    3456,
    "Adrian@gmail.com",
    "Bath University",
    "Intern"
)
console.log(mockIntern)
describe("Intern",() => {
it("sets the name, id & email of the Intern", ()=>{
    expect(mockIntern.name).toBe("Adrian")
    expect(mockIntern.id).toBe(3456)
    expect(mockIntern.email).toBe("Adrian@gmail.com")
})
it("gets the role",()=>{
    expect(mockIntern.getRole()).toBe("Intern")
})
})