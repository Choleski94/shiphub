import React from 'react';
import { Text, Pressable, GestureResponderEvent, View, ActivityIndicator } from 'react-native';

import styles from './Button.styled';

export interface IButtonProps {
    text: string;
    bgColor?: string;
    fgColor?: string;
    loading?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DISABLED' | 'SUCCESS' | 'DANGER' | 'WARNING';
    onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<IButtonProps> = ({
    text,
    onPress,
    bgColor,
    fgColor,
    size = 'md',
    loading = false,
    type = 'PRIMARY',
}) => {
    const [containerStyle, containerSizeStyle, spinnerSizeStyle, textStyle, textSizeStyle] = React.useMemo(() => {
        const textKey = `text_${type}`;
        const textSizeKey = `text_size_${size}`;
        const containerKey = `container_${type}`;
        const spinnerSizeKey = `spinner_size_${size}`;
        const containerSizeKey = `container_size_${size}`;

        return [
            styles[containerKey],
            styles[containerSizeKey],
            styles[spinnerSizeKey],
            styles[textKey],
            styles[textSizeKey],
        ];
    }, [type]);

    return (
        <Pressable
            onPress={onPress}
            style={[
                containerSizeStyle, styles.container, containerStyle,
                loading ? styles.spinnerContainer : null,
                loading ? spinnerSizeStyle : null,
                bgColor ? { backgroundColor: bgColor } : {},
            ]}
        >
            {loading ? (
                <ActivityIndicator
                    color={fgColor || 'white'}
                    size="small"
                />
            ) : (
                <Text
                    style={[
                        textSizeStyle, styles.text, textStyle,
                        fgColor ? { color: fgColor } : {},
                    ]}
                >
                    {text}
                </Text>
            )}
        </Pressable>
    );
};

export default Button;
