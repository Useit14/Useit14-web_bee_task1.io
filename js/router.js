/* eslint-disable require-jsdoc */
// eslint-disable-next-line require-jsdoc
const basePath = 'useit14.github.io';

function locationChangeByLoad(event) {
  event.preventDefault();
  const pageData = getDate();
  setTitle(pageData.title);
  history.pushState({name: pageData.filename}, '', pageData.path);
  sendRequet(pageData.filename).then((data) => loadCode(data));
}

function locationChangeByLink(event, filename) {
  event.preventDefault();
  history.pushState({name: filename}, '', filename);
  setTitle(getTitle(filename));
  sendRequet(basePath + filename).then((data) => loadCode(data));
}

function getDate() {
  const pageData = {};
  if (history.state) {
    pageData.path = history.state['name'];
  } else {
    pageData.path = 'pages/index.html';
  }
  pageData.filename = getFileName(pageData.path);
  pageData.title = getTitle(pageData.filename);
  return pageData;
}

function getFileName(path) {
  const splitPath = path.split('/');
  return splitPath[splitPath.length - 1];
}

function getTitle(filename) {
  const splitFileName = filename.split('.');
  return splitFileName[splitFileName.length - 2].toUpperCase();
}

function setTitle(title) {
  document.title = title;
}

function sendRequet(htmlName) {
  return fetch(htmlName).then((respone) => {
    return respone.text();
  });
}

function loadCode(response) {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = response;
    getGeneralCode(app);
  }
}

function getGeneralCode(app) {
  const container = document.getElementById('content');
  app.innerHTML = container.innerHTML;
}

function back() {
  history.back();
  window.addEventListener('popstate', () => {
    sendRequet(history.state['name']).then((data) => loadCode(data));
  });
}
