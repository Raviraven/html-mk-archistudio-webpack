import { Modal, Carousel } from "bootstrap";
import "../scss/main.scss";

import "../scss/bootstrap-custom.scss";

console.log("Welcome to the dark side 😈");

let modal = document.querySelector("#modal");
let modalNextControl = document.querySelector("#carousel-control-next");

modal.addEventListener("shown.bs.modal", function () {
  modalNextControl.focus();
});
