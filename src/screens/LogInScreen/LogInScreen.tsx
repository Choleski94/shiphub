import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import useApi from './../../api';
import styles from './LogInScreen.styled';
import { withPublicNav } from '../../utils/hocs';
import { logInUser } from '../../store/actions/user';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const validateEmail = (email: string) => {
    // Basic email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const LogInScreen = () => {
    const api = useApi();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text'),
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPasswordScreen");
    };

    const onSubmit = (data: any) => {
        api.user.login(data)
            .then((user) => {
                dispatch(logInUser(user));
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

    const onSignInPressed = () => handleSubmit(onSubmit)();

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
                                validate: (value) => {
                                    // First, check if the email is empty, then check for the format
                                    if (!value) {
                                        return errorMessages.empty;
                                    }
                                    if (!validateEmail(value)) {
                                        return t('form.validation.email.error.text'); // Custom error message for invalid email
                                    }
                                    return true; // If email is valid, return true
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    type="EMAIL"
                                    name="email"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
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
                            render={({ field }) => (
                                <Input
                                    type="PASSWORD"
                                    name="password"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.password?.message}
                                    label={t('screen.login.form.password.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            loading={isSubmitting}
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
