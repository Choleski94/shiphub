import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import useApi from '../../api';
import { withPublicNav } from '../../utils/hocs';
import styles from './ConfirmEmailScreen.styled';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const ConfirmEmailScreen = () => {
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
            code: '',
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
        //         navigation.navigate('WelcomeScreen');
        //     })
        //     .catch((error) => {
        //         console.error('Login error:', error);
        //     });
    };

    const onConfirmPressed = () => handleSubmit(onSubmit)();

    const onLogInPress = () => navigation.navigate('LogInScreen');

    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

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
                        <Controller
                            name="code"
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
                                    type="TEXT"
                                    name="code"
                                    value={field.value}
                                    onBlur={field.onBlur}
                                    setValue={field.onChange}
                                    error={errors.code?.message}
                                    placeholder={t('screen.confirm-email.code.placeholder.text')}
                                />
                            )}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            loading={isSubmitting}
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
