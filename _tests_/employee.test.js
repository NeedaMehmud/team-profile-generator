const Employee = require('../lib/Employee');

describe('Employee Info', () => {

    it("should set name via constructor arguments", () => {
        const name = "Fatima";
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("should set id via constructor argument", () => {
        const testValue = 10299;
        const employee = new Employee("Test", testValue);
        expect(employee.id).toBe(testValue)
    });

    it("should set email via constructor argument", () => {
        const testValue = "test@test.com";
        const employee = new Employee("Test", 1, testValue);
        expect(employee.email).toBe(testValue);
    });

    it("should get name via getName()", () => {
        const testValue = "Fatima";
        const employee = new Employee(testValue);
        expect(employee.name).toBe(testValue);
    });

    it("should get id via getId()", () => {
        const testValue = 10299;
        const employee = new Employee("Test", testValue);
        expect(employee.id).toBe(testValue)
    });

    it("should get email via getEmail()", () => {
        const testValue = "test@test.com";
        const employee = new Employee("Test", 1, testValue);
        expect(employee.email).toBe(testValue);
    });

    it("should return \"Employee\" via getRole() ", () => {
        const testValue = "Employee";
        const employee = new Employee("Fatima", 1, "test@test.com");
        expect(employee.getRole()).toBe(testValue);
    });

});

