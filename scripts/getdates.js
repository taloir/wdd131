const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const mod = new Date(document.lastModified);

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last modified ${mod.getMonth()}/${mod.getDate()}/${mod.getFullYear()}`;