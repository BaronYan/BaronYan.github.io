<style>
.card{
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-0{
    animation: 3s infinite alternate slide-a45;
}

.card-1{
    animation: 3s infinite alternate slide-x45;
}
.card-2{
    animation: 3s infinite alternate slide-y45;
}
@keyframes slide-x45 {
    from {
    transform: translateX(0);
  }

  to {
    transform: translateX(45px);
  }
}

@keyframes slide-y45 {
    from {
    transform: translateY(0);
  }

  to {
    transform: translateY(45px);
  }
}

@keyframes slide-a45 {


  to {
    transform: translate(45px, 45px);
  }
}
</style>

```css
.card {
    transform: translate(45px,45px);
}
```

<div class="relative h-[150px]">
    <div class="card absolute bg-gray-100 text-white rounded">card</div>
    <div class="card absolute card-0 bg-blue-500 text-white rounded">translate(45px)</div>
</div>

```css
.card {
    transform: translateX(45px);
}
```

<div class="relative h-[150px]">
    <div class="card absolute bg-gray-100 text-white rounded">card</div>
    <div class="card absolute card-1 bg-blue-500 text-white rounded">translateX(45px)</div>
</div>

```css
.card {
    transform: translateY(45px);
}
```

<div class="relative h-[150px]">
    <div class="card absolute bg-gray-100 text-white rounded">card</div>
    <div class="card absolute card-2 bg-blue-500 text-white rounded">translateY(45px)</div>
</div>