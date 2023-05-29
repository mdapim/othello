import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

const options = {
  title: 'Select the Booking date',
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date('2030-01-01'),
  minDate: new Date('2023-05-28'),
  theme: {
    background: 'bg-gray-700 dark:bg-white',
    todayBtn: '',
    clearBtn: '',
    icons: 'dark:text-black dark:bg-white',
    text: 'dark:text-black',
    disabledText: '',
    input: ' w-[400px]',
    inputIcon: '',
    selected: 'dark:bg-white border-2 border-gray-700',
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>&larr;</span>,
    next: () => <span>&rarr;</span>,
  },
  datepickerClassNames: 'top-12',
  defaultDate: new Date('2022-01-01'),
  language: 'en',
};

export default function Form() {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(Date);
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      >
        <div className=''>
          <div className=''>{/* <CalendarIcon /> */}</div>
          <input
            type='text'
            className=''
            placeholder='Select Date'
            value={selectedDate}
            onFocus={() => setShow(true)}
            readOnly
          />
        </div>
      </Datepicker>
    </div>
  );
}
