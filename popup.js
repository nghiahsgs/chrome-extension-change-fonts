document.addEventListener('DOMContentLoaded', function() {
    var fontSelect = document.getElementById('fontSelect');
    var applyButton = document.getElementById('applyButton');
  
    // Load saved font
    chrome.storage.sync.get('selectedFont', function(data) {
      if (data.selectedFont) {
        fontSelect.value = data.selectedFont;
      }
    });
  
    applyButton.addEventListener('click', function() {
      var selectedFont = fontSelect.value;
      chrome.storage.sync.set({selectedFont: selectedFont}, function() {
        console.log('Font saved:', selectedFont);
      });
  
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {font: selectedFont});
      });
    });
  });
  