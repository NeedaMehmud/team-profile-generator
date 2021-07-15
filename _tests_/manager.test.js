const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('render manager info', () => {
    it("should set office number via constructor argument", () => {
        const testValue = 1;
        const employee = new Manager("Sumaya", 1, "test@test.com", testValue);
        expect(employee.officeNumber).toBe(testValue);
    });

    it('should return "Manager" via getRole()', () => {
        const testValue = "Manager";
        const employee = new Manager("Sumaya", 1, "test@test.com", 200);
        expect(employee.getRole()).toBe(testValue);
    });

    it("should get office number via getOffice()", () => {
        const testValue = 200;
        const employee = new Manager("Sumaya", 1, "test@test.com", testValue);
        expect(employee.getOfficeNumber()).toBe(testValue);
    });
});