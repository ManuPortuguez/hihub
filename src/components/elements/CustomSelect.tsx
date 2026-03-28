import React from 'react';
import Select from 'react-select';
import type { StylesConfig, GroupBase, MultiValue, SingleValue, ActionMeta } from 'react-select';

// Re-export react-select types for consumer convenience
export type { MultiValue, SingleValue, ActionMeta };

// Option Type Definition
export interface OptionType {
    value: string | number;
    label: string;
    isDisabled?: boolean;
    [key: string]: string | number | boolean | undefined;
}

// Simplified onChange handler type for easier usage
export type SimpleChangeHandler = (newValue: OptionType | readonly OptionType[] | null) => void;

// Custom Colors Interface
export interface CustomColors {
    primary?: string;
    tertiary?: string;
    mute?: string;
    info?: string;
    background?: string;
    primaryLight?: string;
    primaryGlow?: string;
}

// Custom Style Config Interface
export interface CustomStyleConfig {
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    optionPadding?: string;
    boxShadowIntensity?: string;
    focusGlowSize?: string;
}

// Component Props Interface
export interface CustomSelectProps {
    options: OptionType[];
    value?: OptionType | OptionType[] | null;
    // Support both simple and full onChange handlers
    onChange?: SimpleChangeHandler | ((newValue: MultiValue<OptionType> | SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void);
    placeholder?: string;
    name?: string;
    id?: string;
    isDisabled?: boolean;
    isSearchable?: boolean;
    isClearable?: boolean;
    isMulti?: boolean;
    customColors?: CustomColors;
    customStyles?: CustomStyleConfig;
    className?: string;
    defaultValue?: OptionType | OptionType[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    options = [],
    value = null,
    onChange,
    placeholder = "Select an option",
    name = "custom-select",
    id = "custom-select",
    isDisabled = false,
    isSearchable = true,
    isClearable = false,
    isMulti = false,
    customColors = {},
    customStyles = {},
    className = "",
    defaultValue,
}) => {
    // Default color scheme 
    const defaultColors: Required<CustomColors> = {
        primary: '#fd5523',        // Main brand color
        tertiary: '#122f2a',       // Text color
        mute: '#788094',           // Border and placeholder color
        info: '#fff',              // Selected text color
        background: '#fff',        // Background color
        primaryLight: 'rgba(253, 85, 35, 0.1)', // Hover background
        primaryGlow: 'rgba(253, 85, 35, 0.2)',  // Focus glow
    };

    // Merge custom colors with defaults
    const colors = { ...defaultColors, ...customColors };

    // Default style configuration
    const defaultStyleConfig: Required<CustomStyleConfig> = {
        borderRadius: '20px',
        padding: '5px',
        fontSize: '14px',
        optionPadding: '12px 16px',
        boxShadowIntensity: '0 10px 25px rgba(0,0,0,0.1)',
        focusGlowSize: '3px',
    };

    // Merge with custom style config
    const styleConfig = { ...defaultStyleConfig, ...customStyles };

    // Wrapper to handle both simple and full onChange signatures
    const handleChange = (
        newValue: MultiValue<OptionType> | SingleValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => {
        if (!onChange) return;

        // Check if onChange expects actionMeta parameter (has 2 parameters)
        if (onChange.length === 2) {
            // Full handler with actionMeta
            (onChange as (newValue: MultiValue<OptionType> | SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void)(newValue, actionMeta);
        } else {
            // Simple handler - MultiValue is readonly OptionType[], SingleValue is OptionType | null
            (onChange as SimpleChangeHandler)(newValue);
        }
    };

    const selectStyles: StylesConfig<OptionType, boolean, GroupBase<OptionType>> = {
        // Main input container control
        control: (base, state) => ({
            ...base,
            borderRadius: styleConfig.borderRadius,
            padding: styleConfig.padding,
            backgroundColor: colors.background,
            borderColor: state.isFocused ? colors.primary : colors.mute,
            boxShadow: state.isFocused
                ? `0 0 0 ${styleConfig.focusGlowSize} ${colors.primaryGlow}`
                : 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
                borderColor: colors.tertiary,
            },
            ...(state.isDisabled && {
                backgroundColor: '#f5f5f5',
                cursor: 'not-allowed',
            }),
        }),

        // The actual dropdown menu
        menu: (base) => ({
            ...base,
            borderRadius: styleConfig.borderRadius,
            boxShadow: styleConfig.boxShadowIntensity,
            overflow: 'hidden',
            marginTop: '8px',
            backgroundColor: colors.background,
        }),

        // Menu portal for z-index issues
        menuPortal: (base) => ({
            ...base,
            zIndex: 9999
        }),

        // Individual options inside the dropdown
        option: (base, state) => ({
            ...base,
            padding: styleConfig.optionPadding,
            fontSize: styleConfig.fontSize,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            color: state.isSelected ? colors.info : colors.tertiary,
            backgroundColor: state.isSelected
                ? colors.primary
                : state.isFocused
                    ? colors.primaryLight
                    : 'transparent',
            '&:active': {
                backgroundColor: colors.primary,
                color: colors.info,
            },
        }),

        // Selected value text
        singleValue: (base) => ({
            ...base,
            color: colors.tertiary,
            fontWeight: '500',
        }),

        // Multi-select values
        multiValue: (base) => ({
            ...base,
            backgroundColor: colors.primaryLight,
            borderRadius: '6px',
        }),

        multiValueLabel: (base) => ({
            ...base,
            color: colors.tertiary,
        }),

        multiValueRemove: (base) => ({
            ...base,
            color: colors.primary,
            ':hover': {
                backgroundColor: colors.primary,
                color: colors.info,
            },
        }),

        // Placeholder text
        placeholder: (base) => ({
            ...base,
            color: colors.mute,
        }),

        // Dropdown arrow
        dropdownIndicator: (base, state) => ({
            ...base,
            color: state.isFocused ? colors.primary : colors.mute,
            transition: 'all 0.3s ease',
            '&:hover': {
                color: colors.primary,
            },
        }),

        // Remove the vertical line separator
        indicatorSeparator: () => ({
            display: 'none',
        }),

        // Loading indicator
        loadingIndicator: (base) => ({
            ...base,
            color: colors.primary,
        }),

        // Clear indicator
        clearIndicator: (base) => ({
            ...base,
            color: colors.mute,
            ':hover': {
                color: colors.primary,
            },
        }),
    };

    return (
        <Select
            id={id}
            name={name}
            inputId={id}
            options={options}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            placeholder={placeholder}
            isDisabled={isDisabled}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isMulti={isMulti}
            className={className}
            classNamePrefix="custom-select"
            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
            styles={selectStyles}
        />
    );
};

export default CustomSelect;