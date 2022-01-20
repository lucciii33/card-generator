/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  let ramdonSuit = Math.floor(Math.random() * 4);

  let ramdonNum = Math.floor(Math.random() * 12);

  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suits = ["&#9829", "&#9830", "&#9824", "&#9827"];

  var card = document.querySelector(".card");

  var suit = (document.querySelector(".icon").innerHTML = suits[ramdonSuit]);
  var num = (document.querySelector(".num").innerHTML = numbers[ramdonNum]);
  var suitUpSide = (document.querySelector(".iconreflex").innerHTML =
    suits[ramdonSuit]);

  if (suit == "&#9829" || suit == "&#9827") {
    var suit = (document.querySelector(".icon").style.color = "red");
    var num = (document.querySelector(".num").style.color = "red");
    var suitUpSide = (document.querySelector(".iconreflex").style.color =
      "red");
  }
};
