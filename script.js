const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Toggle sidebar on button click
toggleButton.addEventListener('click', () => {
  const isCollapsed = sidebar.classList.toggle('collapsed');
  mainContent.classList.toggle('expanded');

  // Change arrow direction
  toggleButton.innerHTML = isCollapsed ? '&rsaquo;' : '&lsaquo;';
});

// Auto-collapse on small screens
function handleResize() {
  if (window.innerWidth < 768) {
    sidebar.classList.add('collapsed');
    mainContent.classList.add('expanded');
    toggleButton.innerHTML = '&rsaquo;';
  } else {
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('expanded');
    toggleButton.innerHTML = '&lsaquo;';
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
