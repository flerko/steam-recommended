(function() {
  var noCardsLeft = !!document.getElementsByClassName('discover_queue_empty')[0];
  var intervalId;

  if(!noCardsLeft) {
    intervalId = setInterval(submitRecommendations, 100);
  }

  function submitRecommendations() {
    var form = document.getElementById('next_in_queue_form');
    var button = document.getElementById('refresh_queue_btn');

    if(form) {
      form.submit();
      clearInterval(intervalId);
    }

    if(button) {
      button.click();
      clearInterval(intervalId);
    }
  }
})();
