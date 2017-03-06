const fs = require('fs');
const path = require('path');

function createProject(projectName) {
  fs.mkdir(projectName, (err) => {
    if (err) return;

    const filePath = getFilePath(projectName);
    const directory = getDir(filePath);
  });
}

function getDir(filePath) {
  return fs.readdir(`/${__dirname}/templates`, (err, files) => {
    return files.map((file) => {
      return createFile(file);
    });
  });
}

function createFile(fileName, clientPath) {
  const filePath = getFilePath(fileName, clientPath);
  const fileTemplate = getTemplate(fileName);
  console.log(filePath);
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
  ].join('');

  return path.normalize(filePath);
}

function replace(string, find, fileName) {
  return string.split(find).join(fileName);
}

module.exports = {
  createProject,
};
