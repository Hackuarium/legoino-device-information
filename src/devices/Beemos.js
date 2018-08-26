'use strict';

module.exports = {
  name: 'Bee Monistoring System',
  kind: 'Beemos',
  numberParameters: 32,
  numberLogParameters: 26,
  id: 'B',
  description: 'Bee Monistoring System data result',
  url: '',
  parameters: [
    {
      label: 'A',
      variable: 'externalTemperature',
      name: 'Ext temperature',
      description: 'External temperature',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'B',
      variable: 'externalHumidity',
      name: 'Ext humidity',
      description: 'External humidity',
      factor: 100,
      unit: '%',
      writable: false
    },

    {
      label: 'C',
      variable: 'luminosity',
      name: 'Luminosity',
      description: 'Luminosity (Arbitrary unit)',
      factor: 10.24,
      unit: '',
      writable: false
    },

    {
      label: 'D',
      variable: 'pressure',
      name: 'Pressure',
      description: 'Press',
      factor: 10,
      unit: 'mbar',
      writable: false
    },

    {
      label: 'E',
      variable: 'internalTemperature',
      name: 'Int temperature',
      description: 'Internal temperature',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'F',
      variable: 'internalHumidity',
      name: 'Int humidity',
      description: 'Internal humidity',
      factor: 100,
      unit: '%',
      writable: false
    },

    {
      label: 'G',
      variable: 'internalTemperatureA',
      name: 'Int temperature A',
      description: 'Internal temperature A',
      factor: 100,
      unit: '°C',
      writable: false
    },
    {
      label: 'H',
      variable: 'internalTemperatureB',
      name: 'Int temperature B',
      description: 'Internal temperature B',
      factor: 100,
      unit: '°C',
      writable: false
    },

    {
      label: 'I',
      variable: 'weight',
      name: 'Weight',
      description: 'Weight',
      factor: 100,
      unit: 'kg',
      writable: false
    },

    {
      label: 'J',
      variable: 'battery',
      name: 'Battery',
      description: 'Battery voltage',
      factor: 100,
      unit: 'V',
      writable: false
    },

    {
      label: 'K',
      variable: 'gate1In',
      name: 'Gate 1 IN',
      description: 'Number of input on gate 1',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'L',
      variable: 'gate1Out',
      name: 'Gate 1 OUT',
      description: 'Number of output on gate 1',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'M',
      variable: 'gate2In',
      name: 'Gate 2 IN',
      description: 'Number of input on gate 2',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'N',
      variable: 'gate2Out',
      name: 'Gate 2 OUT',
      description: 'Number of output on gate 2',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'O',
      variable: 'gate3In',
      name: 'Gate 3 IN',
      description: 'Number of input on gate 3',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'P',
      variable: 'gate3Out',
      name: 'Gate 3 OUT',
      description: 'Number of output on gate 3',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'Q',
      variable: 'gate4In',
      name: 'Gate 4 IN',
      description: 'Number of input on gate 4',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'R',
      variable: 'gate4Out',
      name: 'Gate 4 OUT',
      description: 'Number of output on gate 4',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'S',
      variable: 'gate5In',
      name: 'Gate 5 IN',
      description: 'Number of input on gate 5',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'T',
      variable: 'gate5Out',
      name: 'Gate 5 OUT',
      description: 'Number of output on gate 5',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'U',
      variable: 'gate6In',
      name: 'Gate 6 IN',
      description: 'Number of input on gate 6',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'V',
      variable: 'gate6Out',
      name: 'Gate 6 OUT',
      description: 'Number of output on gate 6',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'W',
      variable: 'gate7In',
      name: 'Gate 7 IN',
      description: 'Number of input on gate 7',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'X',
      variable: 'gate7Out',
      name: 'Gate 7 OUT',
      description: 'Number of output on gate 7',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'Y',
      variable: 'gate8In',
      name: 'Gate 8 IN',
      description: 'Number of input on gate 8',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'Z',
      variable: 'gate8Out',
      name: 'Gate 8 OUT',
      description: 'Number of output on gate 8',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AA',
      variable: 'weightInternalUnit',
      name: 'Weight internal unit',
      description: 'Weight in internal unit',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AB',
      variable: 'weightOffset',
      name: 'Weight offset',
      description: 'Offset to convert weight from internal unit',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AC',
      variable: 'weightFactor',
      name: 'Weight factor',
      description: 'Factor to convert the weight from internal unit',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AD',
      variable: 'charging',
      name: 'Charging',
      description: 'Indication showing if the battery is charging',
      factor: 1,
      unit: '',
      writable: false
    },

    {
      label: 'AE',
      variable: 'loggingInterval',
      name: 'Logging interval',
      description: 'Interval in seconds between logs',
      factor: 1,
      unit: 's',
      writable: true
    }
  ]
};
