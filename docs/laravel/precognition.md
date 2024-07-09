



## Precognition

[Precognition](https://laravel.com/docs/11.x/precognition) 为用户提供实时验证体验，而无需在前端 Vue 应用程序中重复验证规则。

### 使用 Vue

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
  3. 现在可以使用 Precognition 的`useForm`功能创建表单对象
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
### 使用 Vue 和 Inertia

将 Vue 与 Inertia 结合使用时，需要安装与 Inertia 兼容的 Precognition 库：`yarn add laravel-precognition-inertia`。


