const Engineer = require("../lib/Engineer")

const mockEngineer = new Engineer(
    "Marcus",
    1234,
    "marcus@gmail.com",
    "marcusgithub",
    "Engineer"
)
console.log(mockEngineer)

describe("Engineer", () =>{
it("generates a name string", ()=>{
    expect(mockEngineer.name).toBe("Marcus")
})
it("expects id to be a number",()=>{
    expect(mockEngineer.id).toEqual(expect.any(Number))
})
it("generates email",() => {
    expect(mockEngineer.email).toBe("marcus@gmail.com")
})
it("generates Github",()=>{
    expect(mockEngineer.getGithub()).toBe("marcusgithub")
})
it("gets the role",() => {
    expect(mockEngineer.getRole()).toBe("Engineer")
})
})
