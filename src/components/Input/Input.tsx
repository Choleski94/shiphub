import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles, { DEFAULT_ERROR_COLOR } from './Input.styled';
import Illustration from '../Illustration';
import { EInputTypes, IInputProps, DEFAULT_INPUT_ICONS } from './Input.controller';

const Input: React.FC<IInputProps> = ({
    name,
    value, 
    label, 
    error,
    setValue, 
    disabled,
    placeholder,
    type = EInputTypes.TEXT, 
}) => {
    const hasLabel = React.useMemo(() => (
        label && label.length
    ), [label]);

    const onChangeText = (keyValue: string) => {
        if (!disabled) {
            setValue(keyValue, name);
        }
    };

    const [ hasIcon, secureTextEntry ] = React.useMemo(() => {
        let [ showIcon, showSecureTextEntry ] = [ false, false ];

        switch (type) {
            case EInputTypes.TEXT:
                showIcon = false
                break;
            case EInputTypes.DATE:
            case EInputTypes.EMAIL:
            case EInputTypes.PHONE:
            case EInputTypes.SEARCH:
                showIcon = true;
                break;
            case EInputTypes.PASSWORD:
                showIcon = true;
                showSecureTextEntry = true;
                break;
            default:
                showIcon = false;
        }

        return [ showIcon, showSecureTextEntry ];
    }, [type]);

    return (
        <View style={styles.root}>
            {hasLabel && (
               <Text 
                    style={[
                        styles.label,
                        error ? styles.errorMessage : null,
                    ]}
                >
                    {label}
               </Text> 
            )}
            <View style={[
                styles.container,
                disabled ? styles.disabledContainer : null,
                error ? styles.containerError : null,
            ]}>
                {hasIcon && (
                    <View style={styles.icon}>
                        <Illustration.Icon
                            name={DEFAULT_INPUT_ICONS[type]}
                            color={
                                error ? (
                                    DEFAULT_ERROR_COLOR
                                ) : (
                                    disabled ? '#a9a9a9' : null
                                )
                            }
                        />
                    </View>
                )}
                <TextInput 
                    value={value}
                    editable={!disabled}
                    placeholder={placeholder} 
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    style={[
                        styles.input, 
                        hasIcon ? styles.inputIcon : null,
                        disabled ? styles.disabledInput : null,
                    ]} 
                />
            </View>
            {error && (
                <Text style={styles.errorMessage}>
                    {error}
                </Text>
            )}
        </View>
    );
}

export default Input;
