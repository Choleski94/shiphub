import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './WelcomeScreen.styled';
import { withPublicNav } from '../../utils/hocs';
import { ScreenView, Typography, Illustration, Button, Grid } from '../../components';

const WelcomeScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('DeliveryScreen');
    };

    return (
        <ScreenView withWhiteBg>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.root}>
                <Typography.Heading type="PRIMARY">
                        {t('screen.welcome.title.text')}
                    </Typography.Heading>
                    <Typography.Heading>
                        <Typography.Inline color="#FFC107">
                            {t('screen.welcome.brand.text')}
                        </Typography.Inline>
                        <Typography.Inline type="PRIMARY">
                            {t('screen.welcome.brand.accent.text')}
                        </Typography.Inline>
                    </Typography.Heading>
                    <Typography.Paragraph>
                        {t('screen.welcome.description.text')}
                    </Typography.Paragraph>

                    <View style={styles.brandImg}>
                        <Illustration.Welcome
                            width="100%"
                        />
                    </View>

                    <Grid cols={1}>
                        <Button
                            onPress={onConfirmPressed}
                            text={t('screen.welcome.form.continue.text')}
                        />
                    </Grid>
                </View>
            </ScrollView>
        </ScreenView>
    );
};

export default withPublicNav(WelcomeScreen);
