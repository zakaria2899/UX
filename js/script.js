console.log("Javascript up and running.");

const hideHTML = (input) => {
  document.getElementById(input).style.display = "none";
};
const createForm = () => {
  document.getElementById("formShow").style.display = "flex";
};

document.getElementById("cta").onclick = function () {
  hideHTML("hidden"),
    hideHTML("dontShow"),
    hideHTML("dontDisplay"),
    createForm();
};
