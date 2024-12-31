import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from './../../api';
import styles from './LogInScreen.styled';
import { withPublicNav } from '../../utils/hocs';
// import Logo from '../../../assets/images/Logo_1.png';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const LogInScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState({
        email: '',
        password: '',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text')
    };

    const onSignInPressed = () => {
        navigation.navigate('DeliveryScreen');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPasswordScreen");
    };

    const onSignInFacebook = () => {
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };
    const onSignInApple = () => {
        console.warn('onSignInApple');
    };

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    const validate = (payload: any) => {
        const errs: any = {};

        // Check for empty input(s).
        if (!payload.email) {
            errs.email = errorMessages.empty;
        }
        if (!payload.password) {
            errs.password = errorMessages.empty;
        }

        // Verify Email.
        if (payload.email) {
            errs.email = errorMessages.email;
        }

        return errs;
    };

    const onSubmit = (payload: any) => {
        // Validate payload.
        const errs = validate(payload);
        setErrors(errs);

        // Check if we have error(s).
        if (Object.keys(errs).length) return null;

        setLoading(true);

        api.user.login(payload).then((user) => {
            setLoading(false);
            console.log('USER DATA:::', user);

            // setErrorCode('');
            // setLocalToken(user?.token);
            // Redirect user to secure app.
            // window.location.href = config.app.base_url;
            navigation.navigate('RegisterScreen');
        }).catch(({ response: { data } }) => {
            setLoading(false);
            console.error('ERROR');
            // setErrorCode(data.reason);
        });
    };

    const onRegisterPressed = () => onSubmit(data);

    return (
        <ScreenView withWhiteBg>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                    <Typography.Heading type="PRIMARY">
                        {t('screen.login.header-01.text')}
                    </Typography.Heading>
                    <Typography.Heading>
                        {t('screen.login.header-02.text')}
                    </Typography.Heading>
                    <Typography.Paragraph>
                        {t('screen.login.paragraph.text')}
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            type="EMAIL"
                            name="email"
                            value={data.email}
                            error={errors?.email}
                            setValue={onChangeValue}
                            label={t('screen.login.form.email.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="PASSWORD"
                            name="password"
                            value={data.password}
                            setValue={onChangeValue}
                            label={t('screen.login.form.password.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            loading={loading}
                            onPress={onSignInPressed}
                            text={t('screen.login.form.btn.login.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onForgotPasswordPressed}
                            text={t('screen.login.form.link.forgot.text')}
                        />
                    </Grid>


                    {/* <Button
                        bgColor="#E7EAF4"
                        fgColor="#4765A9"
                        onPress={onSignInFacebook}
                        text="Sign In with Facebook"
                    />

                    <Button
                        bgColor="#FAE9EA"
                        fgColor="#DD4D44"
                        onPress={onSignInGoogle}
                        text="Sign In with Google"
                    />

                    <Button
                        bgColor="#e3e3e3"
                        fgColor="#363636"
                        onPress={onSignInApple}
                        text="Sign In with Apple"
                    /> */}

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onRegisterPressed}
                            text={t('screen.login.no-account.text')}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(LogInScreen);
