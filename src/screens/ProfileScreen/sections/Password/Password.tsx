import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfilePasswordSection = ({ onSectionPress }) => {
    const { t } = useTranslation();
    const [data, setData] = React.useState({
        password: '',
        oldPassword: '',
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
                title={t('screen.profile-password.header.text')}
                description={t('screen.profile-password.paragraph.text')}
            >
                <Grid cols={1}>
                    <Input
                        disabled
                        type="PASSWORD"
                        name="oldPassword"
                        value={data.oldPassword}
                        setValue={onChangeValue}
                        label={t('screen.profile-password.form.password.text')}
                    />
                </Grid>

                <Grid cols={1}>
                    <Input
                        type="PASSWORD"
                        name="password"
                        value={data.password}
                        setValue={onChangeValue}
                        label={t('screen.profile-password.form.password-new.text')}
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

export default ProfilePasswordSection;
