/**
 * 作者：yeshengqiang
 * 时间：2018-05-17
 * 描述：面包屑
 */
 import './breadcrumb.scss';
 export default {
    name: 'Breadcrumb',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        separator: {
            type: String,
            default: '/'
        }
    },
    provide () {
        return {
            Breadcrumb: this
        };
    },
    render (h) {
        return h(this.tag, {
            'class': [
                'breadcrumb-panel'
            ],
            attrs: {
                'aria-label': 'breadcrumb',
                'rule': 'navigation'
            }
        }, [this.$slots.default]);
    }
 };
