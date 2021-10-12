class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag = "ul") {
    this.parentElement = parentElement;
    this.parentElement.append(this.element);

    this.element = document.createElement(htmlTag);
    this.element.className = className;
  }
}

export default Component;
