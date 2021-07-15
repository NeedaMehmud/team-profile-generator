
const path = require("path");
const fs = require("fs");

let templatesDir = 'src/team-templates';

const render = employees => {
  const html = [];

  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];

    if (employee.getTitle() === "Manager") {
      html.push(renderManager(employee))
    }
    else if (employee.getTitle() === "Engineer") {
      html.push(renderEngineer(employee))
    }
    else if (employee.getTitle() === "Intern") {
      html.push(renderIntern(employee))
    } else {
      window.prompt('Try us at a later time');
    }
  }
  let renderedHTML = renderHTML(html.join(''))

  return renderedHTML;
};


const renderHTML = team => {
  let template = fs.readFileSync(path.resolve(templatesDir, "team-template.html"), "utf8");
  template = replacePlaceholders(template, "team-cards", team);
  return template;
};


const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "Manager.html"), "utf8");
  template = replacePlaceholders(template, "manager-name", manager.getName());
  template = replacePlaceholders(template, "manager-role", manager.getTitle());
  template = replacePlaceholders(template, "manager-email", manager.getEmail());
  template = replacePlaceholders(template, "manager-id", manager.getId());
  template = replacePlaceholders(template, "manager-officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "Engineer.html"), "utf8");
  template = replacePlaceholders(template, "engineer-name", engineer.getName());
  template = replacePlaceholders(template, "engineer-role", engineer.getTitle());
  template = replacePlaceholders(template, "engineer-email", engineer.getEmail());
  template = replacePlaceholders(template, "engineer-id", engineer.getId());
  template = replacePlaceholders(template, "engineer-github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "Intern.html"), "utf8");
  template = replacePlaceholders(template, "intern-name", intern.getName());
  template = replacePlaceholders(template, "intern-role", intern.getTitle());
  template = replacePlaceholders(template, "intern-email", intern.getEmail());
  template = replacePlaceholders(template, "intern-id", intern.getId());
  template = replacePlaceholders(template, "intern-school", intern.getSchool());
  return template;
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;