import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfilePhoneSection = ({ onSectionPress }) => {
    const { t } = useTranslation();
    const [data, setData] = React.useState({
        phone: '',
        oldPhone: '',
    });

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    const onSavePressed = () => {
        onSectionPress();
    }

    const onExitPressed = () => {
        onSectionPress();
    }

    return (
        <>
            <Card
                title={t('screen.profile-phone.header.text')}
                description={t('screen.profile-phone.paragraph.text')}
            >
                <Grid cols={1}>
                    <Input
                        disabled
                        type="PHONE"
                        name="oldPhone"
                        value={data.oldPhone}
                        setValue={onChangeValue}
                        label={t('screen.profile-phone.form.phone.text')}
                    />
                </Grid>

                <Grid cols={1}>
                    <Input
                        type="PHONE"
                        name="phone"
                        value={data.phone}
                        setValue={onChangeValue}
                        label={t('screen.profile-phone.form.phone-new.text')}
                    />
                </Grid>
            </Card>

            <View style={styles.logout}>
                <Button
                    type="PRIMARY"
                    onPress={onSavePressed}
                    text={t('screen.profile-main.save.text')}
                />
                <Button
                    type="DANGER"
                    onPress={onExitPressed}
                    text={t('screen.profile-main.discard.text')}
                />
            </View>
        </>
    )
}

export default ProfilePhoneSection;
