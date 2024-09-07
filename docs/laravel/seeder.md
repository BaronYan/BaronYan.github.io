```php

# seeder 基础知识

<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'name' => '广州勤快货运代理有限公司',
            'suffix_domain' => 'qkcargo',
            'email' => 'admin@qkcargo.com',
            'phone' => '020-88888888',
        ]);
    }
}
```

这个 seeder 会创建一条新的公司记录，包含您指定的所有信息。几点说明：
1. 我们使用 `Company::create()` 方法来创建新记录。这假设您的 Company 模型中已经设置了正确的 `$fillable` 或 `$guarded` 属性。
2. 如果 Company 模型有其他必填字段，您需要在这里也提供这些字段的值。
3. 如果您想在每次运行 seeder 时都确保只创建一次这条记录（避免重复），可以使用 `firstOrCreate` 方法：
4. 如果您需要创建多个公司记录，可以在这个方法中添加更多的 `Company::create()` 调用。
5. 记得在 DatabaseSeeder 类中调用这个 seeder：`$this->call([CompanySeeder::class]);`

## 执行单个 seeder

完成后，您可以通过运行以下命令来执行这个 seeder：

```bash
php artisan db:seed --class=CompanySeeder
```

## 运行所有的 seeders
```bash
php artisan db:seed
```