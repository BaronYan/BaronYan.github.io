
CSS 中的 `outline` 和 `outline-offset` 属性用于为元素添加轮廓线，轮廓线绘制在元素边框的外部。它们与边框不同，不会影响元素的布局或尺寸。下面是详细介绍：

### outline 属性

outline 属性用于设置元素的轮廓线。它包含三个子属性：

- `outline-color`: 轮廓线的颜色。
- `outline-style`: 轮廓线的样式（如实线、虚线等）。
- `outline-width`: 轮廓线的宽度。

```css
outline: [outline-width] [outline-style] [outline-color];
```

### outline-offset 属性

`outline-offset` 属性用于设置轮廓线与元素边框之间的距离。正值使轮廓线向外偏移，负值使轮廓线向内偏移。

```css
outline-offset: [value];
```

**outline 和 outline-offset 的区别**
- `outline` 用于定义轮廓线的样式、颜色和宽度。
- `outline-offset` 用于设置轮廓线与元素边框之间的距离。

### 总结
- `outline` 是一个简写属性，用于设置元素的轮廓线，包括颜色、样式和宽度。
- `outline-offset` 用于控制轮廓线与元素边框之间的距离，可以是正值或负值。

这两个属性通常用于强调或突出显示元素，而不会影响元素的尺寸和布局。