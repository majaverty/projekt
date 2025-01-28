let countries = [];

function preload() {
  loadJSON(, data => {
    countries = data;
  });
}
