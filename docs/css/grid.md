
[grid](https://www.youtube.com/shorts/vPL0vXeGIv4)

[A Complete Guide to CSS Grid CSS 网格完全指南](https://css-tricks.com/snippets/css/complete-guide-grid/)

[CSS Grid 网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

[网格布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)


[Grid 基本用法](https://medium.com/enjoy-life-enjoy-coding/css-%E6%89%80%E4%BB%A5%E6%88%91%E8%AA%AA%E9%82%A3%E5%80%8B%E7%89%88%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A5%BD%E5%88%87%E4%B8%80%E9%BB%9E-grid-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-cd763091cf70)

# CSS 网格完整指南

## CSS 网格简介

网格布局是一种基于网格的二维布局系统。

- 首先，必须使用 `display: grid` 将容器元素定义为网格，
- 使用 `grid-template-columns` 和 `grid-template-rows` 设置列和行大小，
- 然后使用 `grid-column` 和 `grid-row` 将其子元素放入网格中。 
- 与弹性框类似，网格项的源顺序无关紧要。您的 CSS 可以按任何顺序放置它们，这使得使用媒体查询重新排列网格变得非常容易。

想象一下，定义整个页面的布局，然后完全重新排列它以适应不同的屏幕宽度，而这一切只需要几行 CSS。 网格是有史以来最强大的 CSS 模块之一。

## 重要术语
- 网格容器  
    所应用 `display: grid` 的元素。它是所有网格项的直接父级。
- 网格线  
    构成网格结构的分隔线。它们可以是垂直的（“列网格线”），也可以是水平的（“行网格线”），位于行或列的两侧。
- 网格轨道  
    两条相邻网格线之间的空间。您可以将它们视为网格的列或行。
- 网格区域  
    四条网格线包围的总空间。网格区域可以由任意数量的网格单元组成。
- 网格项  
    网格容器的子元素（即直接后代）
- 网格单元  
    相邻两行网格线和相邻两列网格线之间的空间。它是网格的一个“单位”。

**网格线**
![网格线](../images/20240805001.svg)
**网格轨道**
![网格轨道](../images/20240805002.svg)
**网格区域**
![网格区域](../images/20240805003.svg)
**网格单元**
![网格单元](../images/20240805004.svg)

### （网格容器）的属性
- display
- grid-template-columns
- grid-template-rows
- grid-template-areas
- grid-template
- grid-column-gap
- grid-row-gap
- grid-gap
- justify-items
- align-items
- place-items
- justify-content
- align-content
- place-content
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
- grid
### （网格项）的属性
- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-column
- grid-row
- grid-area
- justify-self
- align-self
- place-self
网格属性
特殊单位和职能
流体柱片段
动画片