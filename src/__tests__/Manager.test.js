const Manager = require("../lib/Manager")

const mockManager = new Manager(
    "Stanley",
    5678,
    "Stanley@gmail.com",
    1,
    "Manager"
)
console.log(mockManager)

describe("Manager", ()=>{
    it("sets the name, id & email for Manager",()=>{
        expect(mockManager.name).toBe("Stanley")
        expect(mockManager.id).toBe(5678)
        expect(mockManager.email).toBe("Stanley@gmail.com")
    })
    it("returns office Number", ()=>{
        expect(mockManager.getOfficeNumber()).toBe(1)
    })
    it("gets the role",()=>{
        expect(mockManager.getRole()).toBe("Manager")
    })
})