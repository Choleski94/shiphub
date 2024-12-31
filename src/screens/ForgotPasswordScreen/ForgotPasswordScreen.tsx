import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { withPublicNav } from '../../utils/hocs';
import styles from './ForgotPasswordScreen.styled';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const ForgotPasswordScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        email: '',
    });

    const onSendPressed = () => {
        navigation.navigate('NewPasswordScreen');
    };

    const onLogInPress = () => {
        navigation.navigate('LogInScreen');
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
                        {t('screen.forgot_password.header-01.text')}
                    </Typography.Heading>
                    <Typography.Heading>
                        {t('screen.forgot_password.header-02.text')}
                    </Typography.Heading>
                    <Typography.Paragraph>
                        {t('screen.forgot_password.paragraph.text')}
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            type="EMAIL"
                            name="email"
                            value={data.email}
                            setValue={onChangeValue}
                            label={t('screen.forgot_password.form.email.text')}

                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            onPress={onSendPressed}
                            text={t('screen.forgot_password.form.btn.recover.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onLogInPress}
                            text={t('screen.forgot_password.login.text')}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(ForgotPasswordScreen);
