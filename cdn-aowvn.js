/*!
 * pace.js v1.2.4
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
 document.querySelectorAll('img').forEach(function(img){
    img.src = img.src.replace(/(http|https):\/\//,'https://cdn.statically.io/img/'); 
}); 
