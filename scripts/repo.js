(function(module) {
  var repos = {};

  repos.all = [];

  // TODO-DONE: Refactor this ajax call into a get request to the proxy end point provided by server.js.
  repos.requestRepos = function(callback) {
    $.get('/github/users/ksgifford/repos?per_page=100&sort=updated')
      .done(function(data, message, xhr) {
        repos.all = data;
      })
      .done(callback);
    };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
