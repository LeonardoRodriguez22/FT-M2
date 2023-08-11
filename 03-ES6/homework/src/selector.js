var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  for (let i = 0; i < startEl.children.length; i++) {
    let aux = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...aux]
    
  }
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector.includes("#")) return "id";
  if(selector[0]===".") return "class";
  if(selector.split(".").length > 1) return "tag.class";
  return "tag"


};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (elemento) => `#${elemento.id}` === selector;

  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      let classes = elemento.classList;
      for (let i = 0; i < classes.length; i++) {
        if(`.${classes[i]}` === selector)return true
      } 
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = (elemento) => {
      let [t, c] = selector.split(".");
      return matchFunctionMaker(t)(elemento) && matchFunctionMaker(`.${c}`)(elemento)
    }
    
  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName.toLowerCase() === selector
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
