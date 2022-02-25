import React from 'react';

//Graveyard ecosystem logos
import medalLogo from '../../assets/img/medal_card.png';
import mShareLogo from '../../assets/img/mshare_card.png';
import tShareLogo from '../../assets/img/mshare_card.png';
import tBondLogo from '../../assets/img/mbond_card.png';
import tombLogo from '../../assets/img/crypto_tomb_share.svg';
// import tShareLogo from '../../assets/img/crypto_tomb_share.svg';
// import tombLogoPNG from '../../assets/img/crypto_tomb_cash.f2b44ef4.png';
// import tShareLogoPNG from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
// import tBondLogo from '../../assets/img/crypto_tomb_bond.svg';

import tombFtmLpLogo from '../../assets/img/MEDAL-WFTM.png';
import tshareFtmLpLogo from '../../assets/img/2SHARES-WFTM.png';

import wftmLogo from '../../assets/img/wFTM.png';
import wethLogo from '../../assets/img/weth.png';
import rtombLogo from '../../assets/img/crypto_tomb_cash.svg';
import shibaLogo from '../../assets/img/mimlogo.png';

import tombtshares from '../../assets/img/2OMB-2SHARES.png';

import usdc from '../../assets/img/USDC.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  MEDAL: medalLogo,
  TOMB: tombLogo,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  WFTM: wftmLogo,
  WETH: wethLogo,
  MIM: shibaLogo,
  MSHARE: mShareLogo,
  // RTOMB: rtombLogo,
  'MEDAL-FTM-LP': tombFtmLpLogo,
  'MSHARE-FTM-LP': tshareFtmLpLogo,
  '2OMB-2SHARE-LP': tombtshares,
  'USDC': usdc,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  console.log("symbol", symbol)
  if (!logosBySymbol[symbol]) {
    return <img src={logosBySymbol["TOMB"]} alt={`Tomb Logo`} width={size} height={size} />;
    // throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
