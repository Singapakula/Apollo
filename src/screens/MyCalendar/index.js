import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Modal, Image,Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styles } from './styles';
import TickIcon from '../../assets/tick.png';

const MyCalendar = () => {
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [daysInSelectedMonth, setDaysInSelectedMonth] = useState('');
    const [saturdaysInSelectedMonth, setSaturdaysInSelectedMonth] = useState('');
    const [sundaysInSelectedMonth, setSundaysInSelectedMonth] = useState('');
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [isSelected, setSelection] = useState(true);
    const [isSundays, setIsSundays] = useState(true);
    const [manualDate, setManualDate] = useState('');

    const CustomCheckbox = ({ onPress, mystate }) => {
        return (
            <Pressable onPress={onPress}>
                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            borderWidth: 2,
                            borderColor: 'black',
                            borderRadius: 5,
                            backgroundColor: 'gray',
                        }}>
                        {mystate? (
                            <Image source={TickIcon} style={{ height: 20, width: 20, tintColor: '#fff' }} />
                        ) : null}
                    </View>
                </View>
            </Pressable>
        );
    };

    const onDayPress = (day) => {
        setSelectedStartDate(day.dateString);
        setIsCalendarVisible(false);
        updateDaysInMonth(day);
    };

    const handlePress = () => {
        setSelection(!isSelected);
    };

    const handlePresssunday = () => {
        setIsSundays(!isSundays);
    };

    const onMonthChange = () => {
        // No need to calculate days on month change
    };

    const updateDaysInMonth = (selectedDay) => {
        const year = parseInt(selectedDay.year);
        const monthNumber = parseInt(selectedDay.month) - 1;

        const daysInMonth = new Date(year, monthNumber + 1, 0).getDate();
        setDaysInSelectedMonth(`Number of days: ${daysInMonth}`);

        let saturdays = 0;
        let sundays = 0;

        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(year, monthNumber, day);
            if (currentDate.getDay() === 6) {
                saturdays++;
            } else if (currentDate.getDay() === 0) {
                sundays++;
            }
        }

        setSaturdaysInSelectedMonth(`Number of Saturdays: ${saturdays}`);
        setSundaysInSelectedMonth(`Number of Sundays: ${sundays}`);
    };

    const onManualDateChange = (text) => {
        setManualDate(text);
    };

    const onManualDateSubmit = () => {
        setSelectedStartDate(manualDate);
        setManualDate('');
        setIsCalendarVisible(false);
        updateDaysInMonth({ dateString: manualDate });
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setIsCalendarVisible(true)} style={styles.startdate}>
                <Text>{selectedStartDate ? selectedStartDate : 'Select Start Date'}</Text>
            </Pressable>

            <Modal
                visible={isCalendarVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsCalendarVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Calendar onDayPress={onDayPress} onMonthChange={onMonthChange} markedDates={{ [selectedStartDate]: { selected: true, marked: true, selectedColor: 'blue' } }} />
                    </View>
                </View>
            </Modal>

            <TextInput style={styles.textInput} editable={false} placeholder={'Number of days: ' + daysInSelectedMonth} />

            <View style={styles.checkboxwrap}>
                <Text style={{ marginRight: 20 }}>Enable Saturdays</Text>
                <CustomCheckbox onPress={handlePress}
                    mystate={isSelected}
                />
            </View>

            {isSelected ? (
                <TextInput style={styles.textInput} editable={false} placeholder={'Saturdays are:' + saturdaysInSelectedMonth} value={saturdaysInSelectedMonth} />
            ) : null}

            <View style={styles.checkboxwrap2}>
                <Text style={{ marginRight: 30 }}>Enable Sundays</Text>
                <CustomCheckbox onPress={handlePresssunday}
                    mystate={isSundays}
                />
            </View>

            {isSundays ? (
                <TextInput style={styles.textInput} editable={false} placeholder={'Sundays are:' + sundaysInSelectedMonth} value={sundaysInSelectedMonth} />
            ) : null}

            <TextInput style={[styles.textInput, {}]} placeholder="Enter Date Manually" value={manualDate} onChangeText={onManualDateChange} />

            <Pressable onPress={onManualDateSubmit} style={[styles.submitButton, { backgroundColor: manualDate.length === 0 ? 'gray' : '#2b98f5' }]}>
                <Text style={{ color: '#fff' }}>Submit Manual Date</Text>
            </Pressable>

            <Pressable onPress={() => Alert.alert('Your data is submitted successfully')} style={styles.submitButton}>
                <Text style={{ color: '#fff' }}>Submit</Text>
            </Pressable>
        </View>
    );
};

export default MyCalendar;
