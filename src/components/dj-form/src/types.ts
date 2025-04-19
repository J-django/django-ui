export type FormFieldType = FormItemPropsType;

export type FormPropsType = {
    fields?: Array<FormItemPropsType>
};

export type FormItemPropsType = {
    field: string;
    label?: string;
    component: string;
    required?: boolean;
};

export type FormItemComponentType = {
    placeholder?: string;
};

export type FormValidationResult = Promise<boolean>;