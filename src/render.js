
const path = require("path");
const fs = require("fs");

let template = fs.readFileSync(path.resolve(templatesDir, "team-template.html"), "utf8");

const render = employees => {
  const html = [];

  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];

    if (employee.getRole() === "Manager") {
      html.push(renderManager(employee))
    }
    else if (employee.getRole() === "Engineer") {
      html.push(renderEngineer(employee))
    }
    else if (employee.getRole() === "Intern") {
      html.push(renderIntern(employee))
    } else {
      // error 
    }
  }

  // html.push(employees
  //   .filter(employee => employee.getRole() === "Manager")
  //   .map(manager => renderManager(manager))
  // );

  // html.push(employees
  //   .filter(employee => employee.getRole() === "emp")
  //   .map(engineer => renderEngineer(engineer))
  // );
  // html.push(employees
  //   .filter(employee => employee.getRole() === "Intern")
  //   .map(intern => renderIntern(intern))
  // );

  return html.join(''); //renderMain(html.join(""));

};

const renderManager = manager => {
  replacePlaceholders(template, "manager-name", manager.getName());
  replacePlaceholders(template, "manager-role", manager.getRole());
  replacePlaceholders(template, "manager-email", manager.getEmail());
  replacePlaceholders(template, "manager-id", manager.getId());
  replacePlaceholders(template, "manager-officeNumber", manager.getOfficeNumber());
};

const renderEngineer = engineer => {
  replacePlaceholders(template, "engineer-name", engineer.getName());
  replacePlaceholders(template, "engineer-role", engineer.getRole());
  replacePlaceholders(template, "engineer-email", engineer.getEmail());
  replacePlaceholders(template, "engineer-id", engineer.getId());
  replacePlaceholders(template, "engineer-github", engineer.getGithub());
};

const renderIntern = intern => {
  replacePlaceholders(template, "intern-name", intern.getName());
  replacePlaceholders(template, "intern-role", intern.getRole());
  replacePlaceholders(template, "intern-email", intern.getEmail());
  replacePlaceholders(template, "intern-id", intern.getId());
  replacePlaceholders(template, "intern-school", intern.getSchool());
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;