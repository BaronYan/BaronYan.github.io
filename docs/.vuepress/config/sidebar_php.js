export default {
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
                            text: 'new static',
                            link: 'new_static.md',
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
}