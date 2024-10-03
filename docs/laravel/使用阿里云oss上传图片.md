

要在您的 Laravel 11 + Inertia.js + Vue 3 项目中配置使用阿里云 OSS 上传图片，您需要按照以下步骤进行：

## 1. 安装阿里云 OSS SDK
首先，通过 Composer 安装阿里云 OSS SDK：https://github.com/aliyun/aliyun-oss-php-sdk
```bash
composer require aliyuncs/oss-sdk-php
```
##  2. 配置阿里云 OSS
在 `config/filesystems.php` 中配置阿里云 OSS 信息：
```php
<?php

return [
    'driver' => 'oss',
    'endpoint' => env('OSS_ENDPOINT'),
    'access_key_id' => env('OSS_ACCESS_KEY_ID'),
    'access_key_secret' => env('OSS_ACCESS_KEY_SECRET'),
    'bucket' => env('OSS_BUCKET'),
    'root' => env('OSS_ROOT'),
]
```

## 3. 创建 OssService
创建一个新的服务类来处理 OSS 上传：

```php
<?php

namespace App\Services;

use OSS\OssClient;
use OSS\Core\OssException;

class OssService
{
    protected $ossClient;
    protected $bucket;

    public function __construct()
    {
        $this->bucket = env('ALIYUN_OSS_BUCKET');
        try {
            $this->ossClient = new OssClient(
                env('ALIYUN_OSS_ACCESS_KEY_ID'),
                env('ALIYUN_OSS_ACCESS_KEY_SECRET'),
                env('ALIYUN_OSS_ENDPOINT')
            );
        } catch (OssException $e) {
            throw new \Exception("创建OssClient实例失败: " . $e->getMessage());
        }
    }

    public function uploadFile($filePath, $objectName)
    {
        try {
            $result = $this->ossClient->uploadFile($this->bucket, $objectName, $filePath);
            return $result['info']['url'];
        } catch (OssException $e) {
            throw new \Exception("文件上传失败: " . $e->getMessage());
        }
    }
}
```
## 4. 创建上传控制器

创建一个控制器来处理文件上传：
```php
<?php

namespace App\Http\Controllers;

use App\Services\OssService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    protected $ossService;

    public function __construct(OssService $ossService)
    {
        $this->ossService = $ossService;
    }

    public function upload(Request $request)
    {
        $file = $request->file('image');
        
        if (!$file) {
            return response()->json(['error' => '没有文件上传'], 400);
        }

        try {
            if (env('ALIYUN_OSS_ACCESS_KEY_ID') && env('ALIYUN_OSS_ACCESS_KEY_SECRET')) {
                // 使用阿里云 OSS
                $objectName = 'uploads/' . uniqid() . '.' . $file->getClientOriginalExtension();
                $url = $this->ossService->uploadFile($file->getPathname(), $objectName);
            } else {
                // 使用本地存储
                $path = $file->store('public/uploads');
                $url = Storage::url($path);
            }

            return response()->json(['url' => $url]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
```
## 5. 添加路由
```php
use App\Http\Controllers\UploadController;

Route::post('/upload', [UploadController::class, 'upload'])->name('upload');
```

## 6. 前端实现
在 Vue 组件中，您可以使用 axios 或 fetch 来实现文件上传：
```vue
<template>
  <div>
    <input type="file" @change="uploadImage" accept="image/*" />
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded image" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const imageUrl = ref('');

const uploadImage = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    imageUrl.value = response.data.url;
  } catch (error) {
    console.error('上传失败:', error);
  }
};
</script>
```
这样，您就完成了阿里云 OSS 上传图片的配置。系统会首先检查是否配置了阿里云 OSS 的密钥，如果配置了就使用 OSS 上传，否则会使用本地存储。

请确保您的阿里云 OSS 配置正确，并且 Bucket 的访问权限设置适当。同时，记得在生产环境中正确设置 CORS（跨域资源共享）以允许从您的域名访问 OSS 资源。