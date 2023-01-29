const firstAliasName = {
  A: 'Almund',
  B: 'Bacer',
  C: 'Coster',
  D: 'Durtop',
  E: 'Exotic',
  F: 'Flying',
  G: 'Gamer',
  H: 'High',
  I: 'Ignomous',
  J: 'Jack',
  K: 'Krazy',
  L: 'Linx',
  M: 'Mighty',
  N: 'Nostardamus',
  O: 'Odin',
  P: 'Phreak',
  Q: 'Quantum',
  R: 'Razor',
  S: 'SUDO',
  T: 'Timely',
  U: 'Undefeated',
  V: 'Vulkan',
  W: 'WiFi',
  X: 'Xero',
  Y: 'Yahoo',
  Z: 'Zen',
};

const lastAliasName = {
  A: 'Android',
  B: 'Bot',
  C: 'Crash',
  D: 'Droid',
  E: 'Enigma',
  F: 'Function',
  G: 'Gwent',
  H: 'Alias',
  I: 'IOS',
  J: 'Jet',
  K: 'Khan',
  L: 'Loader',
  M: 'Miner',
  N: 'Neo',
  O: 'Override',
  P: 'Phreaker',
  Q: 'Qt',
  R: 'Rm-rf',
  S: 'Sereal',
  T: 'Translator',
  U: 'Unicode',
  V: 'Vector',
  W: 'Wrecker',
  X: 'Xterminator',
  Y: 'Youtuber',
  Z: 'Zlib',
};

const aliasGen = function (firstName, lastName) {
  let firstSimbolAlias = firstName[0].toUpperCase();
  let lastSimbolAlias = lastName[0].toUpperCase();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if(!alphabet.includes(firstSimbolAlias) || !alphabet.includes(lastSimbolAlias)){
    console.log("Your name must start with a letter from A - Z.");
  }
  else{
    console.log(firstAliasName[firstSimbolAlias] + " " + lastAliasName[lastSimbolAlias]);
  }
};
aliasGen("Inna", "Cher");
