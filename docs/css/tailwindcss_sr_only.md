# sr-only

`sr-only` 是一个常用的 CSS 类名，主要用于提高网页的可访问性（accessibility）。

它的全称是 "screen reader only"，意思是"仅供屏幕阅读器使用"。

这个类的主要作用如下：
- **隐藏视觉元素**：使用 `sr-only` 类的元素在视觉上是不可见的，但仍然存在于 DOM 中。
- **保留语义信息**：虽然视觉上不可见，但这些元素的内容仍然可以被屏幕阅读器读取，从而为使用辅助技术的用户提供重要信息。
- **提供上下文**：可以用来为某些视觉元素添加额外的描述性文本，这些文本对视力正常的用户来说可能是多余的，但对使用屏幕阅读器的用户却很有帮助。
- **改善导航**：可以用来为导航元素添加更详细的描述，帮助使用屏幕阅读器的用户更好地理解页面结构。

典型的 `sr-only` CSS 实现可能如下：

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

使用示例

```html
<button>
  <span class="icon-delete"></span>
  <span class="sr-only">删除项目</span>
</button>
```
在这个例子中，视力正常的用户会看到一个删除图标，而使用屏幕阅读器的用户会听到"删除项目"这个描述，从而理解按钮的功能。

总之，`sr-only` 是一个重要的辅助工具，用于提高网站的可访问性，确保所有用户，包括那些依赖辅助技术的用户，都能获得良好的用户体验。