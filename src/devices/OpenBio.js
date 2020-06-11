'use strict';

module.exports = {
  name: 'Open bioreactor',
  kind: 'OpenBio',
  description: '',
  url: '',
  id: '$',
  numberParameters: 52,
  numberLogParameters: 26,
  parameters: [
    {
      label: 'A',
      variable: 'liquidTemp',
      name: 'T° LIQ',
      description: 'Temperature of the bioreactor solution',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'B',
      variable: 'pcbTemp',
      name: 'T° PCB',
      description: 'Temperature of the bioreactor circuit',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'C',
      variable: 'pidTemp',
      name: 'Pid',
      description: 'PID absolute value',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'D',
      variable: 'targetTemp',
      name: 'T° target',
      description: 'Target temperature',
      factor: 100,
      unit: '°C',
      writable: true,
    },

    {
      label: 'E',
      variable: 'weight',
      name: 'Weight',
      description: 'Weight of the bioreactor tank, in internal value',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'F',
      variable: 'grWeight',
      name: 'Weight (g)',
      description: 'Weight of the bioreactor tank, in gr if calibrated',
      factor: 1,
      unit: 'g',
      writable: false,
    },

    {
      label: 'G',
      variable: 'waitSinceLast',
      name: 'Time since last event',
      description: 'Time in min since last weight event',
      factor: 1,
      unit: 'min',
      writable: false,
    },

    {
      label: 'H',
      variable: 'minWeight',
      name: 'Weight min',
      description: 'Weight min in internal unit',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'I',
      variable: 'maxWeight',
      name: 'Weight max',
      description: 'Weight max in internal unit',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'J',
    },

    {
      label: 'K',
    },

    {
      label: 'L',
    },

    {
      label: 'M',
    },

    {
      label: 'N',
    },

    {
      label: 'O',
    },

    {
      label: 'P',
    },

    {
      label: 'Q',
    },

    {
      label: 'R',
    },

    {
      label: 'S',
    },

    {
      label: 'T',
    },

    {
      label: 'U',
    },

    {
      label: 'V',
    },

    {
      label: 'W',
    },

    {
      label: 'X',
    },

    {
      label: 'Y',
      variable: 'error',
      name: 'Error',
      unit: '',
      factor: 1,
      description: `
            bit 0: pcb probe, 1: liquid probe, 2: pcb temperature,
            3: liquid temperature, 4: target temp. range, 5: weight range`,
      writable: true,
      flags: {
        pcbProbe: {
          bit: 0,
          description: 'PCB temperature probe not responding',
        },
        liquidProbe: {
          bit: 1,
          description: 'Liquid temperature probe not responding',
        },
        pcbTemperature: {
          bit: 2,
          description: 'PCB temperature out of range',
        },
        liquidTemperature: {
          bit: 3,
          description: 'Liquid temperature out of range',
        },
        targetTemperature: {
          bit: 4,
          description: 'Target temperature out of range',
        },
        weight: {
          bit: 5,
          description: 'Weight out of range',
        },
      },
    },

    {
      label: 'Z',
      variable: 'status',
      name: 'Status',
      description: `Status of the Bioreactor, the bits of this integer code
        for the state of specific elements of the reactor (eg. motor ON/OFF, PUMP ON/OFF etc.).
        bits: 0: stepper, 1: weight, 2: pid, 7: sedimentation, 8: filling, 9: emptying
        `,
      factor: 1,
      unit: '',
      writable: true,
      flags: {
        stepper: {
          bit: 0,
          description: 'Stepper running',
        },
        food: {
          bit: 1,
          description: 'Food running',
        },
        pid: {
          bit: 2,
          description: 'PID running',
        },
        sedimentation: {
          bit: 7,
          description: 'Sedimentation running',
        },
        filling: {
          bit: 8,
          description: 'Filling tank',
        },
        emptying: {
          bit: 9,
          description: 'Emptying tank',
        },
      },
    },

    {
      label: 'AA',
      variable: 'stepperSpeed',
      name: 'Stepper speed',
      description: '',
      factor: 1,
      unit: 'RPM',
      writable: true,
    },

    {
      label: 'AB',
      variable: 'stepperSteps',
      name: 'Stepper steps',
      description:
        'Number of step before changing direction. 1 tour = 200 steps',
      factor: 1,
      unit: '',
      writable: true,
    },

    {
      label: 'AC',
      variable: 'stepperOffDelay',
      name: 'Stepper off delay',
      description: 'Time to wait in (s) before between stirring periods',
      factor: 1,
      unit: 's',
      writable: true,
    },

    {
      label: 'AD',
    },

    {
      label: 'AE',
    },

    {
      label: 'AF',
      variable: 'sedTime',
      name: 'Sedimentation Time',
      description:
        'Sedimentation time in min after Semi-batch operation,' +
        'corresponds to the waiting time without stirring before emptying the reactor to the minimum level',
      min: 0,
      max: 32767,
      factor: 1,
      unit: 'min',
      writable: true,
    },

    {
      label: 'AG',
      variable: 'filledTime',
      name: 'Filled Time',
      description:
        'Filled time in min after Semi-batch operation,' +
        'corresponds to the total time with and without stirring before emptying the reactor to the minimum level' +
        'must be set longer than the sedimentation time if stirring is desired',
      min: 0,
      max: 32767,
      factor: 1,
      unit: 'min',
      writable: true,
    },

    {
      label: 'AH',
      variable: 'weightFactor',
      name: 'Weight factor',
      description: 'Factor allowing to convert the internal weight value to g',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'AI',
      variable: 'weightOffset',
      name: 'Weight offset',
      description: '',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'AJ',
    },

    {
      label: 'AK',
    },

    {
      label: 'AL',
    },

    {
      label: 'AM',
    },

    {
      label: 'AN',
    },

    {
      label: 'AO',
    },

    {
      label: 'AP',
    },

    {
      label: 'AQ',
    },

    {
      label: 'AR',
    },

    {
      label: 'AS',
    },

    {
      label: 'AT',
    },

    {
      label: 'AU',
    },

    {
      label: 'AV',
    },

    {
      label: 'AW',
    },

    {
      label: 'AX',
    },

    {
      label: 'AY',
    },

    {
      label: 'AZ',
      variable: 'enable',
      name: 'Enable',
      description: 'pid - food - stepper : ex. 1: only stepper',
      factor: 1,
      unit: '',
      writable: true,
      flags: {
        stepper: {
          bit: 0,
          description: 'Stepper control',
        },
        food: {
          bit: 1,
          description: 'Food control',
        },
        pid: {
          bit: 2,
          description: 'PID control',
        },
      },
    },
  ],
  events: [
    {
      id: 1,
      name: 'Arduino boot',
      description: '',
    },
    {
      id: 2,
      name: 'Set safe mode',
      description: '',
    },
    {
      id: 3,
      name: 'Status enable',
      description:
        '0:stepper, 1:food, 2:pid, 7:sedimentation, 8:filling, 9:emptying',
      flags: {
        0: 'stepper',
        1: 'food',
        2: 'pid',
        7: 'sedimentation',
        8: 'filling',
        9: 'emptying',
      },
    },
    {
      id: 4,
      name: 'Status disable',
      description:
        '0:stepper, 1:food, 2:pid, 7:sedimentation, 8:filling, 9:emptying',
      flags: {
        0: 'stepper',
        1: 'food',
        2: 'pid',
        7: 'sedimentation',
        8: 'filling',
        9: 'emptying',
      },
    },
    {
      id: 6,
      name: 'Error: failed',
      description:
        '0:stepper, 1:food, 2:pid, 7:sedimentation, 8:filling, 9:emptying',
      flags: {
        0: 'pcb temperature probe',
        1: 'liquid temperature probe',
        2: 'pcb temperature range',
        3: 'liquid temperature range',
        4: 'target temperature range',
        5: 'weight range',
      },
    },
    {
      id: 7,
      name: 'Error: recover',
      description:
        '0:stepper, 1:food, 2:pid, 7:sedimentation, 8:filling, 9:emptying',
      flags: {
        0: 'pcb temperature probe',
        1: 'liquid temperature probe',
        2: 'pcb temperature range',
        3: 'liquid temperature range',
        4: 'target temperature range',
        5: 'weight range',
      },
    },
    {
      id: 20,
      name: 'Rotation start',
      description: '',
    },
    {
      id: 21,
      name: 'Rotation stop',
      description: '',
    },
    {
      id: 150,
      name: 'Not found log entry N',
      description: '',
    },
    {
      id: 255,
      name: 'Save all parameters',
      description: '',
    },
    {
      id: 256,
      name: 'Change value of A',
      description: '',
    },
    {
      id: 257,
      name: 'Change value of B',
      description: '',
    },
  ],
};
