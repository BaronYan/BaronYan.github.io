



# Laravel Precognition 介绍

使用 [Laravel Precognition](https://laravel.com/docs/11.x/precognition) ，可以为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证。

## 使用 Vue

1. 首先，要为路由启用 `HandlePrecognitiveRequests` 中间件。您还应该创建一个表单请求来容纳路由的验证规则：
      ```php
      use App\Http\Requests\StoreUserRequest;
      use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
         
      Route::post('/users', function (StoreUserRequest $request) {
          // ...
      })->middleware([HandlePrecognitiveRequests::class]);
      ```
2. 接下来，您应该为 Vue 安装 `Laravel Precognition` 前端助手
      ```bash
      yarn add laravel-precognition-vue
      ```
3. 现在可以使用 Precognition 的 `useForm` 功能创建表单对象,只需为其提供 
   - HTTP 方法（post）
   - 目标 URL（/users）
   - 和初始表单数据
```vue
 <script setup>
 import { useForm } from 'laravel-precognition-vue';

 const form = useForm('post', '/users', {
     name: '',
     email: '',
 });

 const submit = () => form.submit();
 </script>

 <template>
     <form @submit.prevent="submit">
         <label for="name">Name</label>
         <input
             id="name"
             v-model="form.name"
             @change="form.validate('name')"
         />
         <div v-if="form.invalid('name')">
             {{ form.errors.name }}
         </div>

         <label for="email">Email</label>
         <input
             id="email"
             type="email"
             v-model="form.email"
             @change="form.validate('email')"
         />
         <div v-if="form.invalid('email')">
             {{ form.errors.email }}
         </div>

         <button :disabled="form.processing">
             Create User
         </button>
     </form>
 </template>
```
     
现在，当用户填写表单时，Precognition 将提供由路由表单请求中的验证规则支持的实时验证输出。

当表单的输入发生变化时，将向您的 Laravel 应用程序发送一个去抖动的“预认知”验证请求。您可以通过调用表单的`setValidationTimeout`函数来配置去抖动超时：

```js
form.setValidationTimeout(3000);
```
**当验证请求正在进行时，表单的 `validating` 属性将是 `true`**：

```vue
<div v-if="form.validating">
    Validating...
</div>
```

**验证请求或表单提交期间返回的任何验证错误都将自动填充表单的 `errors` 对象**：

```vue
<div v-if="form.invalid('email')">
    {{ form.errors.email }}
</div>
```

**您可以使用表单的 `hasErrors` 属性来确定表单是否有任何错误**：
```vue
<div v-if="form.hasErrors">
    <!-- ... -->
</div>
```

**您还可以通过将输入的名称分别传递给表单 `valid` 和 `invalid` 函数来确定输入是否通过验证或失败**：

```vue
<span v-if="form.valid('email')">
    ✅
</span>
 
<span v-else-if="form.invalid('email')">
    ❌
</span>
```

表单输入只有在发生变化并且收到验证响应后才会显示为有效或无效。


### 使用 Vue 和 Inertia

将 Vue 与 Inertia 结合使用时，需要安装与 Inertia 兼容的 Precognition 库：`yarn add laravel-precognition-inertia`。


