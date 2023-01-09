// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the featured items section
  var featuredSection = document.querySelector('#featured');

  // Get the category links
  var categoryLinks = document.querySelectorAll('ul a');

  // Add an event listener to each category link
  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var categoryId = this.getAttribute('href');
      var category = document.querySelector(categoryId);
      featuredSection.style.display = 'none';
      category.style.display = 'flex';
    });
  });

  // Add an event listener to the "Featured Items" link
  var featuredLink = document.querySelector('#featured a');
  featuredLink.addEventListener('click', function(event) {
    event.preventDefault();
    featuredSection.style.display = 'flex';
    categoryLinks.forEach(function(link) {
      var categoryId = link.getAttribute('href');
      var category = document.querySelector(categoryId);
      category.style.display = 'none';
    });
  });
});
