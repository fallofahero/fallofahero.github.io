window.onscroll = function() {shrinkLogo()};

function shrinkLogo() {
 var Logo=document.getElementById("Logo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height="100px";Logo.style.width="100px";
  } else {
    Logo.style.height="200px";Logo.style.width="200px";
  }
}

