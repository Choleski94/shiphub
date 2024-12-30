import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './RegisterScreen.styled';
import { withPublicNav } from '../../utils/hocs';
// import SocialSignInButtons from '../../components/SocialSignInButtons';
import { ScreenView, Typography, Button, Input, Link, Grid } from '../../components/';

const RegisterScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        email: '',
        lastName: '',
        password: '',
        firstName: '',
        passwordRepeat: '',
    });

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmailScreen'); 
    };

    const onLogInPressed = () => {
        navigation.navigate('LogInScreen');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
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
                        {t('screen.register.header-01.text')}
                    </Typography.Heading>
                    <Typography.Heading>
                        {t('screen.register.header-02.text')}
                    </Typography.Heading>
                    <Typography.Paragraph>
                        {t('screen.register.paragraph.text')}
                    </Typography.Paragraph>

                    <Grid cols={2}>
                        <Input
                            name="firstName"
                            value={data.firstName}
                            setValue={onChangeValue}
                            label={t('screen.register.form.first-name.text')}
                        />
                        <Input
                            name="lastName"
                            value={data.lastName}
                            setValue={onChangeValue}
                            label={t('screen.register.form.last-name.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="EMAIL"
                            name="email"
                            value={data.email}
                            setValue={onChangeValue}
                            label={t('screen.register.form.email.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="PASSWORD"
                            name="password"
                            value={data.password}
                            setValue={onChangeValue}
                            label={t('screen.register.form.password.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="PASSWORD"
                            name="passwordRepeat"
                            setValue={onChangeValue}
                            value={data.passwordRepeat}
                            label={t('screen.register.form.confirm-password.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            onPress={onRegisterPressed}
                            text={t('screen.register.form.link.continue.text')}
                        />
                    </Grid>

                    <Typography.Paragraph>
                        {t('screen.register.form.terms-privacy-01.text')}
                        <Link onPress={onTermsOfUsePressed}>
                            {t('screen.register.form.link.terms.text')}
                        </Link>
                        {t('screen.register.form.terms-privacy-02.text')}
                        <Link onPress={onPrivacyPressed}>
                            {t('screen.register.form.link.privacy.text')}
                        </Link>
                    </Typography.Paragraph>

                    {/* <SocialSignInButtons /> */}

                    <Button
                        type="TERTIARY"
                        onPress={onLogInPressed}
                        text={t('screen.register.form.btn.login.text')}
                    />
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(RegisterScreen);
