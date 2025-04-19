import type { ExtractPropTypes } from 'vue'

export const formItemProps = {
    label: String,
    labelWidth: {
        type: [String, Number],
        default: '',
    },
    labelPosition: {
        type: String,
        values: ['left', 'right', 'top', ''],
        default: '',
    },
    required: {
        type: Boolean,
        default: undefined,
    },
    component: String,
    componentProps: Object
};

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;