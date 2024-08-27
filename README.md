# chrome-extension-change-fonts
chrome extension change fonts

```
javascript:var style=document.createElement("style");style.type="text/css",style.innerHTML="\n* {\n    font-family: Roboto, sans-serif !important;\n}\n",document.getElementsByTagName("head")[0].appendChild(style),console.log("Font chữ đã được thay đổi");
```