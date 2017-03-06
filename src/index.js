const fs = require('fs');
const path = require('path');

function createProject(projectName) {
  return fs.mkdir(projectName, (err) => {
    if (err) return 'Something went wrong..';

    return readTemplates(projectName);
  });
}

function readTemplates(projectName) {
  return fs.readdir(`/${__dirname}/templates`, (err, files) => {
    return files.map((file) => {
      createFile(file, projectName);
    });
  });
}

function createFile(fileName, projectName) {
  const filePath = getFilePath(fileName, projectName);
  const fileTemplate = getTemplate(fileName);

  return fs.writeFileSync(filePath, fileTemplate);
}

function getTemplate(fileName) {
  return fs.readFileSync(path.normalize([
    __dirname,
    `/templates/${fileName}`,
  ].join('/'))).toString();
}

function getFilePath(fileName, projectName) {
  return [
    getFileDest(projectName), [
      fileName,
    ],
  ].join('/');
}

function getFileDest(projectName) {
  const filePath = [
    process.cwd(),
    projectName,
  ].join('/');

  return path.normalize(filePath);
}

function replace(string, find, fileName) {
  return string.split(find).join(fileName);
}

module.exports = {
  createProject,
};
