'use strict';

module.exports = {
  name: 'Open bioreactor v6',
  kind: 'OpenBio6',
  description: '',
  url: '',
  id: '6',
  numberParameters: 68,
  numberLogParameters: 26,
  parameters: [
    {
      label: 'A',
      variable: 'externalTemperature1',
      name: 'T° EXT 1',
      description: 'External temperature 1',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'B',
      variable: 'externalTemperature2',
      name: 'T° EXT 2',
      description: 'External temperature 2',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'C',
      variable: 'pcbTemp',
      name: 'T° PCB',
      description: 'Temperature of the bioreactor circuit',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'D',
      variable: 'pidTemp',
      name: 'Pid',
      description: 'PID absolute value',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'E',
      variable: 'targetTemp',
      name: 'T° target',
      description: 'Target temperature',
      factor: 100,
      unit: '°C',
      writable: true,
    },

    {
      label: 'F',
      variable: 'weight',
      name: 'Weight',
      description: 'Weight of the bioreactor tank, in internal value',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'G',
      variable: 'grWeight',
      name: 'Weight (g)',
      description: 'Weight of the bioreactor tank, in gr if calibrated',
      factor: 1,
      unit: 'g',
      writable: false,
    },

    {
      label: 'H',
      variable: 'weightLastEvent',
      name: 'Weight since last event',
      description: 'Save the last weight to avoid problems when there are power outages',
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
      variable: 'currentStep',
      name: 'Current step',
      description: 'Current step in the pipeline',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'X',
      variable: 'currentWaitTime',
      name: 'Current wait time',
      description: 'Current step wait time',
      factor: 1,
      unit: 'min',
      writable: false,
    },

    {
      label: 'Y',
      variable: 'error',
      name: 'Error',
      unit: '',
      factor: 1,
      description: `
            bit 0: pcb probe, 1: liquid probe 1, 2: liquid probe 2, 3: pcb temperature, 4: liquid temperature 1, 5: liquid temperature 2, 6: target temp. range, 7: weight range`,
      writable: true,
      flags: {
        0: 'Pcb probe failed (one wire not answering)',
        1: 'Liquid probe in the top failed (one wire not answering)',
        2: 'Liquid probe in the bottom failed (one wire not answering)',
        3: 'Temperature of PCB is out of range',
        4: 'Temperature of liquid in the top is out of range',
        5: 'Temperature of liquid in the bottom is out of range',
        6: 'Target temperature is out of range',
        7: 'Weight out of range',
      },
    },

    {
      label: 'Z',
      variable: 'status',
      name: 'Status',
      description: `Status of the Bioreactor, the bits of this integer code
        for the state of specific elements of the reactor (eg. motor ON/OFF, PUMP ON/OFF etc.).
        bits: 0: pid, 1: stepper, 2: pump 1, 3: pump 2, 4: pump 3, 5: pump 4, 6: ph, 7: gas, 8: sedimentation, 9: filling, 10: emptying, 11: ph calibration, 12: acid addition, 13: base addition`,
      factor: 1,
      unit: '',
      writable: true,
      flags: {
        0: 'Heating control',
        1: 'Agitation control',
        2: 'Food control 1',
        3: 'Food control 2',
        4: 'Food control 3',
        5: 'Food control 4',
        6: 'pH control',
        7: 'Gas control',
        8: 'Sedimentation stage',
        9: 'Filling pump',
        10: 'Emptying pump',
        11: 'pH calibration',
        12: 'Acid addition',
        13: 'Base addition',
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
      variable: 'weightFactor',
      name: 'Weight factor',
      description: 'Factor allowing to convert the internal weight value to g',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'AE',
      variable: 'weightOffset',
      name: 'Weight offset',
      description: '',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'AF',
      variable: 'sedimentationTime',
      name: 'Sedimentation time',
      description: 'Time to wait in (minutes) to wait without rotation before emptying',
      factor: 1,
      unit: 'min',
      writable: false,
    },

    {
      label: 'AG',
      variable: 'fillingTime',
      name: 'Filling time',
      description: 'Time to wait in (minutes) to stay in the filled state',
      factor: 1,
      unit: 'min',
      writable: false,
    },

    {
      label: 'AH',
    },

    {
      label: 'AI',
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
      description: 'bits: 0: pid, 1: stepper, 2: pump 1, 3: pump 2, 4: pumpo 3, 5: pump 4',
      factor: 1,
      unit: '',
      writable: true,
      flags: {
        0: 'pid',
        1: 'stepper',
        2: 'output 1',
        3: 'output 2',
        4: 'output 3',
        5: 'output 4',
      },
    },

    {
      label: 'BA',
      variable: 'step01',
      name: 'Step 1',
      description: 'Step 1',
    },

    {
      label: 'BB',
      variable: 'step02',
      name: 'Step 2',
      description: 'Step 2',
    },

    {
      label: 'BC',
      variable: 'step03',
      name: 'Step 3',
      description: 'Step 3',
    },

    {
      label: 'BD',
      variable: 'step04',
      name: 'Step 4',
      description: 'Step 4',
    },

    {
      label: 'BE',
      variable: 'step05',
      name: 'Step 5',
      description: 'Step 5',
    },

    {
      label: 'BF',
      variable: 'step06',
      name: 'Step 6',
      description: 'Step 6',
    },

    {
      label: 'BG',
      variable: 'step07',
      name: 'Step 7',
      description: 'Step 7',
    },

    {
      label: 'BH',
      variable: 'step08',
      name: 'Step 8',
      description: 'Step 8',
    },

    {
      label: 'BI',
      variable: 'step09',
      name: 'Step 9',
      description: 'Step 9',
    },

    {
      label: 'BJ',
      variable: 'step10',
      name: 'Step 10',
      description: 'Step 10',
    },

    {
      label: 'BK',
      variable: 'step11',
      name: 'Step 11',
      description: 'Step 11',
    },

    {
      label: 'BL',
      variable: 'step12',
      name: 'Step 12',
      description: 'Step 12',
    },

    {
      label: 'BM',
      variable: 'step13',
      name: 'Step 13',
      description: 'Step 13',
    },

    {
      label: 'BN',
      variable: 'step14',
      name: 'Step 14',
      description: 'Step 14',
    },

    {
      label: 'BO',
      variable: 'step15',
      name: 'Step 15',
      description: 'Step 15',
    },

    {
      label: 'BP',
      variable: 'step16',
      name: 'Step 16',
      description: 'Step 16',
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
        'bits: 0: pid, 1: stepper, 2: pump 1, 3: pump 2, 4: pumpo 3, 5: pump 4, 6: ph, 7: gas, 8: sedimentation, 9: filling, 10: emptying, 11: ph calibration, 12: acid addition, 13: base addition',
      flags: {
        0: 'Heating control',
        1: 'Agitation control',
        2: 'Food control 1',
        3: 'Food control 2',
        4: 'Food control 3',
        5: 'Food control 4',
        6: 'pH control',
        7: 'Gas control',
        8: 'Sedimentation stage',
        9: 'Filling pump',
        10: 'Emptying pump',
        11: 'pH calibration',
        12: 'Acid addition',
        13: 'Base addition',
      },
    },
    {
      id: 4,
      name: 'Status disable',
      description:
        'bits: 0: pid, 1: stepper, 2: pump 1, 3: pump 2, 4: pumpo 3, 5: pump 4, 6: ph, 7: gas, 8: sedimentation, 9: filling, 10: emptying, 11: ph calibration, 12: acid addition, 13: base addition',
      flags: {
        0: 'Heating control',
        1: 'Agitation control',
        2: 'Food control 1',
        3: 'Food control 2',
        4: 'Food control 3',
        5: 'Food control 4',
        6: 'pH control',
        7: 'Gas control',
        8: 'Sedimentation stage',
        9: 'Filling pump',
        10: 'Emptying pump',
        11: 'pH calibration',
        12: 'Acid addition',
        13: 'Base addition',
      },
    },
    {
      id: 6,
      name: 'Error: failed',
      description: `
            bit 0: pcb probe, 1: liquid probe 1, 2: liquid probe 2, 3: pcb temperature, 4: liquid temperature 1, 5: liquid temperature 2, 6: target temp. range, 7: weight range`,
      writable: true,
      flags: {
        0: 'Pcb probe failed (one wire not answering)',
        1: 'Liquid probe in the top failed (one wire not answering)',
        2: 'Liquid probe in the bottom failed (one wire not answering)',
        3: 'Temperature of PCB is out of range',
        4: 'Temperature of liquid in the top is out of range',
        5: 'Temperature of liquid in the bottom is out of range',
        6: 'Target temperature is out of range',
        7: 'Weight out of range',
      },
    },
    {
      id: 7,
      name: 'Error: recover',
      description: `
            bit 0: pcb probe, 1: liquid probe 1, 2: liquid probe 2, 3: pcb temperature, 4: liquid temperature 1, 5: liquid temperature 2, 6: target temp. range, 7: weight range`,
      writable: true,
      flags: {
        0: 'Pcb probe failed (one wire not answering)',
        1: 'Liquid probe in the top failed (one wire not answering)',
        2: 'Liquid probe in the bottom failed (one wire not answering)',
        3: 'Temperature of PCB is out of range',
        4: 'Temperature of liquid in the top is out of range',
        5: 'Temperature of liquid in the bottom is out of range',
        6: 'Target temperature is out of range',
        7: 'Weight out of range',
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
