<template><div><p><a href="https://www.youtube.com/watch?v=ezP4kbOvs_E" target="_blank" rel="noopener noreferrer">Learn CSS Border Animations in 6 Minutes</a></p>
<div class="container">
    <div class="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
</div></div></template>



<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 1000;
}
.card{
    margin: 0 auto;
    padding: 2em;
    width: 300px;
    background-color: #1c1f2b;
    color: white;
    text-align: center;
    border-radius: 10px;
    position: relative;
    box-sizing: content-box;
}

.card::after{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    background-image: conic-gradient(red,blue);
    z-index: -1;
    padding: 20px;
    
    border-radius: 10px;
    border: 10px solid red;
}
</style>