// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      WETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18], // BOO: 0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE 18
      TOMB: ['0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7', 18], // ZOO: 0x09e145a1d53c0045f41aeef25d8ff982ae74dd56 0
      MIM: ['0x82f0b8b456c1a451378467398982d4834b6829c1', 18], // SHIBA: 0x9ba3e4f84a34df4e08c112e1a0ff148b81655615 9
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'MEDAL-FTM-LP': ['0x56553d5483EB7762c258f110D53e4Bef39e45108', 18], // 
      'MSHARE-FTM-LP': ['0x310ed1BD9A8BDd4cF33AF1b9d7Ab7815134390a7', 18],
      '2OMB-2SHARE-LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      FUSDT: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      WETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18], // BOO: 0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE 18
      TOMB: ['0x6c021Ae822BEa943b2E66552bDe1D2696a53fbB7', 18], // ZOO: 0x09e145a1d53c0045f41aeef25d8ff982ae74dd56 0
      MIM: ['0x82f0b8b456c1a451378467398982d4834b6829c1', 18], // SHIBA: 0x9ba3e4f84a34df4e08c112e1a0ff148b81655615 9
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'MEDAL-FTM-LP': ['0x56553d5483EB7762c258f110D53e4Bef39e45108', 18], // 
      'MSHARE-FTM-LP': ['0x310ed1BD9A8BDd4cF33AF1b9d7Ab7815134390a7', 18],
      '2OMB-2SHARE-LP': ['0xd9B5f00d183df52D717046521152303129F088DD', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  TombFtmGenesisRewardPool: {
    name: 'Stake WFTM, earn MEDAL',
    poolId: 0,
    sectionInUI: 0,
    contract: 'TombFtmGenesisRewardPool',
    depositTokenName: 'WFTM',
    earnTokenName: 'MEDAL',
    multiplier: "100x",
    finished: false,
    sort: 1,
    closedForStaking: false,
    genesisFinished: false,
  },
  TombFtmLPTShareRewardPool: {
    name: 'Stake MEDAL-WFTM LP, Earn MSHARE',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TombFtmLPTShareRewardPool',
    depositTokenName: 'MEDAL-FTM-LP',
    earnTokenName: 'MSHARE',
    multiplier: "3000x",
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
  // TshareFtmLPTShareRewardPool: {
  //   name: 'Earn 2SHARE by 2SHARE-WFTM LP',
  //   poolId: 1,
  //   sectionInUI: 2,
  //   contract: 'TshareFtmLPTShareRewardPool',
  //   depositTokenName: 'MSHARE-FTM-LP',
  //   earnTokenName: '2SHARE',
  //   multiplier: "2400x",
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // TombTsharePTShareRewardPool: {
  //   name: 'Earn 2SHARE by 2OMB-2SHARE LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'TombTshareLPTShareRewardPool',
  //   depositTokenName: '2OMB-2SHARE-LP',
  //   earnTokenName: '2SHARE',
  //   multiplier: "550x",
  //   finished: false,
  //   sort: 8,
  //   closedForStaking: false,
  // },
  // TshareDividends: {
  //   name: 'Earn USDC dividends by staking 2SHARES',
  //   poolId: 0,
  //   sectionInUI: 3,
  //   contract: 'TombTshareLPTShareRewardPool',
  //   depositTokenName: '2SHARES',
  //   earnTokenName: 'USDC',
  //   multiplier: "0x",
  //   finished: false,
  //   sort: 9,
  //   closedForStaking: false,
  // },
};

export default configurations['production'];
