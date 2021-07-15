const Intern = require('../lib/Intern');

describe('render intern info', () => {
    it("should set school via constructor", () => {
        const testValue = "University of Minnesota";
        const employee = new Intern("Maya", 1, "test@test.com", testValue);
        expect(employee.school).toBe(testValue);
    });

    it("should have getRole() class return intern", () => {
    });

    it("should get school via getSchool() class", () => {
    });
});