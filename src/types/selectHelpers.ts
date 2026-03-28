import type { OptionType } from "@/components/elements/CustomSelect";

/**
 * Type-safe handler for single select
 * @param newValue - Value coming from onChange event
 * @param setState - State update function
 * @returns Selected single value
 */
export const handleSingleSelectChange = (
    newValue: OptionType | OptionType[] | null,
    setState: (value: OptionType | null) => void
): OptionType | null => {
    const singleValue = newValue as OptionType | null;
    setState(singleValue);
    return singleValue;
};

/**
 * Type-safe handler for multi select
 * @param newValue - Value coming from onChange event
 * @param setState - State update function
 * @returns Selected multiple values
 */
export const handleMultiSelectChange = (
    newValue: OptionType | OptionType[] | null,
    setState: (value: OptionType[]) => void
): OptionType[] => {
    const multiValue = (newValue as OptionType[]) || [];
    setState(multiValue);
    return multiValue;
};

/**
 * Extract only values from select
 * @param selected - Selected option(s)
 * @returns Array of values
 */
export const getSelectValues = (
    selected: OptionType | OptionType[] | null
): (string | number)[] => {
    if (!selected) return [];
    if (Array.isArray(selected)) {
        return selected.map(item => item.value);
    }
    return [selected.value];
};

/**
 * Extract only labels from select
 * @param selected - Selected option(s)
 * @returns Array of labels
 */
export const getSelectLabels = (
    selected: OptionType | OptionType[] | null
): string[] => {
    if (!selected) return [];
    if (Array.isArray(selected)) {
        return selected.map(item => item.label);
    }
    return [selected.label];
};

/**
 * Check if select has a specific value
 * @param selected - Selected option(s)
 * @param value - Value to check
 * @returns boolean
 */
export const hasSelectValue = (
    selected: OptionType | OptionType[] | null,
    value: string | number
): boolean => {
    if (!selected) return false;
    if (Array.isArray(selected)) {
        return selected.some(item => item.value === value);
    }
    return selected.value === value;
};

/**
 * Create OptionType array from API response
 * @param data - API response data
 * @param valueKey - Which property to use as value (default: 'id')
 * @param labelKey - Which property to use as label (default: 'name')
 * @returns OptionType array
 */
export const formatApiToOptions = <T extends Record<string, unknown>>(
    data: T[],
    valueKey: keyof T = 'id' as keyof T,
    labelKey: keyof T = 'name' as keyof T
): OptionType[] => {
    return data.map(item => ({
        value: item[valueKey] as string | number,
        label: String(item[labelKey]),
    }));
};

/**
 * Create API payload from OptionType
 * @param selected - Selected option(s)
 * @param fieldName - API field name
 * @returns Object ready for API submission
 */
export const formatSelectForApi = (
    selected: OptionType | OptionType[] | null,
    fieldName: string
): Record<string, string | number | (string | number)[] | null> => {
    const values = getSelectValues(selected);

    if (values.length === 0) {
        return { [fieldName]: null };
    }

    if (values.length === 1) {
        return { [fieldName]: values[0] };
    }

    return { [fieldName]: values };
};

/**
 * Find option by value
 * @param options - Available options
 * @param value - Value to find
 * @returns Found option or null
 */
export const findOptionByValue = (
    options: OptionType[],
    value: string | number | null | undefined
): OptionType | null => {
    if (!value) return null;
    return options.find(opt => opt.value === value) || null;
};

/**
 * Find options by multiple values
 * @param options - Available options
 * @param values - Values to find
 * @returns Array of found options
 */
export const findOptionsByValues = (
    options: OptionType[],
    values: (string | number)[] | null | undefined
): OptionType[] => {
    if (!values || values.length === 0) return [];
    return options.filter(opt => values.includes(opt.value));
};

/**
 * Select validation helper
 * @param selected - Selected option(s)
 * @param required - Is this field required?
 * @param minSelections - Minimum number of selections (for multi-select)
 * @param maxSelections - Maximum number of selections (for multi-select)
 * @returns Error message or empty string
 */
export const validateSelect = (
    selected: OptionType | OptionType[] | null,
    options?: {
        required?: boolean;
        minSelections?: number;
        maxSelections?: number;
        customMessage?: string;
    }
): string => {
    const { required = false, minSelections, maxSelections, customMessage } = options || {};

    // Check if required
    if (required && !selected) {
        return customMessage || 'This field is required';
    }

    // Check min/max for multi-select
    if (Array.isArray(selected)) {
        const count = selected.length;

        if (minSelections && count < minSelections) {
            return `Please select at least ${minSelections} option(s)`;
        }

        if (maxSelections && count > maxSelections) {
            return `Please select at most ${maxSelections} option(s)`;
        }
    }

    return '';
};