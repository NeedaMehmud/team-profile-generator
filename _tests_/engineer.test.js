const Engineer = require('../lib/Engineer');

    describe('Engineer Info', () => {
    it("should set GitHUb account via constructor", () => {
        const testValue = "githubUser";
        const employee = new Engineer("Maria", 1, "test@test.com", testValue);
        expect(employee.github).toBe(testValue);
    });

    it("should have getRole() return engineer", () => {
        const testValue = "Engineer";
        const engineer = new Engineer("Mari", 1, "test@test.com", "GitHubUser");
        expect(engineer.getRole()).toBe(testValue);
    });

    it("should get GitHub username via getGithub() class", () => {
        const testValue = "githubUser";
        const employee = new Engineer("Maria", 1, "test@test.com", testValue);
        expect(employee.getGithub()).toBe(testValue);
    });
});

