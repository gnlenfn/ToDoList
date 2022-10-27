const images = [
  "https://images.unsplash.com/photo-1666809489316-76eb1f11cb4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
  "https://images.unsplash.com/photo-1542370285-b8eb8317691c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80",
  "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
];

let i = Math.floor(Math.random() * images.length);
const chosenImage = images[i];

document.body.style.backgroundImage = `url(${chosenImage})`;
