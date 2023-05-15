export interface Fields {
  valueName: string;
  fieldType: string;
  defaultValue?: any;
  type?: string;
  label?: string;
  placeholder?: string | Array<string>;
  validations?: {
    required?: boolean;
    minLength?: number;
    sameAs?: string;
    numeric?: boolean;
    email?: boolean;
  };
  checkboxItem?: {
    text?: string;
    value?: string;
  }[];
  items?: {
    text: string;
    value: string | number;
  }[];
}

export interface Form {
  [key: string]: number | string;
}
