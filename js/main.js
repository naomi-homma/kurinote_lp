'use strict';

{
    let show = document.getElementById('show');
    let hide = document.getElementById('hide');

    show.addEventListener('click', () => {
      document.body.className = 'menu-open';
    });

    hide.addEventListener('click', () => {
      document.body.className = '';
    });
}
