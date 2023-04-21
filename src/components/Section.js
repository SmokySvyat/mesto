  export default class Section {
    constructor(data, containerSelector) {
        // this._items = data.items;
        this._renderer = data.renderer;
        this._container = document.querySelector(containerSelector);
    };

    render() {
      // console.log(`Section 9 ${this._items}`)
      this._items.forEach(item => {
        // console.log(`Section 11 ${item}`)
        this._renderer(item);
      });
    };

    addItem(element) {
      this._container.prepend(element);
    };

    addItemReverse(element) {
      this._container.append(element);
    }
  }