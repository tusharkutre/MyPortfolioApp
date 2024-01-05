 // JavaScript code for mobile screen
 var selectElement2 = document.getElementById('themes');
 var themeSwitcher = document.getElementById('themeSwitcher');

 function applyTheme(theme) {
   // Add logic to apply the selected theme
   // For example, you can add or remove a CSS class to change the theme
   document.body.className = theme;
 }

 // Event listener for theme selection change
 selectElement2.addEventListener('change', function() {
   var selectedTheme = selectElement2.value;
   applyTheme(selectedTheme);
 });

 // Event listener for theme switcher button
 themeSwitcher.addEventListener('click', function() {
   var currentTheme = document.body.className;
   var newTheme = currentTheme === 'default' ? 'dark' : 'default';
   applyTheme(newTheme);
 });

 // Detect mobile screen and apply initial theme
 if (window.innerWidth <= 425) {
   // Set the initial theme for mobile screens
   applyTheme('dark'); // You can set the default theme here
 }