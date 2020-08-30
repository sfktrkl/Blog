export const getPosts = () => {

  var posts = [];

  //requiring path and fs modules
  const path = require('path');
  const fs = require('fs');
  //joining path of directory 
  var directoryPath = "./src/posts";
  fs.readdir(directoryPath, function (err, files) {
    files.forEach(function (file) {
      fs.stat(directoryPath + "/" + file, function(err, stats){
          var mtime = stats.mtime;
          var jsonData = {};
          var title = String(file);
          jsonData["title"] = title.substring(0, title.length - 3);
          jsonData["slug"] = jsonData["title"];
          jsonData["text"] = require("./posts/" + file).default;
          jsonData["date"] = mtime.toLocaleDateString();
          posts.push(jsonData);
      });
    });
  });

  return posts;
};