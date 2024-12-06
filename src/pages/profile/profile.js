import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import Profile from "./content/profile.js";
import FetchProfileTopbar from "../../components/topbar/profile.js";

export async function main() {
  const promises = [
    loadComponent("header.topbar", url.components.topbar + "topbar.html"),
    loadComponent("aside.sidebar", url.components.sidebar + "sidebar.html"),
    loadComponent(
      "main.profile section.content",
      url.pages.profile + "content/profile.html"
    ),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      console.log(url.components.topbar + "topbar.html");
      console.log(url.components.sidebar + "sidebar.html");
      console.log(url.pages.dashboard + "content/content.html");
      Profile();
      FetchProfileTopbar();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
