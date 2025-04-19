import type { ExtractPropTypes, PropType } from 'vue'
import type { FormFieldType } from './types'

export const formProps = {
    fileds: Object as PropType<Array<FormFieldType>>,
    rules: Object,
    inline: Boolean,
    disabled: Boolean
};

export type FormProps = ExtractPropTypes<typeof formProps>;

export const formEmits = {};

export type FormEmits = typeof formEmits;