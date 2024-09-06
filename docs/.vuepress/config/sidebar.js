import {default as linux} from './sidebar_linux';
import {default as sidebar_env} from './sidebar_env';
import {default as sidebar_jiyun} from './sidebar_jiyun';
import {default as sidebar_node} from './sidebar_node';
import {default as sidebar_vue} from './sidebar_vue';
import {default as sidebar_laravel} from './sidebar_laravel';


export default {
    ...linux,
    ...sidebar_env,
    ...sidebar_jiyun,
    ...sidebar_node,
    ...sidebar_vue,
    ...sidebar_laravel
}