export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERR = 'err';
function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger('danh',TYPE_WARN);