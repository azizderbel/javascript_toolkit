var form = document.getElementById('form')
var header = document.getElementsByName('header') // return NodeList an array-like object

var divs = document.getElementsByTagName('div');

// query selector is a method of the Element interface
// The querySelector() method allows you to select the first element that matches one or more CSS selectors.

let element = document.querySelector('*'); // select the first el in the dom
let elements = document.querySelectorAll('*'); // select all elemnt in the DOM

let logo = document.querySelector('#logo'); // id selector
let logo2 = document.querySelector('.logo'); // class selector
let logo3 = document.querySelector('p'); // type selector
let autoplay = document.querySelector('[autoplay]');
