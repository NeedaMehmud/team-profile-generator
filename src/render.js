
const path = require("path");
const fs = require("fs");

const teamtemplate = path.resolve(__dirname, "team-template.html");

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
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

// const renderMain = html => {
//   const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
//   return replacePlaceholders(template, "team", html);
// };

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;