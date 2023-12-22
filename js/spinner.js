document.addEventListener('DOMContentLoaded', function () {    
    const spinner = document.querySelector('.spinner-container');
  
    // Détecte les changements de status
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
  
    // Vérifiez l'état de la connexion au chargement de la page
    updateConnectionStatus();
  
    function updateConnectionStatus() {
      //check le status de la connexion au site (en lige/hors ligne)
      if (navigator.onLine) {
        showSpinner();
        setTimeout(hideSpinner, 3000);
        setTimeout(redirectToHomePage, 3000); 
      } else {
        hideSpinner();        
      }
    }
  
    function showSpinner() {
      // Affiche le spinner
      spinner.style.display = 'block';
    }
  
    function hideSpinner() {
      //Cache le spinner une fois la connexion réussie
      spinner.style.display = 'none';
    }

    function redirectToHomePage() {
        // Redirige vers la page d'accueil
        window.location.href = '../html/accueil.html';
      }
  });
  