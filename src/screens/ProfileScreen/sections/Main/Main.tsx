import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './../../ProfileScreen.styled';
import { userLoggedOut } from '../../../../store/actions/user';
import { Card, Illustration, Button } from '../../../../components';
import { DEFAULT_PROFILE_OPTIONS, DEFAULT_PROFILE_SECTIONS } from './../../ProfileScreen.controller';

const ProfileMainSection = ({ onSectionPress }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigation = useNavigation();

    const messages = React.useMemo(() => ({
        [DEFAULT_PROFILE_SECTIONS.EMAIL]: t('screen.profile-main.option.email.header.text'),
        [DEFAULT_PROFILE_SECTIONS.PHONE]: t('screen.profile-main.option.phone.header.text'),
        [DEFAULT_PROFILE_SECTIONS.PASSWORD]: t('screen.profile-main.option.password.header.text'),
    }), []);

    React.useEffect(() => {
        onSectionPress();
    }, []);

    const onLogOutPressed = () => {
        dispatch(userLoggedOut());
        navigation.navigate("LogInScreen");
    }

    const onVerificationPressed = () => {
        console.warn('Add support for account verification.');
    }

    return (
        <>
            <Card
                title={t('screen.profile-main.header.text')}
                description={t('screen.profile-main.paragraph.text')}
            >
                {DEFAULT_PROFILE_OPTIONS.map((item) => (
                    <TouchableOpacity
                        id={item.id}
                        key={item.id}
                        style={styles.iconWrapper}
                        onPress={() => onSectionPress(item.id)}
                    >
                        <View style={styles.icon}>
                            <Illustration.Icon
                                color="#007BFF"
                                name={item.icon}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.description}>
                                {messages[item?.id]}
                            </Text>
                        </View>
                        <Illustration.Icon
                            name="arrow_forward"
                        />
                    </TouchableOpacity>
                ))}
            </Card>
            <Card
                title={t('screen.profile-main.verification.header.text')}
                description={t('screen.profile-main.verification.paragraph.text')}
            >
                <Button
                    type="DISABLED"
                    onPress={onVerificationPressed}
                    text={t('screen.profile-main.under-review.text')}
                />
            </Card>

            <View style={styles.logout}>
                <Button
                    type="DANGER"
                    onPress={onLogOutPressed}
                    text={t('screen.profile-main.logout.text')}
                />
            </View>
        </>
    )
}

export default ProfileMainSection;
