function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(traget, nested){
  return document.getElementById(nested).querySelector(target);
}

function increaseRankby(n) {
  rankedLists = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < rankedLists.length; i++){
    let list = rankedLists[i].getElementsByTagName("li");
    for (let z = 0; z < list.length; z++){
      list[z].innerText  = parseInt(list[z].innerText) + n
    }
  }
}

function deepestChild(){
   var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}