export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y acccéder 
["discconnected"] -> Réserver aux utilisateurs déconnectés 
["client"] -> Réserver aux utilisateurs avec le role client 
["admin"] -> Réserver aux utilisateurs avec le role admin  
["admin", "client"] -> Réserver aux utilisateurs avec le role client OU admin 
*/