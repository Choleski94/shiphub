import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './NewPasswordScreen.styled';
import { withPublicNav } from '../../utils/hocs';
import { ScreenView, Typography, Grid, Button, Input } from '../../components';

const NewPasswordScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const [data, setData] = React.useState({
        code: '',
        password: '',
        passwordRepeat: '',
    });

    const onSubmitPressed = () => {
        navigation.navigate('DeliveryScreen');
    };

    const onLogInPressed = () => {
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
                        {t('screen.new_password.header-01.text')}
                    </Typography.Heading>
                    <Typography.Heading>
                        {t('screen.new_password.header-02.text')}
                    </Typography.Heading>
                    <Typography.Paragraph>
                        {t('screen.new_password.paragraph.text')}
                    </Typography.Paragraph>

                    <Grid cols={1}>
                        <Input
                            name="code"
                            value={data.code}
                            setValue={onChangeValue}
                            label={t('screen.new_password.form.code.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="PASSWORD"
                            name="password"
                            value={data.password}
                            setValue={onChangeValue}
                            label={t('screen.new_password.form.password.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Input
                            type="PASSWORD"
                            name="passwordRepeat"
                            setValue={onChangeValue}
                            value={data.passwordRepeat}
                            label={t('screen.new_password.form.password-confirm.text')}
                        />
                    </Grid>
    
                    <Grid cols={1}>
                        <Button
                            onPress={onSubmitPressed}
                            text={t('screen.new_password.form.continue.text')}
                        />
                    </Grid>

                    <Grid cols={1}>
                        <Button
                            type="TERTIARY"
                            onPress={onLogInPressed}
                            text={t('screen.new_password.login.text')}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(NewPasswordScreen);
