
**Element.firstElementChild 和 Node.firstChild 有什么区别?**

`Element.firstElementChild` 和 `Node.firstChild` 之间的区别在于**它们返回的节点类型不同**：

1. `Element.firstElementChild`:
   - 返回的是第一个子元素节点（Element），忽略文本节点、注释节点等。
   - 如果没有子元素，返回 `null`。
2. `Node.firstChild`:
   - 返回的是第一个子节点，可以是元素节点、文本节点、注释节点等。
   - 如果没有子节点，返回 `null`。
   
总结来说，`firstElementChild` 专注于子元素，而 `firstChild` 会返回任何类型的子节点。