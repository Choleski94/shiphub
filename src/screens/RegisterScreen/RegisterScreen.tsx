import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import useApi from '../../api';
import styles from './RegisterScreen.styled';
import { withPublicNav } from '../../utils/hocs';
// import SocialSignInButtons from '../../components/SocialSignInButtons';
import { ScreenView, Typography, Button, Input, Link, Grid } from '../../components/';

const RegisterScreen = () => {
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
            lastName: '',
            password: '',
            firstName: '',
            passwordRepeat: '',
        },
        mode: 'all',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text'),
    };

    const onSubmit = (data: any) => {
        // api.user.login(data)
        //     .then(() => {
        //         // dispatch(logInUser(user));
        //         navigation.navigate('ConfirmEmailScreen');
        //     })
        //     .catch((error) => {
        //         console.error('Login error:', error);
        //     });
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    const onRegisterPressed = () => handleSubmit(onSubmit)();

    const onLogInPressed = () => navigation.navigate('LogInScreen');

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
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{
                                required: errorMessages.empty,
                                validate: (value) => {
                                    // First, check if the email is empty, then check for the format
                                    if (!value) {
                                        return errorMessages.empty;
                                    }
                                    // if (!validateEmail(value)) {
                                    //     return t('form.validation.email.error.text'); // Custom error message for invalid email
                                    // }
                                    return true; // If email is valid, return true
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    name="firstName"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.firstName?.message}
                                    label={t('screen.register.form.first-name.text')}
                                />
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{
                                required: errorMessages.empty,
                                validate: (value) => {
                                    // First, check if the email is empty, then check for the format
                                    if (!value) {
                                        return errorMessages.empty;
                                    }
                                    // if (!validateEmail(value)) {
                                    //     return t('form.validation.email.error.text'); // Custom error message for invalid email
                                    // }
                                    return true; // If email is valid, return true
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    name="lastName"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.lastName?.message}
                                    label={t('screen.register.form.last-name.text')}
                                />
                            )}
                        />
                    </Grid>

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
                                    // if (!validateEmail(value)) {
                                    //     return t('form.validation.email.error.text'); // Custom error message for invalid email
                                    // }
                                    return true; // If email is valid, return true
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    name="email"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.email?.message}
                                    label={t('screen.register.form.email.text')}
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
                                validate: (value) => {
                                    // First, check if the email is empty, then check for the format
                                    if (!value) {
                                        return errorMessages.empty;
                                    }
                                    // if (!validateEmail(value)) {
                                    //     return t('form.validation.email.error.text'); // Custom error message for invalid email
                                    // }
                                    return true; // If email is valid, return true
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    type="PASSWORD"
                                    name="password"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.password?.message}
                                    label={t('screen.register.form.password.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Controller
                            name="passwordRepeat"
                            control={control}
                            rules={{
                                required: errorMessages.empty,
                                validate: (value) => {
                                    // First, check if the email is empty, then check for the format
                                    if (!value) {
                                        return errorMessages.empty;
                                    }
                                    // if (!validateEmail(value)) {
                                    //     return t('form.validation.email.error.text'); // Custom error message for invalid email
                                    // }
                                    return true; // If email is valid, return true
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    type="PASSWORD"
                                    name="passwordRepeat"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.passwordRepeat?.message}
                                    label={t('screen.register.form.confirm-password.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            loading={isSubmitting}
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
