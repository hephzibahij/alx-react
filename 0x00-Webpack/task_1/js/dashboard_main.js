import $ from 'jquery';
import _ from 'lodash';

const updateCounter = _.debounce(() => {
  let count = $('#count').text();
  count = parseInt(count) + 1;
  $('#count').text(`${count} clicks on the button`);
}, 300);

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="start-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('#start-btn').on('click', updateCounter);
});
