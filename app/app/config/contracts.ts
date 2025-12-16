import { HashType } from '@ckb-ccc/connector-react';

// Account and issuer information
export const ISSUER_CONFIG = {
  LOCK_ARGS: '0xa95d7caffda25859a126b4c9adf2b178231b3bd4',
  LOCK_HASH: '0x2117ba3aa71824ed786e1fc5458daafa8d69e81428d88615e2e8fdc53f8c9dcb',
  TESTNET_ADDRESS: 'ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqdft472lldztpv6zf45exkl9vtcyvdnh4q4mg7nn',
  MAINNET_ADDRESS: 'ckb1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqdft472lldztpv6zf45exkl9vtcyvdnh4qmfr3et',
} as const;

// CKB-JS-VM Configuration
export const CKB_JS_VM_CONFIG = {
  CODE_HASH: '0x3e9b6bead927bef62fcb56f0c79f4fbd1b739f32dd222beac10d346f2918bed7',
  HASH_TYPE: 'type' as HashType,
  TX_HASH: '0x756fdaf0d1ba1d2e03dc13c71c967b24021bc054893a766ccee6879c468892d2',
} as const;

// PokePoint Contract Configuration
export const POKEPOINT_CONFIG = {
  TYPE_ID: '0xea20fed487aa51a17d92ad9b0cb5bdf34a20c7809554247d678053a7cfb1c159',
  TX_HASH: '0xf0e065cf60bc0dd5029384c58659cc0b638977926771a4e95dd8d8fc5a5b65da',
  DEP_GROUP_TX_HASH: '0xd3af4c612de5f54432b9687c289d78e7208809881efb3207f2d9bc1a0a4f24fb',
  CKB_PER_POINT: 1000000000n,
  MIN_CELL_CAPACITY: 6100000000n,
  CELL_MIN_CAPACITY: 20000000000n,
  MIN_POINTS_FOR_CELL: 20n,
} as const;

// Pokemon Contract Configuration
export const POKEMON_CONFIG = {
  TYPE_ID: '0xc9cbc70b438403829694f6a49930a261b861c80dd717b0cda24d67f950657d28',
  TX_HASH: '0xff99713ef78ffac296852a60c892ce1dd6f45ba3938fac49809205bead5e3933',
  DEP_GROUP_TX_HASH: '0xba05f38b5347fb6108961a5d6e7172c23e9136e0f4ee6174a394db1804f9fca4',
  HASH_TYPE: 1,
} as const;

// Network Configuration
export const NETWORK_CONFIG = {
  TESTNET_RPC_URL: 'https://testnet.ckb.dev',
  MAINNET_RPC_URL: 'https://mainnet.ckb.dev',
} as const;

// Commonly used constants
export const {
  TYPE_ID: POKEPOINT_TYPE_ID,
  TX_HASH: POKEPOINT_TX_HASH,
  DEP_GROUP_TX_HASH: POKEPOINT_DEP_GROUP_TX_HASH,
  CKB_PER_POINT,
  MIN_CELL_CAPACITY,
  CELL_MIN_CAPACITY: POKEPOINT_CELL_MIN_CAPACITY,
  MIN_POINTS_FOR_CELL,
} = POKEPOINT_CONFIG;

export const {
  TYPE_ID: POKEMON_TYPE_ID,
  TX_HASH: POKEMON_TX_HASH,
  DEP_GROUP_TX_HASH: POKEMON_DEP_GROUP_TX_HASH,
} = POKEMON_CONFIG;

export const {
  CODE_HASH: CKB_JS_VM_CODE_HASH,
  HASH_TYPE: CKB_JS_VM_HASH_TYPE,
  TX_HASH: CKB_JS_VM_TX_HASH,
} = CKB_JS_VM_CONFIG;

