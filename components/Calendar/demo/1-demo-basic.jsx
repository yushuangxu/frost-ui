import React from 'react'
import Calendar from '../Calendar'
import dayjs from 'dayjs'
import '../style'

export default () => <Calendar
  value={dayjs('2023-11-8')}
  onChange={(date) => {
    
  }}
/>