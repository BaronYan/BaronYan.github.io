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

**新增一个管理员，使其是第一个查找到的公司的管理员**

```php
<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Manager;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::first();

        if ($company) {
            Manager::firstOrCreate(
                ['email' => 'admin@qkcargo.com'],
                [
                    'company_id' => $company->id,
                    'name' => 'admin',
                    'display_name' => '系统管理员',
                    'email' => 'admin@qkcargo.com',
                    'phone' => '13800138000',
                    'is_enabled' => true,
                    'password' => Hash::make('password123'),
                ]
            );
        } else {
            $this->command->error('没有找到公司记录，请先运行 CompanySeeder');
        }
    }
}
```
这个 seeder 做了以下几件事：
1. 首先获取数据库中的第一个公司记录。
2. 如果找到公司，则创建一个新的管理员记录：
    - 使用 `firstOrCreate` 方法来避免创建重复的管理员。
    - 使用 email 作为唯一标识符来检查是否已存在该管理员。
    - 设置管理员的各项属性，包括关联的公司 ID。
    - 使用 `Hash::make()` 来安全地哈希密码。
3. 如果没有找到公司，输出一个错误消息。

**注意事项：**  
1. 确保 Manager 模型中的 `$fillable` 或 `$guarded` 属性正确设置，允许批量赋值这些字段。
2. 您可能需要根据实际的 Manager 模型结构调整字段名称。
3. 记得在 `DatabaseSeeder` 类中调用这个 seeder，并确保它在 `CompanySeeder` 之后运行
4. 密码 `'password123'` 只是一个示例，在实际应用中应使用更强的密码。
5. 如果需要创建多个管理员，可以在这个方法中添加更多的 `Manager::firstOrCreate()` 调用。

完成后，您可以运行以下命令来执行这个 seeder：
```bash
php artisan db:seed --class=ManagerSeeder
# 或者运行所有的 seeders：
php artisan db:seed
```