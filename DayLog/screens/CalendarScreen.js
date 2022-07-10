import React from 'react';
import CalendarView from '../components/CalendarView';
import {StyleSheet} from 'react-native';

function CalendarScreen() {
  return <CalendarView />;
}

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default CalendarScreen;
