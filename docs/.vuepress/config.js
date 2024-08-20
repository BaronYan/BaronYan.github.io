import {blogPlugin} from '@vuepress/plugin-blog'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import autoprefixer from "autoprefixer";
import tailwindcss from 'tailwindcss'

export default defineUserConfig({
    lang: 'en-US',

    title: 'VuePress',
    description: 'My first VuePress Site',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '知道',
                children:[
                    {
                        text: '基础',
                        link: '/base/',
                    },
                ]
            },
            {
                text: '前端技术',
                children: [
                    {
                        text: 'UI',
                        link: '/UI/',
                    },
                    {
                        text: 'JavaScript',
                        link: '/JavaScript/',
                    },
                    {
                        text: 'CSS',
                        link: '/css/',
                    },
                    {
                        text: 'postcss',
                        link: '/postcss/',
                    },
                    {
                        text: 'Vue3',
                        link: '/vue3/',
                    },
                    {
                        text: 'Vue的设计与实现',
                        link: '/Vuejs的设计与实现/',
                    },
                    {
                        text: '前端常用插件',
                        link: '/frond_plugs/',
                    }
                ]
            },
            {
                text: '后端技术',
                children: [
                    {
                        text: 'PHP',
                        link: '/php/',
                    },
                    {
                        text: 'Laravel',
                        link: '/laravel/',
                    }
                ]
            },
            {
                text: '运维',
                children:[
                    {
                        text: 'Linux',
                        link: '/linux/',
                    },
                ],
            },
            {
                text: '基础科学',
                children:[
                    {
                        text: '线性代数',
                        link: '/xxds/',
                    },
                ]
            },
            {
                text: 'Category',
                link: '/category/',
            },
            {
                text: 'AI',
                link: '/ai/',
            },
            {
                text: 'jiyun',
                link: '/jiyun/',
            },
            {
                text: 'Timeline',
                link: '/timeline/',
            },
        ],
        sidebar: {
            '/base/':[
                {
                    text: '基础知识',
                    children: [
                        {
                            text: 'webView',
                            link: 'webview.md',
                        }
                    ]
                },
            ],
            '/vue3/': [
                {
                    text: '基础知识',
                    children: [
                        {
                            text: 'ref&reactive',
                            link: 'ref&reactive.md',
                        },
                        {
                            text: 'watchEffect',
                            link: 'watchEffect.md',
                        }
                    ]
                },
                {
                    text: '虚拟节点',
                    children: [
                        {
                            text: '虚拟节点介绍',
                            link: 'vnode.md',
                        },
                        {
                            text: 'component 属性',
                            link: 'vnode.component.md',
                        },
                        {
                            text: 'component.proxy',
                            link: 'vnode.component.proxy.md',
                        }
                    ]
                },
                {
                    text: '组件',
                    children: [
                        {
                            text: '函数式组件',
                            link: '封装message.md',
                        }
                    ]
                },
                {
                    text: '过渡和动画',
                    children: [
                        {
                            text: '函数式组件',
                            link: '封装Message组件.md',
                        }
                    ]
                },
            ],
            '/JavaScript/': [
                {
                    text: '基础知识',
                    children: [
                        {
                            text: '基础知识',
                            link: 'base/index.md',
                        }
                    ]
                },
                {
                    text: '全局对象',
                    children: [
                        {
                            text: '数组',
                            link: 'global_objects/array.md',
                        },
                        {
                            text: '对象',
                            link: 'global_objects/objects.md',
                        },
                        {
                            text: '字符串',
                            link: 'global_objects/字符串截取导致的BUG.md',
                        }
                    ]
                },
                {
                    text: 'dom',
                    children: [
                        {
                            text: 'HTMLElement和Node有何不同',
                            link: 'dom/HTMLElement和Node有何不同.md',
                        }
                    ]
                },
                {
                    text: '字符串',
                    children: [
                        {
                            text: '字符串截取导致的BUG',
                            link: 'global_objects/字符串截取导致的BUG.md',
                        }
                    ]
                },
                {
                    text: '媒体查询',
                    children: [
                        {
                            text: '媒体查询',
                            link: '媒体查询.md',
                        }
                    ]
                }
            ],
            '/html/': [
                {
                    text: '基础知识',
                    children: [
                        {
                            text: 'ref&reactive',
                            link: 'ref&reactive.md',
                        }
                    ]
                }
            ],
            '/css/':[
                {
                    text: '基础知识',
                    children: [
                        {
                            text: '单位和函数',
                            link: '单位和函数.md',
                        },
                        {
                            text: 'line-height',
                            link: 'line_height.md',
                        },
                        {
                            text: 'backdrop-filter',
                            link: 'backdrop-filter.md',
                        }
                    ]
                },
                {
                    text: '文本',
                    children: [
                        {
                            text: 'white-space',
                            link: 'white-space.md',
                        }
                    ]
                },
                {
                    text: '盒子模型',
                    children: [
                        {
                            text: 'box-shadow',
                            link: 'box-shadow.md',
                        },
                        {
                            text: 'shadow-box1',
                            link: 'shadow案例.md',
                        },
                        {
                            text: 'outline',
                            link: 'outline.md',
                        },
                        {
                            text: '层叠上下文',
                            link: '层叠上下文.md',
                        }
                    ]
                },
                {
                    text: '布局',
                    children: [
                        {
                            text: 'CSS 网格完整指南',
                            link: 'grid.md',
                        },
                        {
                            text: 'Positions',
                            link: 'position.md',
                        },
                        {
                            text: '视口相关单位',
                            link: '视口相关单位.md',
                        }
                    ]
                },
                {
                    text: '动画',
                    children: [
                        {
                            text: 'animation',
                            link: 'animation.md',
                        },
                    ]
                },
                {
                    text: 'demo',
                    children:[
                        {
                            text: 'transform1',
                            link: 'demo_transform_translate.md',
                        },
                        {
                            text: 'animation border',
                            link: 'demo_animation_border.md',
                        }
                    ]
                }
            ],
            '/php/': [
                {
                    text: '基础知识',
                    children: [
                        {
                            text: '基础语法',
                            link: '语法.md',
                        },
                        {
                            text: '面向对象',
                            link: '面向对象.md',
                        }
                        ,
                        {
                            text: '类型转换',
                            link: '类型转换.md',
                        },
                        {
                            text: '运算符',
                            children:[
                                {
                                    text: '安全访问运算符',
                                    link: 'base_运算符_安全访问运算符.md',
                                }
                            ]
                        },
                        {
                            text: '数组的基本操作',
                            link: '数组的基本操作.md',
                        }
                    ]
                },
                {
                    text: '类和对象',
                    children: [
                        {
                            text: '类属性的默认值',
                            link: '类属性的默认值.md',
                        },
                        {
                            text: '静态类',
                            link: '静态类.md',
                        },
                        {
                            text: '静态类OR动态类',
                            link: '静态类和动态类.md',
                        },
                        {
                            text: 'implements 关键字',
                            link: 'implements.md',
                        },
                        {
                            text: '枚举',
                            link: '枚举.md',
                        }
                    ]
                }
            ],
            '/laravel/': [
                {
                    text: '基础知识',
                    children: [
                        {
                            text: '表单验证',
                            link: '表单验证.md',
                        },
                        {
                            text: '限流1',
                            link: '限流1.md',
                        }
                    ]
                },
                {
                    text: '套件',
                    children: [
                        {
                            text: 'precognition',
                            link: 'precognition.md',
                        }
                    ]
                },
                {
                    text: '进阶',
                    children: [
                        {
                            text: 'Cache 缓存',
                            link: 'cache.md',
                        }
                    ]
                },
                {
                    text: '最佳实践',
                    children: [
                        {
                            text: 'CRUD 最佳实践',
                            link: 'curd最佳实践.md',
                        }
                    ]
                }
            ],
            '/xxds/':[
                {
                    text: '线性代数',
                    children: [
                        {
                            text: '线性代数系统课程',
                            link: 'index.md',
                        }
                    ]
                }
            ],
            '/UI/': [
                {
                    text: 'UI 鉴赏',
                    children: [
                        {
                            text: 'UI 鉴赏',
                            link: 'index.md',
                        }
                    ]
                }
            ],
            '/ai/':[
                {
                    text: 'ChatGPT',
                    children: [
                        {
                            text: 'ChatGPT越狱提示词',
                            link: 'ChatGPT越狱提示词.md',
                        }
                    ]
                }
            ],
            'postcss':[
                {
                    text: '基础',
                    children: [
                        {
                            text: 'postcss',
                            link: 'index.md',
                        }
                    ]
                }
            ],
            '/mysql/':[
                {
                    text: 'mysql架构',
                    children: [
                        {
                            text: 'mysql架构',
                            link: 'mysql架构.md',
                        }
                    ]
                }
            ],
            '/jiyun/':[
                {
                    text: 'jiyun',
                    children: [
                        {
                            text: 'env',
                            link: 'env.md',
                        }
                    ]
                }
            ]
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    }),

    plugins: [
        blogPlugin({
            // Only files under posts are articles
            filter: ({filePathRelative}) =>
                filePathRelative ? filePathRelative.startsWith('posts/') : false,

            // Getting article info
            getInfo: ({frontmatter, title, data}) => ({
                title,
                author: frontmatter.author || '',
                date: frontmatter.date || null,
                category: frontmatter.category || [],
                tag: frontmatter.tag || [],
                excerpt:
                // Support manually set excerpt through frontmatter
                    typeof frontmatter.excerpt === 'string'
                        ? frontmatter.excerpt
                        : data?.excerpt || '',
            }),

            // Generate excerpt for all pages excerpt those users choose to disable
            excerptFilter: ({frontmatter}) =>
                !frontmatter.home &&
                frontmatter.excerpt !== false &&
                typeof frontmatter.excerpt !== 'string',

            category: [
                {
                    key: 'category',
                    getter: (page) => page.frontmatter.category || [],
                    layout: 'Category',
                    itemLayout: 'Category',
                    frontmatter: () => ({
                        title: 'Categories',
                        sidebar: false,
                    }),
                    itemFrontmatter: (name) => ({
                        title: `Category ${name}`,
                        sidebar: false,
                    }),
                },
                {
                    key: 'tag',
                    getter: (page) => page.frontmatter.tag || [],
                    layout: 'Tag',
                    itemLayout: 'Tag',
                    frontmatter: () => ({
                        title: 'Tags',
                        sidebar: false,
                    }),
                    itemFrontmatter: (name) => ({
                        title: `Tag ${name}`,
                        sidebar: false,
                    }),
                },
            ],

            type: [
                {
                    key: 'article',
                    // Remove archive articles
                    filter: (page) => !page.frontmatter.archive,
                    layout: 'Article',
                    frontmatter: () => ({
                        title: 'Articles',
                        sidebar: false,
                    }),
                    // Sort pages with time and sticky
                    sorter: (pageA, pageB) => {
                        if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
                            return pageB.frontmatter.sticky - pageA.frontmatter.sticky

                        if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

                        if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

                        if (!pageB.frontmatter.date) return 1
                        if (!pageA.frontmatter.date) return -1

                        return (
                            new Date(pageB.frontmatter.date).getTime() -
                            new Date(pageA.frontmatter.date).getTime()
                        )
                    },
                },
                {
                    key: 'timeline',
                    // Only article with date should be added to timeline
                    filter: (page) => page.frontmatter.date instanceof Date,
                    // Sort pages with time
                    sorter: (pageA, pageB) =>
                        new Date(pageB.frontmatter.date).getTime() -
                        new Date(pageA.frontmatter.date).getTime(),
                    layout: 'Timeline',
                    frontmatter: () => ({
                        title: 'Timeline',
                        sidebar: false,
                    }),
                },
            ],
            hotReload: true,
        }),
    ],

    bundler: viteBundler({
        viteOptions: {
            css: {
                postcss: {
                    plugins: [
                        autoprefixer,
                        tailwindcss,
                    ]
                }
            }
        }
    }),
})
