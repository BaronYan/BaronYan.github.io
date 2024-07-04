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
            '/',
            {
                text: 'JavaScript',
                children: [
                    {
                        text: '基础知识',
                        link: '/JavaScript/base/',
                    },
                    {
                        text: 'JavaScript',
                        link: '/JavaScript/',
                    },
                    {
                        text: 'dom',
                        link: '/JavaScript/dom/',
                    }
                ]
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
                text: 'Category',
                link: '/category/',
            },
            {
                text: 'Tag',
                link: '/tag/',
            },
            {
                text: 'Timeline',
                link: '/timeline/',
            },
        ],
        sidebar: {
            '/vue3/': [
                {
                    text: '基础知识',
                    children: [
                        {
                            text: 'ref&reactive',
                            link: 'ref&reactive.md',
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
