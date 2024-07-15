
<style>
.container {
    background-color:#f6f6f6;
}
.element:hover{
    box-shadow: 12px 12px 12px rgba(0 0 0 /0.1),
        -10px -10px 10px white;
}

.element-2:hover{
    box-shadow: 12px 12px 12px rgba(0 0 0 /0.1),
        -10px -10px 10px white inset;
}
</style>


<div class="container flex flex-col justify-center items-center p-2 gap-2" style="width: 300px; margin:20px auto;">
    <div class="element rounded-md flex justify-center items-center" style="width: 100px;height: 100px;">hover me</div>
    <div class="element-2 rounded-md flex justify-center items-center" style="width: 100px;height: 100px;">hover me</div>
</div>