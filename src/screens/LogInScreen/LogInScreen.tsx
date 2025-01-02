import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import api from './../../api';
import styles from './LogInScreen.styled';
import { withPublicNav } from '../../utils/hocs';
// import Logo from '../../../assets/images/Logo_1.png';
import { userLoggedIn, userReset } from '../../store/actions/user';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const validateEmail = (email: string, errorMessages: any) => {
    // Basic email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) || errorMessages.email;
};

const LogInScreen = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigation = useNavigation();

    const {
        control,
        trigger,
        setError,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    // const [errors, setErrors] = React.useState({});
    // const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState({
        email: '',
        password: '',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text')
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPasswordScreen");
    };

    const validate = (payload: any) => {
        console.error('ERROOO:::', payload);

        const errs: any = {};

        // Check for empty input(s).
        if (!payload.email) {
            errs.email = errorMessages.empty;
        }

        if (!payload.password) {
            errs.password = errorMessages.empty;
        }

        // TODO: Add Verify Email.
        // if (payload.email) {
        //     errs.email = errorMessages.email;
        // }

        return errs;
    };

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        const updatedData = { ...data, [key]: value };

        setData(updatedData);
        validate(updatedData);
    }

    const onSubmit = (payload: any) => {
        trigger().then((isValid) => {
            if (!isValid) return;

            api.user.login(payload)
                .then((user) => {
                    dispatch(userReset());
                    // dispatch(userLoggedIn(user));
                    console.log('USER DATA:::', user);
                    // Handle successful login, like navigating to another screen or setting user state
                })
                .catch((error) => {
                    console.error('Login error:', error);
                    // Handle login error (e.g., display error message to the user)
                });
        });
    };

    const onSignInPressed = () => onSubmit(data);

    const onRegisterPressed = () => navigation.navigate('RegisterScreen');

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
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: errorMessages.empty,
                                validate: validateEmail,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    type="EMAIL"
                                    name="email"
                                    value={value}
                                    onBlur={onBlur}
                                    setValue={onChange}
                                    error={errors.email?.message}
                                    label={t('screen.login.form.email.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: errorMessages.empty,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    type="PASSWORD"
                                    name="password"
                                    value={value}
                                    onBlur={onBlur}
                                    setValue={onChange}
                                    error={errors.password?.message}
                                    label={t('screen.login.form.password.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            loading={isSubmitting}
                            onPress={handleSubmit(onSubmit)}
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
