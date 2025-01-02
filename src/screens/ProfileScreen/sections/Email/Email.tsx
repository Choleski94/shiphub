import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import useApi from '../../../../api';
import styles from './../../ProfileScreen.styled';
import { selectUser } from '../../../../store/selectors/user';
import { Card, Button, Grid, Input } from '../../../../components';

const ProfileEmailSection = ({ onSectionPress }) => {
    const api = useApi();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const userData = useSelector(selectUser);

    const {
        control,
        setValue,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: '',
            oldEmail: '',
        },
        mode: 'all',
    });

    const errorMessages = {
        empty: t('form.validation.empty.error.text'),
        email: t('form.validation.email.error.text'),
    };

    React.useEffect(() => {
        if (userData?.email && userData?.email.length) {
            setValue('oldEmail', userData.email); // Set oldEmail value
        }
    }, [userData, setValue]);

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
                title={t('screen.profile-email.header.text')}
                description={t('screen.profile-email.paragraph.text')}
            >
                <Grid cols={1}>
                    <Controller
                        name="oldEmail"
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
                                disabled
                                type="EMAIL"
                                name="oldEmail"
                                value={field.value}
                                onBlur={field.onBlur}
                                setValue={field.onChange}
                                error={errors.oldEmail?.message}
                                label={t('screen.profile-email.form.email.text')}
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
                                type="EMAIL"
                                name="email"
                                value={field.value}
                                onBlur={field.onBlur}
                                setValue={field.onChange}
                                error={errors.email?.message}
                                label={t('screen.profile-email.form.email-confirm.text')}
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

export default ProfileEmailSection;
