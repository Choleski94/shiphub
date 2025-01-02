import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import useApi from '../../api';
import { withPublicNav } from '../../utils/hocs';
import styles from './ForgotPasswordScreen.styled';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const ForgotPasswordScreen = () => {
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
        },
        mode: 'all',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text'),
    };

    const onSubmit = (data: any) => {
        api.user.login(data)
            .then(() => {
                // dispatch(logInUser(user));
                navigation.navigate('NewPasswordScreen');
            })
            .catch((error) => {
                console.error('Login error:', error);
            });
    };

    const onSendPressed = () => handleSubmit(onSubmit)();

    const onBackLogInPress = () => navigation.navigate('LogInScreen');

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
                                    label={t('screen.forgot_password.form.email.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            loading={isSubmitting}
                            onPress={onSendPressed}
                            text={t('screen.forgot_password.form.btn.recover.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onBackLogInPress}
                            text={t('screen.forgot_password.login.text')}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(ForgotPasswordScreen);
