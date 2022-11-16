'use strict';

module.exports = {
  name: 'pHMeter',
  kind: 'pHMeter',
  description: 'pH and conductivity meter',
  url: 'https://github.com/Hackuarium/phmeter',
  id: 'P',
  numberParameters: 64,
  numberLogParameters: 26,
  parameters: [
    {
      label: 'A',
      variable: 'temperature1',
      name: 'T° 1',
      description: 'Temperature 1',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'B',
      variable: 'temperature2',
      name: 'T° 2',
      description: 'Temperature 2',
      factor: 100,
      unit: '°C',
      writable: false,
    },

    {
      label: 'C',
      variable: 'phRaw',
      name: 'pH Raw',
      description: 'pH of the test solution in ADC units',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'D',
      variable: 'ph',
      name: 'pH',
      description: 'pH of the test solution in potential hydrogen units',
      factor: 100,
      unit: '',
      writable: false,
    },

    {
      label: 'E',
      variable: 'phTarget',
      name: 'pH target',
      description: 'Target pH',
      factor: 100,
      unit: '°C',
      writable: true,
    },

    {
      label: 'F',
      variable: 'eCRaw',
      name: 'Electric Conductivity raw',
      description: 'Electric Conductivity (raw values)',
      factor: 1,
      unit: '',
      writable: false,
    },

    {
      label: 'G',
      variable: 'eC',
      name: 'Electric Conductivity (uS/cm)',
      description: 'Electric Conductivity in unit of μSiemens/cm',
      factor: 1,
      unit: 'uS/cm',
      writable: false,
    },

    {
      label: 'H',
    },

    {
      label: 'I',
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
      variable: 'eC',
      name: 'Electric Conductivity (uS/cm)',
      description: 'Electric Conductivity in unit of μSiemens/cm',
      factor: 1,
      unit: 'uS/cm',
      writable: false,
    },

    {
      label: 'R',
      variable: 'eC',
      name: 'Electric Conductivity (uS/cm)',
      description: 'Electric Conductivity in unit of μSiemens/cm',
      factor: 1,
      unit: 'uS/cm',
      writable: false,
    },

    {
      label: 'S',
      variable: 'eC',
      name: 'Electric Conductivity (uS/cm)',
      description: 'Electric Conductivity in unit of μSiemens/cm',
      factor: 1,
      unit: 'uS/cm',
      writable: false,
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
            bit 0: liquid probe 1, 1: liquid probe 2, 2: liquid temperature 1, 3: liquid temperature 2, 4: pH probe, 5: EC probe`,
      writable: true,
      flags: {
        0: 'Liquid probe in the top failed (one-wire not answering)',
        1: 'Liquid probe in the bottom failed (one-wire not answering)',
        2: 'Temperature of liquid in the top is outside range',
        3: 'Temperature of liquid in the bottom is outside range',
        4: 'pH is out of range',
        5: 'EC is out of range',
      },
    },

    {
      label: 'Z',
      variable: 'status',
      name: 'Status',
      description: `Status of the test, the bits of this integer code
        for the state of specific elements of the test (eg. PUMP ON/OFF, EC reading ON/OFF, etc.).
        bits: 0: alkaline control, 1: acid control, 2: alkaline/acid aux. control, 3: alkaline/acid aux control, 4: EC reading, 5: EC calibration, 6: pH control, 7: pH calibration, 8: acid addition, 9: alkaline addition, 10: test probes`,
      factor: 1,
      unit: '',
      writable: true,
      flags: {
        0: 'alkaline control',
        1: 'acid control',
        2: 'alkaline/acid aux. control 1',
        3: 'alkaline/acid aux. control 2',
        4: 'EC reading',
        5: 'EC calibration',
        6: 'pH control',
        7: 'pH calibration',
        8: 'acid addition',
        9: 'alkaline addition',
        10: 'test probes',
      },
    },

    {
      label: 'AA',
    },

    {
      label: 'AB',
    },

    {
      label: 'AC',
    },

    {
      label: 'AD',
    },

    {
      label: 'AE',
    },

    {
      label: 'AF',
    },

    {
      label: 'AG',
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
      description: `
            bit 0: alkaline control, 1: acid control, 2: alkaline/acid aux control 1, 3: alkaline/acid aux control 2`,
      factor: 1,
      unit: '',
      writable: true,
      flags: {
        0: 'alkaline control',
        1: 'acid control',
        2: 'alkaline/acid aux control 1',
        3: 'alkaline/acid aux control 2',
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
      description: `
        bit 0: alkaline control, 1: acid control, 2: alkaline/acid aux control 1, 3: alkaline/acid aux control 2, 4: EC reading, 5: EC calibration, 6: pH control, 7: pH calibration, 8: acid addition, 9: alkaline addition, 10: test probes`,
      flags: {
        0: 'alkaline control',
        1: 'acid control',
        2: 'alkaline/acid aux. control 1',
        3: 'alkaline/acid aux. control 2',
        4: 'EC reading',
        5: 'EC calibration',
        6: 'pH control',
        7: 'pH calibration',
        8: 'acid addition',
        9: 'alkaline addition',
        10: 'test probes',
      },
    },
    {
      id: 4,
      name: 'Status disable',
      description: `
        bit 0: alkaline control, 1: acid control, 2: alkaline/acid aux control 1, 3: alkaline/acid aux control 2, 4: EC reading, 5: EC calibration, 6: pH control, 7: pH calibration, 8: acid addition, 9: alkaline addition, 10: test probes`,
      flags: {
        0: 'alkaline control',
        1: 'acid control',
        2: 'alkaline/acid aux. control 1',
        3: 'alkaline/acid aux. control 2',
        4: 'EC reading',
        5: 'EC calibration',
        6: 'pH control',
        7: 'pH calibration',
        8: 'acid addition',
        9: 'alkaline addition',
        10: 'test probes',
      },
    },
    {
      id: 6,
      name: 'Error: failed',
      description: `
            bit 0: liquid probe 1, 1: liquid probe 2, 2: liquid temperature 1, 3: liquid temperature 2, 4: pH probe, 5: EC probe`,
      flags: {
        0: 'Liquid probe in the top failed (one-wire not answering)',
        1: 'Liquid probe in the bottom failed (one-wire not answering)',
        2: 'Temperature of liquid in the top is outside range',
        3: 'Temperature of liquid in the bottom is outside range',
        4: 'pH is out of range',
        5: 'EC is out of range',
      },
    },
    {
      id: 7,
      name: 'Error: recover',
      description: `
            bit 0: liquid probe 1, 1: liquid probe 2, 2: liquid temperature 1, 3: liquid temperature 2, 4: pH probe, 5: EC probe`,
      flags: {
        0: 'Liquid probe in the top failed (one-wire not answering)',
        1: 'Liquid probe in the bottom failed (one-wire not answering)',
        2: 'Temperature of liquid in the top is outside range',
        3: 'Temperature of liquid in the bottom is outside range',
        4: 'pH is out of range',
        5: 'EC is out of range',
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
