import React from 'react';
import { View } from 'react-native';

import styles from './../../ReportScreen.styled';
import { useDateFormatter } from '../../../../utils/hooks';
import { Grid, Input, Card, Button, CalendarPicker } from '../../../../components';

const ReportCalendarSection = ({ onSectionPress }) => {
    const dateFormatter = useDateFormatter();

    const [data, setData] = React.useState({ startDate: '', endDate: '' });

    const minDate = new Date(); // Today
    const maxDate = new Date(2024, 12, 3);

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    const onDateChange = (date, type) => {
        console.log(date, type)
        if (type === 'END_DATE') {
            setData({
                ...data,
                endDate: date,
            });
        } else {
            setData({
                ...data,
                startDate: date,
            });
            onSectionPress('LOGS')
        }
    };

    const onDateConfirmPressed = () => null;

    return (
        <>
            <Card title="Enter date range">
                <Grid cols={2}>
                    <Input
                        disabled
                        type="DATE"
                        name="startDate"
                        label="Start Date"
                        placeholder="DD/MM/YYYY"
                        setValue={onChangeValue}
                        value={dateFormatter(data?.startDate, 'DD/MM/YYYY')}
                    />
                    <Input
                        disabled
                        type="DATE"
                        name="endDate"
                        label="End Date"
                        placeholder="DD/MM/YYYY"
                        setValue={onChangeValue}
                        value={dateFormatter(data?.endDate, 'DD/MM/YYYY')}
                    />
                </Grid>
            </Card>
            <Card>
                <CalendarPicker
                    // scrollable
                    startFromMonday
                    minDate={minDate}
                    maxDate={maxDate}
                    scaleFactor={375}
                    allowRangeSelection
                    // weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
                    // months={[
                    //     "Janeiro",
                    //     "Fevereiro",
                    //     "Março",
                    //     "Abril",
                    //     "Maio",
                    //     "Junho",
                    //     "Julho",
                    //     "Agosto",
                    //     "Setembro",
                    //     "Outubro",
                    //     "Novembro",
                    //     "Dezembro",
                    // ]}
                    // nextTitle="Próximo"
                    // previousTitle="Anterior"
                    // selectedDayColor="#66ff33"
                    // todayBackgroundColor="#e6ffe6"
                    // selectedDayTextColor="#000000"
                    textStyle={{
                        // fontFamily: "Cochin",
                        color: "#000000",
                    }}
                    onDateChange={onDateChange}
                />
            </Card>
            <View style={styles.logout}>
                <Button
                    type="PRIMARY"
                    text="CONFIRM DATES"
                    onPress={onDateConfirmPressed}
                />
            </View>
        </>
    )
}

export default ReportCalendarSection;
