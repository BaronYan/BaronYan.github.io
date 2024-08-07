
### box-shadow 属性

CSS 的 `box-shadow` 属性用于给元素添加阴影效果。
你可以通过这个属性指定阴影的 `水平偏移`、`垂直偏移`、`模糊半径`、`扩展半径` 以及 `阴影的颜色`。



#### 基本语法如下：

```css
box-shadow: 
    [horizontal-offset] 
    [vertical-offset] 
    [blur-radius] 
    [spread-radius] 
    [color];
```
**参数说明**
1. `horizontal-offset`（必需）：阴影相对于元素水平偏移的距离。可以是正值（向右）或负值（向左）。 
2. `vertical-offset`（必需）：阴影相对于元素垂直偏移的距离。可以是正值（向下）或负值（向上）。 
3. `blur-radius`（可选）：模糊半径。定义阴影的模糊程度。值越大，阴影越模糊且范围越大。
   - **默认值**：默认值是 `0`，阴影边缘非常清晰，没有任何模糊效果。
   - **正值模糊半径**：阴影边缘变得模糊。值越大，模糊程度越高，看起来越柔和且扩散范围越大。
   - **负值模糊半径**：不允许使用负值，负值将被视为 `0`。
4. `spread-radius`（可选）：扩展半径。定义阴影的大小。正值会使阴影扩大，负值会使阴影缩小。
   - **默认值**：默认值是 `0`，阴影的尺寸与元素边框的尺寸一致，不进行扩展或收缩。
   - **正值扩展**：当扩展半径为正值时，阴影会向外扩展，使阴影比元素边框更大。
   - **负值收缩**：当扩展半径为负值时，阴影会向内收缩，使阴影比元素边框更小。
5. `color`（可选）：阴影的颜色。如果省略，**默认颜色是元素的字体颜色**。通常使用 rgba 定义颜色以添加透明度。

#### 示例

以下是一些使用 `box-shadow` 属性的例子：
```css
.shadow1 {
    box-shadow: 10px 10px; /* 水平偏移 10px，垂直偏移 10px */
}

.shadow2 {
    box-shadow: 10px 10px 5px; /* 添加 5px 模糊 */
}

.shadow3 {
    box-shadow: 10px 10px 5px 3px rgba(0, 0, 0, 0.5); /* 添加扩展和颜色 */
}

.shadow4 {
    box-shadow: -10px -10px 5px 3px rgba(255, 0, 0, 0.5); /* 负的水平和垂直偏移 */
}

.shadow5 {
    box-shadow: 0 0 10px 5px rgba(0, 0, 255, 0.7); /* 模糊和扩展为正值 */
}
```

#### 进阶用法

**内阴影**：可以通过添加 `inset` 关键字来创建内阴影。
```css
box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5);
```
**多重阴影**：可以通过逗号分隔的多个阴影值来创建多重阴影效果。
```css
box-shadow: 3px 3px 5px #888, -1px -1px 3px #ccc;
```
### 阴影的本质

在 CSS 中，阴影是一种视觉效果，用于在元素周围生成模糊或明确的颜色区域，以模拟光照效果。阴影可以给网页元素增加深度和立体感，使其看起来更加突出。

阴影是视觉上的一种效果，并不会影响元素的实际尺寸或位置。
它不会影响元素的盒模型（Box Model）。
盒模型包括元素的内容区域、内边距（padding）、边框（border）和外边距（margin），而阴影是绘制在元素的盒子之外的效果，不会改变盒模型中的尺寸和布局计算。

#### 盒模型与阴影

盒模型的组成如下：

- 内容区域（content）：元素的实际内容。
- 内边距（padding）：内容区域和边框之间的空间。
- 边框（border）：包围内边距和内容的边框。
- 外边距（margin）：元素与其他元素之间的外部空间。
- 当你为元素应用阴影时，阴影会在**边框**的外部绘制，不会影响上述任何一个盒模型的组成部分。

```css
.box {
    width: 100px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 20px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
}
```
在这个例子中：

- 元素的内容区域是 `100px * 100px`。
- 内边距：`20px`（上下左右各`20px`）
- 边框：`5px`（上下左右各`5px`）
- 总尺寸：`150px * 150px`（包括内容区域、内边距和边框）
- 阴影 `10px 10px 5px rgba(0, 0, 0, 0.5)` 被绘制在元素的边框外部，向右和向下偏移 `10px`，并有 `5px` 的模糊效果。阴影并不改变上述任何尺寸，它仅仅是一个视觉效果。

<style>
  .box {
    width: 100px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 20px;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
  }
</style>
<div class="box">Box with Shadow</div>

阴影是一种视觉效果，不会影响 CSS 盒模型的尺寸和布局。它被绘制在元素的边框之外，仅影响元素的外观而不影响其实际尺寸和位置。