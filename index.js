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
  let parrent = document.getElementsByClassName("grand-node")
  let searchQue = [parrent]
  
}