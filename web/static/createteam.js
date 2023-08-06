document.addEventListener('DOMContentLoaded', function() {
  function myteam() {
    const name = document.getElementById('team_name').value;
    if (name.trim() === '') {
      alert('Please enter your Team name');
    } else {
      const modalBox = document.getElementById('modalBox');
      modalBox.style.display = 'block';
    }
  }

  function closeModal() {
    const modalBox = document.getElementById('modalBox');
    modalBox.style.display = 'none';
  }

});
