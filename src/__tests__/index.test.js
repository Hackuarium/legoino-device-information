'use strict';

const info = require('..');

describe('legoino-device-information test', () => {
  it('OpenBio', () => {
    expect(info.OpenBio).toMatchSnapshot();
  });
  it('OpenSpectro', () => {
    expect(info.OpenSpectro).toMatchSnapshot();
  });
  it('SimpleSpectro', () => {
    expect(info.SimpleSpectro).toMatchSnapshot();
  });
  it('Solar2015', () => {
    expect(info.Solar2015).toMatchSnapshot();
  });
  it('Beemos', () => {
    expect(info.Beemos).toMatchSnapshot();
  });
  it('Computer', () => {
    expect(info.Computer).toMatchSnapshot();
  });
  it('PHMeter', () => {
    expect(info.PHMeter).toMatchSnapshot();
  });
  it('fromDeviceID', () => {
    expect(info.fromDeviceID('6b')).toMatchSnapshot();
  });
});
