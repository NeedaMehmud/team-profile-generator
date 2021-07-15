
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

  return html.join(''); //renderMain(html.join(""));

};


const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;