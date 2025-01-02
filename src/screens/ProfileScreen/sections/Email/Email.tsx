import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfileEmailSection = ({ onSectionPress }) => {
    const { t } = useTranslation();
    const [data, setData] = React.useState({
        email: '',
        oldEmail: '',
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
                title={t('screen.profile-email.header.text')}
                description={t('screen.profile-email.paragraph.text')}
            >
                <Grid cols={1}>
                    <Input
                        disabled
                        type="EMAIL"
                        name="oldEmail"
                        value={data.oldEmail}
                        setValue={onChangeValue}
                        label={t('screen.profile-email.form.email.text')}
                    />
                </Grid>

                <Grid cols={1}>
                    <Input
                        type="EMAIL"
                        name="email"
                        value={data.email}
                        setValue={onChangeValue}
                        label={t('screen.profile-email.form.email-confirm.text')}
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

export default ProfileEmailSection;
