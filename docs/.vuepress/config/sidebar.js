import {default as linux} from './sidebar_linux';
import {default as sidebar_env} from './sidebar_env';
import {default as sidebar_jiyun} from './sidebar_jiyun';

export default {
    ...linux,
    ...sidebar_env,
    ...sidebar_jiyun
}