(function () {

  mobileMenu();
  cookiesOff();

  /* ===========================================================================
   * Informacja o cookies
   * ======================================================================== */

  function cookiesOff() {

    // wczytaj button 'zamknij info o cookies'
    var btnCookies = document.getElementById('btn-cookies');

    if (btnCookies) {

      // dodaj listener
      btnCookies.addEventListener('click', function (e) {

        // ustaw nowe cookie
        document.cookie = 'cookies_message=true; expires=Mon, 01 Jan 2035 00:00:00 GMT; path=/';

        // ukryj info o cookies
        document.getElementById('cookies').style.display = 'none';

      });

    }

  }


  /* ===========================================================================
   * Mobilne menu pokaz/ukryj
   * ======================================================================== */

  function mobileMenu() {

    // wczytaj button mobilnego menu
    navbarBtnMenu = document.getElementById('navbar-btn-menu');

    if (navbarBtnMenu) {

      // dodaj listener
      navbarBtnMenu.addEventListener('click', function () {

        // wczytaj kontener z menu
        var nav = document.getElementById('page-nav');

        if (nav.className === 'nav') {

          // pokaz menu
          nav.className += ' on';
          navbarBtnMenu.className += ' active';

        } else {

          // ukryj menu
          nav.className = 'nav';
          navbarBtnMenu.className = 'navbar-btn-menu';

        }

      });

    }

  }

})();