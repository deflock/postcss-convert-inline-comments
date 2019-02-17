import postcss from 'postcss';

const PLUGIN_NAME = 'deflock-convert-inline-comments';

/**
 *
 */
export default postcss.plugin(PLUGIN_NAME, (opts = {}) => {
    return (css, result) => {
        css.walk(node => {
            if (node.type === 'comment') {
                if (node.raws.inline) {
                    delete node.raws.inline;
                }
            }
        });
    };
});
