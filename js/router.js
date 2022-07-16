/* eslint-disable require-jsdoc */
// eslint-disable-next-line require-jsdoc
const pageDate = {
  path: 'pages/index.html',
  title: 'Index',
};

function locationChangeByLoad(event) {
  event.preventDefault();
  getDate();
  setTitle();
  history.pushState({ name: pageDate.filename }, '', pageDate.path);
  sendRequet(pageDate.filename).then((data) => loadCode(data));
}

function locationChangeByLink(_event, filename) {
  _event.preventDefault();
  history.pushState({ name: filename }, '', filename);
  getDate();
  setTitle();
  sendRequet(filename).then((data) => loadCode(data));
}

function getDate() {
  if (history.state) {
    pageDate.path = history.state['name'];
  }
  getFileName();
  title = pageDate.filename;
  title = title.split('.');
  title = title[0].toUpperCase();
  pageDate.title = title;
}

function getFileName() {
  let filename = pageDate.path;
  filename = filename.toString().split('/');
  pageDate.filename = filename[filename.length - 1];
}

function setTitle() {
  document.title = pageDate.title;
}

function sendRequet(htmlName) {
  return fetch(htmlName).then((respone) => {
    return respone.text();
  });
}

function loadCode(response) {
  const app = document.getElementById('app');
  app.innerHTML = response;
}
