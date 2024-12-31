import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withPublicNav } from '../../utils/hocs';
import styles from './ConfirmEmailScreen.styled';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const ConfirmEmailScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        code: ''
    });

    const onConfirmPressed = () => {
        navigation.navigate('WelcomeScreen');
    };

    const onLogInPress = () => {
        navigation.navigate('LogInScreen');
    };

    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    return (
        <ScreenView withWhiteBg>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Typography.Heading type="PRIMARY">
                        {t('screen.confirm-email.header-01.text')}
                    </Typography.Heading>
                    <Typography.Heading>
                        {t('screen.confirm-email.header-02.text')}
                    </Typography.Heading>
                    <Typography.Paragraph>
                        {t('screen.confirm-email.paragraph.text')}
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            name="code"
                            value={data.code}
                            setValue={onChangeValue}
                            label={t('screen.confirm-email.code-label.text')}
                            placeholder={t('screen.confirm-email.code.placeholder.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            onPress={onConfirmPressed}
                            text={t('screen.confirm-email.form.continue.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="SECONDARY"
                            onPress={onResendPressed}
                            text={t('screen.confirm-email.form.resend.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onLogInPress}
                            text={t('screen.confirm-email.form.btn.login.text')}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(ConfirmEmailScreen);
