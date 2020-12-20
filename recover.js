// document.documentElement.clientWidth || document.body.clientWidth;
// document.documentElement.clientHeight || document.body.clientHeight;

function queryAllById(id) {
  let nodeList = document.getElementsByTagName("*");
  let arr = [];
  for (let i = 0; i < nodeList.length; i++) {
    let item = nodeList[i];
    item.id === id ? arr.push(item) : null;
  }

  return arr;
}

function children(curEle) {
  let nodeList = curEle.childNodes;
  let result = [];
  for (let i = 0; i < nodeList.length; i++) {
    const item = nodeList[i];
    if (item.nodeType === 1) {
      // nodeType === 1 is equal to elementnode
      result.push(item);
    }
  }
  return result;
}

var newP = document.createElement("p");
newP.innerHTML = "pppppp"
newP.style.backgroundColor = 'red';
document.body.appendChild(newP);
// insert p into body as a child of body;

var newA = document.createElement("a");
newA.innerHTML = "aaaaa";
document.body.appendChild(newA);

function urlParser(str) {
  var link = document.createElement('a');
  link.href = str;
  
  var search = link.search.substr(1);
  var hash = link.hash.substr(1);

  var obj = {};
  hash ? obj.HASH = hash : null;
  if (search) {
    search = search.splite('&');
    for (var i = 0; i < search.length; i++) {
      var itemAry = search[i].split('=');
      obj[itemAry[0]] = itemAry[1];
    }
  }
  return obj;
}


