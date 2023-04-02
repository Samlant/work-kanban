import Column from "./Column.js";

export default class Kanban {
  constructor(root) {
    this.root = root;

    Kanban.columns().forEach((column) => {
      const columnView = new Column(column.id, column.title);
      this.root.appendChild(columnView.elements.root);
    });
  }

  static columns() {
    return [
      {
        id: 1,
        title: "Submit!",
      },
      {
        id: 2,
        title: "Pending UW",
      },
      {
        id: 3,
        title: "Emailed QTs",
      },
      {
        id: 4,
        title: "Called Client",
      },
      {
        id: 5,
        title: "Binding",
      },
      {
        id: 6,
        title: "Bound",
      },
    ];
  }
}
