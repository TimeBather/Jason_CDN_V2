importScripts("/npm/crypto-js@4.0.0/crypto-js.js","/npm/crypto-js@4.0.0/md5.js");
function calc(key){
   cpb=key;
   cpc=0;
   while(CryptoJS.MD5(cpb+cpc).toString().substr(0,4)!="0000"){
       cpc++;
   }
   return cpc;
}
self.addEventListener('message', function (e) {
   self.postMessage(calc(e.data));
}, false);
