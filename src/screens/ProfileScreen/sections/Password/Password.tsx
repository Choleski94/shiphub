import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';

import useApi from '../../../../api';
import styles from './../../ProfileScreen.styled';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfilePasswordSection = ({ onSectionPress }) => {
    const api = useApi();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            password: '',
            oldPassword: '',
        },
        mode: 'all',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text'),
    };

    const onSubmit = (data: any) => {
        // api.user.login(data)
        //     .then((user) => {
        //         dispatch(logInUser(user));
        //     })
        //     .catch((error) => {
        //         console.error('Login error:', error);
        //     });
    };

    const onSavePressed = () => handleSubmit(onSubmit)();

    const onExitPressed = () => onSectionPress();

    return (
        <>
            <Card
                title={t('screen.profile-password.header.text')}
                description={t('screen.profile-password.paragraph.text')}
            >
                <Grid cols={1}>
                    <Controller
                        name="oldPassword"
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
                                name="oldPassword"
                                value={field.value}
                                onBlur={field.onBlur}
                                setValue={field.onChange}
                                error={errors.oldPassword?.message}
                                label={t('screen.profile-password.form.password.text')}
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
                                label={t('screen.profile-password.form.password-new.text')}
                            />
                        )}
                    />
                </Grid>
            </Card>

            <View style={styles.logout}>
                <Button
                    type="PRIMARY"
                    loading={isSubmitting}
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
