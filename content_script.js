document.getElementById("FollowAll").addEventListener("click", function(){
  chrome.tabs.executeScript({file: "RuhiFollowAll.js"});
});

document.getElementById("UnfollowAll").addEventListener("click", function(){
  chrome.tabs.executeScript({file: "RuhiUnfollowAll.js"});
});

document.getElementById("RemoveAll").addEventListener("click", function(){
  chrome.tabs.executeScript({file: "RuhiRemoveAll.js"});
});

/*document.getElementById("About").addEventListener("click", function(){
  chrome.tabs.executeScript({file:"About.js"});
});*/

