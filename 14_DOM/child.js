// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
//-------
// For Cases of Wrong node Type , return "Wrong Node Type" String
// For Cases of Incorrect Index, return "Wrong Index" String
// For Correct Cases, return the "nodeName" property of that node

function showChild(node, index) {
  if (node.nodeType !== document.ELEMENT_NODE) {
    console.error("Wrong Node Type");
  }

  if (index >= node.children?.length
    || index < 0) {
    console.error("Wrong Index")
  }

  return node.children[index].nodeName;
};