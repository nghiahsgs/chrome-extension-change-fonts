function changeFont(font) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `* { font-family: ${font}, sans-serif !important; }`;
    document.head.appendChild(style);
    console.log("Font chữ đã được thay đổi thành", font);
  }
  
  // Load and apply saved font
  chrome.storage.sync.get('selectedFont', function(data) {
    if (data.selectedFont) {
      changeFont(data.selectedFont);
    } else {
      changeFont('Roboto'); // Default font
    }
  });
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.font) {
      changeFont(request.font);
    }
  });
  
  