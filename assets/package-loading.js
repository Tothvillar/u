"use strict";
(function (window, document) {
  function removeLoading() {
    var el = document.getElementById("mtg-package-loading");
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  window.packageLoading = {
    init: function () {},
    addLoading: function () {},
    removeLoading: removeLoading
  };

  document.addEventListener("PLAYABLE:gameStart", removeLoading, false);
})(window, document);
