/** @file: jsx/gears.js */

function in_array(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
  return false;
}

var uqids = [];
function uqid() {
  var id = "", chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  do {
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (in_array(id, uqids));

  uqids.push(id);

  return id;
}

var numFrontProps = 0;
function frontProps(value) {
  numFrontProps++;

  this.type = "InputNumber";
  this.props = {
    name: "front[]",
    id: "front" + numFrontProps.toString(),
    min: 1,
    max: 100,
    step: 1,
  };

  return true;
}

var numRearProps = 0;
function rearProps(value) {
  numRearProps++;

  this.type = "InputNumber";
  this.props = {
    name: "rear[]",
    id: "rear" + numRearProps.toString(),
    min: 1,
    max: 100,
    step: 1,
  };

  return true;
}

var inputs = [
{
  text: "Wheel Size",
  inputs: [
  {
    type: "SelectList",
    props: {
      name: "diameter",
      id: "diameter",
      data: [
        { val: .7366, text: "29 inch (nominal)" },
        { val: .7112, text: "28 inch (nominal)" },
        { val: .6858, text: "27 inch (nominal)" },
        { val: .6604, text: "26 inch (nominal)" },
        { val: .739902, text: "700 X 56 / 56-622 / 29 inch" },
        { val: .735076, text: "700 X 50 / 50-622 / 29 inch" },
        { val: .707644, text: "700 X 44 / 44-622 / 29 inch" },
        { val: .693928, text: "700 X 38 / 38-622" },
        { val: .690118, text: "700 X 35 / 35-622" },
        { val: .6858, text: "700 X 32 / 32-622" },
        { val: .679704, text: "700 X 28 / 28-622" },
        { val: .670052, text: "700 X 25 / 25-622" },
        { val: .667512, text: "700 X 23 / 23-622" },
        { val: .663956, text: "700 X 20 / 20-622" },
        { val: .673862, text: "Tubular / Wide" },
        { val: .670052, text: "Tubular / Narrow" },
        { val: .71501, text: "28 X 1 1/2 / 40-635" },
        { val: .690372, text: "27 X 1 3/8 / 35-630" },
        { val: .687832, text: "27 X 1 1/4 / 32-630" },
        { val: .6858, text: "27 X 1 1/8 / 28-630" },
        { val: .682752, text: "27 X 1 / 25-630" },
        { val: .670814, text: "26 X 2.35 / 60-559 / MTB" },
        { val: .658876, text: "26 X 2.125 / 54-559 / MTB" },
        { val: .65405, text: "26 X 1.9 / 47-559 / MTB" },
        { val: .631698, text: "26 X 1.5 / 38-559 / MTB" },
        { val: .621538, text: "26 X 1.25 / 32-559 / MTB" },
        { val: .608838, text: "26 X 1.0 / 25-559 / MTB" },
        { val: .6604, text: "650 x 38b / 38-584 650B" },
        { val: .62738, text: "650 x 28C / 28-571 / 26\' road/tri" },
        { val: .621284, text: "650 x 25C / 25-571 / 26\' road/tri" },
        { val: .617474, text: "650 x 23C / 23-571 / 26\' road/tri" },
        { val: .658114, text: "26 X 1 3/8 / 35-590" },
        { val: .6096, text: "24 inch (nominal)" },
        { val: .558038, text: "24 x 1 / 25-520" },
        { val: .51181, text: "32-451 /20 x 1 3/8" },
        { val: .50546, text: "28-451/20 x 1 1/8" },
        { val: .474472, text: "20 X 1.75 / 44-406 / BMX" },
        { val: .468122, text: "20 X 1.25 / 32-406" },
        { val: .435864, text: "18 x 1.5 / 40-355" },
        { val: .42164, text: "17 x 1 1/4 / 28-369" },
        { val: .428752, text: "16 x 1 1/2 / 40-349" },
        { val: .408178, text: "16 x 1 3/8 / 35-349" },
        { val: .341884, text: "16 x 1.5 / 37-305" },
      ]
    }
  },
  ]
},
{
  text: "Crank length",
  inputs: [
  {
    type: "SelectList",
    props: {
      name: "crankdiam",
      id: "crankdiam",
      data: [
        { val: .15, text: '150 mm' },
        { val: .152, text: '152 mm' },
        { val: .155, text: '155 mm' },
        { val: .158, text: '158 mm' },
        { val: .16, text: '160 mm' },
        { val: .1625, text: '162.5 mm' },
        { val: .165, text: '165 mm' },
        { val: .1675, text: '167.5 mm' },
        { val: .17, text: '170 mm' },
        { val: .1725, text: '172.5 mm' },
        { val: .175, text: '175 mm' },
        { val: .1775, text: '177.5 mm' },
        { val: .18, text: '180 mm' },
        { val: .185, text: '185 mm' },
        { val: .19, text: '190 mm' },
      ]
    },
  },
  ]
},
{
  text: "Gear units",
  inputs: [
    {
      type: "SelectList",
      props: {
        name: "modeval",
        id: "modeval",
        data: [
          { val: 0, text: 'Gain Ratios' },
          { val: 1, text: 'Gear inches' },
          { val: 2, text: 'Meters Development' },
          { val: 3, text: 'km/h @' },
          { val: 4, text: 'mph @' }
        ]
      }
    },
    {
      type: "InputNumber",
      props: {
        name: "rpm",
        id: "rpm",
        min: 10,
        max: 200,
        step: 5,
      }
    },
    {
      type: "Span",
      props: {
        text: "RPM",
      },
    },
  ]
},
{
  text: "Chainring(s)",
  inputs: [
    new frontProps(),
    new frontProps(),
    new frontProps(),
  ],
},
{
  text: "Cassette",
  inputs: [
  {
    type: "SelectList",
    props: {
      name: "cassette",
      id: "cassette",
      data: [
        { val: 'Custom', text: 'Custom Sprocket(s)' },
        { val: '13-14-15-17-19-21-24-27-30', text: '9-speed "Century Special" 13-14-15-17-19-21-24-27-30' },
        { val: '13-15-17-19-21-24-27-30-34', text: '9-speed "Cyclotouriste 13" 13-15-17-19-21-24-27-30-34' },
        { val: '14-15-17-19-21-24-27-30-34', text: '9-speed "Cyclotouriste 14" 14-15-17-19-21-24-27-30-34' },
        { val: '11-12-13-14-16-18-21-24-28', text: '9-speed "High & Wide" 11-12-13-14-16-18-21-24-28' },
        { val: '13-14-15-16-17-18-19-21-24', text: '9-speed "Classic 9" 13-14-15-16-17-18-19-21-24' },
        { val: '13-14-15-16-17-19-21-23-26-29', text: '10-speed 13-14-15-16-17-19-21-23-26-29' },
        { val: '13-14-15-16-17-18-19-21-23-26', text: '10-speed 13-14-15-16-17-18-19-21-23-26' },
        { val: '12-13-14-15-16-17-19-21-24-27', text: '10-speed 12-13-14-15-16-17-19-21-24-27' },
        { val: '12-13-14-15-16-17-19-21-23-25', text: '10-speed 12-13-14-15-16-17-19-21-23-25' },
        { val: '12-13-14-15-16-17-18-19-21-23', text: '10-speed 12-13-14-15-16-17-18-19-21-23' },
        { val: '12-13-14-15-16-17-18-19-20-21', text: '10-speed 12-13-14-15-16-17-18-19-20-21' },
        { val: '11-13-15-17-19-21-23-25-28-32', text: '10-speed 11-13-15-17-19-21-23-25-28-32' },
        { val: '11-13-15-17-19-21-23-25-28-34', text: '10-speed 11-13-15-17-19-21-23-25-28-34' },
        { val: '11-12-13-14-15-16-17-19-21-23', text: '10-speed 11-12-13-14-15-16-17-19-21-23' },
        { val: '11-12-13-14-15-16-17-18-19-21', text: '10-speed 11-12-13-14-15-16-17-18-19-21' },
        { val: '15-16-17-18-19-20-21-22-23-25', text: '10-speed 15-16-17-18-19-20-21-22-23-25' },
        { val: '16-17-18-19-20-21-22-23-25-27', text: '10-speed 16-17-18-19-20-21-22-23-25-27' },
        { val: '9-10-11-13-15-17-20-23-26', text: 'Capreo 9-speed 9-10-11-13-15-17-20-23-26' },
        { val: '11-12-13-14-15-16-17-19-21', text: '9-speed 11-12-13-14-15-16-17-19-21' },
        { val: '12-13-14-15-16-17-18-19-21', text: '9-speed 12-13-14-15-16-17-18-19-21' },
        { val: '12-13-14-15-16-17-19-21-23', text: '9-speed 12-13-14-15-16-17-19-21-23' },
        { val: '11-12-13-14-15-17-19-21-23', text: '9-speed 11-12-13-14-15-17-19-21-23' },
        { val: '12-13-14-15-17-19-21-23-25', text: '9-speed 12-13-14-15-17-19-21-23-25' },
        { val: '12-13-14-15-17-19-21-23-26', text: '9-speed SRAM 12-13-14-15-17-19-21-23-26' },
        { val: '12-13-14-15-17-19-21-24-27', text: '9-speed 12-13-14-15-17-19-21-24-27' },
        { val: '13-14-15-16-17-18-19-21-23', text: '9-speed 13-14-15-16-17-18-19-21-23' },
        { val: '13-14-15-16-17-19-21-23-25', text: '9-speed 13-14-15-16-17-19-21-23-25' },
        { val: '14-15-16-17-18-19-21-23-25', text: '9-speed 14-15-16-17-18-19-21-23-25' },
        { val: '11-12-14-16-18-21-24-28-32', text: '9-speed aq/ar 11-12-14-16-18-21-24-28-32' },
        { val: '12-14-16-18-20-23-26-30-34', text: '9-speed ap 12-14-16-18-20-23-26-30-34' },
        { val: '11-13-15-17-20-23-26-30-34', text: '9-speed as 11-13-15-17-20-23-26-30-34' },
        { val: '13-15-17-19-21-23-26-30', text: '8-speed "8K7-13-30" 13-15-17-19-21-23-26-30' },
        { val: '13-15-17-19-21-23-26-32', text: '8-speed "8K7-13-32" 13-15-17-19-21-23-26-32' },
        { val: '13-15-17-19-21-23-26-34', text: '8-speed "8K7-13-34" 13-15-17-19-21-23-26-34' },
        { val: '11-13-15-17-20-23-26-34', text: '8-speed "Megarange" 11-13-15-17-20-23-26-34' },
        { val: '11-13-15-17-20-23-26-30', text: '8-speed "ak/an" 11-13-15-17-20-23-26-30' },
        { val: '12-14-16-18-21-24-28-32', text: '8-speed "P" 12-14-16-18-21-24-28-32' },
        { val: '12-13-14-16-18-21-24-28', text: '8-speed "Q" 12-13-14-16-18-21-24-28' },
        { val: '11-12-14-16-18-21-24-28', text: '8-speed "R/ah" 11-12-14-16-18-21-24-28' },
        { val: '12-13-14-15-16-17-19-21', text: '8-speed "S" 12-13-14-15-16-17-19-21' },
        { val: '13-14-15-16-17-19-21-23', text: '8-speed "T" 13-14-15-16-17-19-21-23' },
        { val: '12-13-14-15-17-19-21-23', text: '8-speed "U" 12-13-14-15-17-19-21-23' },
        { val: '13-14-15-17-19-21-23-26', text: '8-speed "V" 13-14-15-17-19-21-23-26' },
        { val: '12-13-15-17-19-21-23-25', text: '8-speed "W" 12-13-15-17-19-21-23-25' },
        { val: '14-16-18-20-22-24-28', text: '7-speed Freewheel 14-16-18-20-22-24-28' },
        { val: '14-16-18-21-24-28-32', text: '7-speed "F" 14-16-18-21-24-28-32' },
        { val: '13-15-17-20-23-26-30', text: '7-speed "G" 13-15-17-20-23-26-30' },
        { val: '13-15-17-20-24-29-34', text: '7-speed "K" 13-15-17-20-24-29-34' },
        { val: '13-15-17-19-21-24-28', text: '7-speed "M" 13-15-17-19-21-24-28' },
        { val: '13-15-17-19-21-23-26', text: '7-speed "H" 13-15-17-19-21-23-26' },
        { val: '12-14-16-18-21-26-32', text: '7-speed Sram 12-14-16-18-21-26-32' },
        { val: '12-14-16-18-21-24-28', text: '7-speed "E" 12-14-16-18-21-24-28' },
        { val: '12-13-14-15-17-19-21', text: '7-speed "L" 12-13-14-15-17-19-21' },
        { val: '13-14-15-17-19-21-23', text: '7-speed "I" 13-14-15-17-19-21-23' },
        { val: '13-14-15-16-17-19-21', text: '7-speed "J" 13-14-15-16-17-19-21' },
        { val: '11-12-13-14-15-17-19', text: '7-speed "ab" 11-12-13-14-15-17-19' },
        { val: '11-13-15-18-21-24-28', text: '7-speed "ac" 11-13-15-18-21-24-28' },
        { val: '11-12-14-16-18-21-24', text: '7-speed "ai" 11-12-14-16-18-21-24' },
        { val: '11-13-15-18-21-24-30', text: '7-speed "am" 11-13-15-18-21-24-30' },
        { val: '11-13-15-18-22-26-34', text: '7-speed "MegaRange Cassette" 11-13-15-18-22-26-34' },
        { val: '11-13-15-18-21-24-34', text: '7-speed "MegaRange Freewheel" 11-13-15-18-21-24-34' },
      ],
    },
  }],
},
{
  text: "Custom Sprocket(s)<br>(1 or more)",
  inputs: [
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
    new rearProps(),
  ]
},
{
  text: "Internal Hub",
  inputs: [
  {
    type: "SelectList",
    props: {
      name: "hubmodel",
      id: "hubmodel",
      data: [
        { val: '1.000', text: ' ----- No planetary (internal) gears ----- ' },
        { val: '1.75-0.5', text: ' NuVinci continuously-variable N171 ' },
        { val: '1.80-0.5', text: ' NuVinci continuously-variable N180 ' },
        { val: '1.80-0.5', text: ' NuVinci continuously-variable N360 ' },
        {
          val: '1.467-1.292-1.135-1-.881-.774-.682-.600-.528-.464-.409-.360-.316-.279',
          text: ' Rohloff 14-speed Speedhub '
        },
        { val: '1.362-1.000', text: ' Sachs 2-speed Duomatic, Automatic ' },
        { val: '1.362-1.000-0.734', text: ' (Fichtel &) Sachs 3-speed 415, H3102 ' },
        { val: '1.362-1.000-0.734', text: ' (Fichtel &) Sachs 3-speed w/coaster brake 515, H3111 ' },
        { val: '1.370-1.000-', text: 'SRAM Automatix ' },
        { val: '1.362-1.000-0.734', text: ' SRAM 3-speed Spectro T3 3105 ' },
        { val: '1.362-1.000-0.734', text: ' SRAM 3-speed w/coaster brake Spectro T3 3115 ' },
        { val: '1.362-1.000-0.734', text: ' SRAM 3-speed w/drum brake Spectro T3 3125 ' },
        { val: '1.362-1.000-0.734', text: ' SRAM 3-speed w/8 or 9-speed cassette DualDrive 3x8, 3x9 ' },
        { val: '1.362-1.000-0.734', text: ' Sachs 3-speed w/7-cog cassette 3x7 ' },
        { val: '1.50-1.286-1.000-0.778-0.667', text: ' Sachs 5-speed Torpedo (old type) ' },
        { val: '1.579-1.281-1.000-0.781-0.633', text: ' Sachs 5-speed Pentasport P5/SRAM Spectro P5 ' },
        { val: '1.685-1.476-1.227-1.000-0.815-0.677-0.593', text: ' Sachs 7-speed Torpedo (old type) ' },
        {
          val: '1.742-1.476-1.236-1.000-0.809-0.677-0.574',
          text: ' Sachs 7-speed Super 7/SRAM Spectro S7 '
        },
        { val: '1.844-1.611-1.375-1.172-1-0.853-0.727-0.621-0.542', text: ' SRAM 9-speed i-Motion ' },
        { val: '2.5-1.00', text: ' Schlumpf 2-speed High-Speed Drive bottom bracket ' },
        { val: '1.65-1.00', text: ' Schlumpf 2-speed Speed Drive bottom bracket ' },
        { val: '1.00-.400', text: ' Schlumpf 2-speed Mountain Drive bottom bracket ' },
        { val: '1.333-1-.750', text: ' Shimano 3-speed (old) 333, F, FA, G, SG-3S21, G-3S23 ' },
        { val: '1.333-1-.750', text: ' Shimano 3-speed w/coaster brake (old) 3SC, 3CC ' },
        { val: '1.364-1-.733', text: ' Shimano 3-speed Nexus Inter-3 ' },
        { val: '1.843-1.500-1.244-1.000', text: ' Shimano 4-speed Nexus Inter-4 ' },
        { val: '1.545-1.335-1.145-0.989-0.843-0.741-0.632', text: ' Shimano 7-speed Nexus Inter-7 ' },
        { val: '1.615-1.419-1.223-1-0.851-0.748-0.644-0.527', text: ' Shimano 8-speed Nexus, Alfine ' },
        {
          val: '2.153-1.888-1.667-1.462-1.292-1.134-0.995-0.878-0.77-0.681-0.527',
          text: ' Shimano 11-Speed Alfine '
        },
        { val: '1-.714', text: ' Sturmey-Archer 2-speed S2 (1966) ' },
        { val: '1.38-1.00', text: ' Sturmey-Archer 2-speed S2, S2C, B2C (2010) ' },
        { val: '1.00-.750-.625', text: ' Sturmey-Archer 3-speed fixed gear S3X ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed wide-ratio AW, K, KB, KBC, KT, KTC ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed wide-ratio RS-RF3, S-RF3 ' },
        { val: '1.568-1-.638', text: ' Sturmey-Archer 3-speed special Brompton wide ratio ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed w/coaster brake AWC, S3C, S-RC3, TCW ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed w/band brake, wide-body SX-RB3 ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed w/disk brake S-RK3, SX-RK3 ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed w/drum brake AB, AB/C, AB3, AT3, AWB ' },
        {
          val: '1.333-1-.75',
          text: ' Sturmey-Archer 3-speed w/drum brake SAB, S3B, SBR, X-RD3, RX-RD3, XL-RD3 '
        },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed for 8/9 speed cassette CS-RF3 ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed for 8/9 speed cassette w/disk brake CS-RK3 ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed w/dyno AG ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed gearbox for tricycle w/reverse TS-RF3 ' },
        { val: '1.333-1-.75', text: ' Sturmey-Archer 3-speed gearbox for tricycle w/coaster TS-RC3 ' },
        { val: '1.50-1.267-1-.789-.6667', text: ' Sturmey-Archer 5-speed S5, S5.1, S5/2, 5-Speed Alloy. ' },
        {
          val: '1.50-1.267-1-.789-.6667',
          text: ' Sturmey-Archer 5-speed 5-Star, Sprinter S5, S-RF5, X-RF5 '
        },
        {
          val: '1.600-1.333-1-.750-.625',
          text: ' Sturmey-Archer 5-speed wide-ratio (2009-) S-RF5(W), X-RF5(W) '
        },
        {
          val: '1.50-1.267-1-.789-.6667',
          text: ' Sturmey-Archer 5-speed w/coaster brake Sprinter S5C, S-RC5 '
        },
        {
          val: '1.60-1.333-1-.750-.625',
          text: ' Sturmey-Archer 5-speed wide-ratio w/coaster brake (2009-) S5C(W), S-RC5(W) '
        },
        {
          val: '1.60-1.333-1-.750-.625',
          text: ' Sturmey-Archer 3-speed gearbox for tricycle w/coaster QS-RC5 '
        },
        {
          val: '1.50-1.267-1-.789-.6667',
          text: ' Sturmey-Archer 5-speed w/drum brake 5-Star, AB-5, AT5, SAB-5, X-RD5 '
        },
        {
          val: '1.60-1.333-1-.750-.625',
          text: ' Sturmey-Archer 5-speed wide-ratio w/drum brake (2009-) X-RD5-(W), XL-RD5(W) '
        },
        {
          val: '3.054-2.384-2.106-1.858-1.644-1.450-1.281-1',
          text: ' Sturmey-Archer 8-speed (2004-2008) X-RF8 '
        },
        {
          val: '3.239-2.485-2.186-1.931-1.677-1.481-1.303-1',
          text: ' Sturmey-Archer 8-speed wide-ratio (2009-) X-RF8(W) '
        },
        {
          val: '3.054-2.384-2.106-1.858-1.644-1.450-1.281-1',
          text: ' Sturmey-Archer 8-speed w/drum brake (2004-2008) X-RD8 '
        },
        {
          val: '3.239-2.485-2.186-1.931-1.677-1.481-1.303-1',
          text: ' Sturmey-Archer 8-speed wide-ratio w/drum brake (2009-) X-RD8(W) '
        },
        {
          val: '3.054-2.384-2.106-1.858-1.644-1.450-1.281-1',
          text: ' Sturmey-Archer 8-speed w/disk brake (2004-2008) X-RK8 '
        },
        {
          val: '3.239-2.485-2.186-1.931-1.677-1.481-1.303-1',
          text: ' Sturmey-Archer 8-speed wide-ratio w/disk brake (2009-) X-RK8(W) '
        },
        {
          val: '3.054-2.384-2.106-1.858-1.644-1.450-1.281-1',
          text: ' Sturmey-Archer 8-speed w/roller brake (2004-2008) X-RR8 '
        },
      ],
    },
  },
  ],
},
{
  text: "Format options",
  inputs: [
  {
    type: "Span",
    props: {
      text: "Not done yet...",
    },
  },
  ],
},
];

var TblOut = React.createClass({
  render: function() {
    var RowHubGearsHead = this.props.num_hubg > 1 ? (
      <tr>
        <th colSpan="2"></th>
        <th colSpan={this.props.num_hubg}>Hub gears</th>
      </tr>
    ) : null;
    
    var g = 1, T;

    var RowHubGears = (
      <tr>
        <th>Front</th>
        <th>Rear</th>
        {
          this.props.gr.map(function(hubgr, index) {
            T = this.props.num_hubg > 1 ? g : "";
            g++;

            return <th key={uqid()}>{T}</th>;
          }.bind(this))
        }
      </tr>
    );

    var a = this.props.num_hubg === 1 ? 255 - 12 * (this.props.num_rear - 2) : 255,
        r, g, b, style, aPos = 0;

    var TBody = this.props.gears_f.map(function(front, i) {
      var FirstRow = (
        <tr className="FirstRow">
          <td rowSpan={this.props.num_rear}>{front}T</td>
        </tr>
      );

      var OtherRows = this.props.gears_r.map(function(rear, j) {
        var FirstCell = (
          <td className="FirstCell">{rear}T</td>
        );

        var OtherCells = this.props.gr.map(function(hubgr, index) {
          r = aPos !== 2 ? a : 255;
          g = aPos !== 1 ? a : 255;
          b = aPos !== 0 ? a : 255;

          style = {
            backgroundColor: "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")"
          };

          if (this.props.num_hubg > 1)
            a -= 12;

          return (
            <td key={index} style={style}>{hubgr.ratio[front][rear]}</td>
          );
        }.bind(this));
        
        if (this.props.num_hubg === 1) {
          a += 12;
        }
        else {
          a = 255;
        }

        return (
          <tr key={j}>
            {FirstCell}
            {OtherCells}
          </tr>
        );
      }.bind(this));
      
      aPos++;

      return (
        <tbody key={i}>
          {FirstRow}
          {OtherRows}
        </tbody>
      );
    }.bind(this));

    return (
      <table className="gr_table">
        <thead>
          <tr>
            <th colSpan="2">Gear</th>
            <th colSpan={this.props.num_hubg}>{this.props.unit}</th>
          </tr>
          {RowHubGearsHead}
          {RowHubGears}
        </thead>
        {TBody}
      </table>
    );
  }
});

var MainForm = React.createClass({
  SelectList: function(self, props) {
    var optionNodes = props.data.map(function(item, index) {
      return (
        <option value={index} key={uqid()}>
          {item.text}
        </option>
      );
    });
    
    return (
      <select name={props.name} id={props.id} ref={props.id} onChange={self.calculate}
        value={self.state.data.values[props.id]} key={uqid()}>
        {optionNodes}
      </select>
    );
  },

  InputNumber: function(self, props) {
    return (
      <input type="number" id={props.id} ref={props.id} key={uqid()}
        name={props.name} value={self.state.data.values[props.id]}
        min={props.min} max={props.max} step={props.step}
        onChange={self.calculate} />
    );
  },

  Span: function(self, props) {
    return (
      <span id={props.id} key={uqid()}>{props.text}</span>
    );
  },
  
  DivOut: function(self, props) {
    return (
      <div id={props.id} ref={props.id} key={uqid()}></div>
    );
  },

  getValues: function() {
    // gets current form values and returns them
    var values = {
      diameter:   parseInt(React.findDOMNode(this.refs.diameter).value),
      crankdiam:  parseInt(React.findDOMNode(this.refs.crankdiam).value),
      modeval:    parseInt(React.findDOMNode(this.refs.modeval).value),
      rpm:        parseInt(React.findDOMNode(this.refs.rpm).value),
      front1:     parseInt(React.findDOMNode(this.refs.front1).value),
      front2:     parseInt(React.findDOMNode(this.refs.front2).value),
      front3:     parseInt(React.findDOMNode(this.refs.front3).value),
      cassette:   parseInt(React.findDOMNode(this.refs.cassette).value),
      rear1:      parseInt(React.findDOMNode(this.refs.rear1).value),
      rear2:      parseInt(React.findDOMNode(this.refs.rear2).value),
      rear3:      parseInt(React.findDOMNode(this.refs.rear3).value),
      rear4:      parseInt(React.findDOMNode(this.refs.rear4).value),
      rear5:      parseInt(React.findDOMNode(this.refs.rear5).value),
      rear6:      parseInt(React.findDOMNode(this.refs.rear6).value),
      rear7:      parseInt(React.findDOMNode(this.refs.rear7).value),
      rear8:      parseInt(React.findDOMNode(this.refs.rear8).value),
      rear9:      parseInt(React.findDOMNode(this.refs.rear9).value),
      rear10:     parseInt(React.findDOMNode(this.refs.rear10).value),
      hubmodel:   parseInt(React.findDOMNode(this.refs.hubmodel).value),
    };

    for (var key in values) {
      if (typeof values[key] !== "object" && !values[key].toString().length) {
        delete values[key];
      }
    }

    return values;
  },

  calculate: function() {
    var values = this.getValues();
    
    this.setState({ data: { values: values, output: null } });

    var cvals = {};
    
    for (var key in values) {
      cvals[key] = values[key];
    }

    cvals.diameter  = parseFloat(inputs[0].inputs[0].props.data[values.diameter].val),
    cvals.crankdiam = parseFloat(inputs[1].inputs[0].props.data[values.crankdiam].val),
    cvals.modeval   = parseInt(inputs[2].inputs[0].props.data[values.modeval].val),
    cvals.cassette  = inputs[4].inputs[0].props.data[values.cassette].val,
    cvals.hubmodel  = inputs[6].inputs[0].props.data[values.hubmodel].val;

    var front = [], k = 1;
    while (typeof cvals["front" + k.toString()] !== "undefined" &&
        !isNaN(cvals["front" + k.toString()])) {
      
      front.push(cvals["front" + k.toString()]);
      k++;
    }
   
    var rear;
    if (cvals.cassette == "Custom") {
      var rear = [], l = 1;
      while (typeof cvals["rear" + l.toString()] !== "undefined" &&
          !isNaN(cvals["rear" + l.toString()])) {
        
        rear.push(cvals["rear" + l.toString()]);
        l++;
      }
    }
    else {
      rear = cassette.split("-");
    }
    
    front.sort(function(a,b){ return a-b; });
    rear.sort(function(a,b){ return b-a; });

    var gr = [], unit;

    switch (cvals.modeval) {
      case 0:
        unit = "Gain ratios";
        break;
      case 1:
        unit = "Gear inches";
        break;
      case 2:
        unit = "Meters development";
        break;
      case 3:
        unit = "km/h @ " + cvals.rpm.toString() + " rpm";
        break;
      case 4:
        unit = "mph @ " + cvals.rpm.toString() + " rpm";
        break;
      default:
        unit = "Arbitrary units";
    }

    var hub_gears = cvals.hubmodel.split("-");

    for (var k = 0; k < hub_gears.length; k++) {
      var hub_gear = hub_gears[k], hg = parseFloat(hub_gear);
      if (hg === 0 || isNaN(hg)) continue;

      gr.unshift({gear: hg, ratio: {}});

      for (var i = 0; i < front.length; i++) {
        var fteeth = parseInt(front[i]);
        if (fteeth === 0 || isNaN(fteeth)) continue;

        gr[0].ratio[fteeth] = {};
        
        for (var j = 0; j < rear.length; j++) {
          var rteeth = parseInt(rear[j]);
          if (rteeth === 0 || isNaN(rteeth)) continue;

          gr[0].ratio[fteeth][rteeth] = Math.round(10 * calc_val(hg * fteeth / rteeth, cvals)) / 10;
        }
      }
    }

    // format as table
    var num_front = front.length,
        num_rear  = rear.length + 1,
        num_hubg  = gr.length,

        gears_f = front,
        gears_r = rear,

        gears_h = [];

    for (var i = 0; i < gr.length; i++) {
      gears_h.push(gr[i].gear);
    }

    gears_h.sort();

    React.render(
      <TblOut unit={unit} num_hubg={num_hubg} gr={gr}
        num_rear={num_rear} num_front={num_front}
        gears_f={gears_f} gears_r={gears_r} />,
      React.findDOMNode(this.refs.tblOut)
    );

    /*
    this.setState({ data: { values: values, output: null } }, function() {
      $.ajax({
        url: this.props.url,
        dataType: "json",
        type: "POST",
        data: values,
        success: function(data) {
          this.setState({ data: { values: values, output: data } });

          React.findDOMNode(this.refs.tblOut).innerHTML = data.table;
          React.findDOMNode(this.refs.imgOut).setAttribute("src", "data:image/png;base64," + data.data);
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this),
      });
    });
    // */
  },

  getInitialState: function() {
    return {
      data: {
        values: {
          diameter: 8,
          crankdiam: 8,
          modeval: 3,
          rpm: 85,
          front1: 33,
          front2: 45,
          front3: 56,
          cassette: 0,
          rear1: 8,
          rear2: 10,
          rear3: 13,
          rear4: 16,
          rear5: 20,
          rear6: 23,
          rear7: 27,
          rear8: 30,
          rear9: 35,
          hubmodel: 27,
        },
        output: null
      }
    };
  },

  componentDidMount: function() {
    window.Main = this;
    this.calculate();
  },

  render: function() {
    var RowsNodes = inputs.map(function(item, i) {
      var InputNodes = item.inputs.map(function(input, j) {
        return this[input.type](this, input.props);
      }.bind(this));

      return (
        <tr key={i}>
          <td className="text" dangerouslySetInnerHTML={{__html: item.text}}></td>
          <td className="input">{InputNodes}</td>
        </tr>
      );
    }.bind(this));

    return (
      <form id="finput" method="POST" action="process_data.php">
        <table id="input">
          {RowsNodes}
        </table>
        <div id="ot" ref="tblOut" />
        <img ref="imgOut" />
      </form>
    );
  }
});

function calc_val(gr, values) {
  switch (values.modeval) {
    case 0: // Gain ratios
      return values.diameter / 2 / values.crankdiam * gr;
      break;
    case 1: // Gear inches
      return values.diameter * gr * 39.3701;
      break;
    case 2: // Meters Development
      return gr * Math.PI * values.diameter;
      break;
    case 3: // km/h @ rpm
      return values.rpm / 60 * gr * Math.PI * values.diameter * 3.6;
      break;
    case 4: // mph @ rpm
      return values.rpm / 60 * gr * Math.PI * values.diameter * 3.6 / 1.6093;
      break;
  }
}

React.render(
  <MainForm url="/react/oproj/gears/process_data.php?all" />,
  document.getElementById("wrapper")
);
