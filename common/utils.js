export function formatAddress(address) {
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
}

export function scrollToSection(id, offset = 0) {
  const ele = document.getElementById(id);
  const fixedHeader = document.getElementById('fixed-header');
  const fixedHeaderRect = fixedHeader.getBoundingClientRect();
  let realTop = ele.offsetTop;
  realTop += ele.offsetParent.offsetTop;
  window.scrollTo({
    top: realTop - fixedHeaderRect.height - offset,
    behavior: 'smooth',
  });
}

export function getEtherScanDomain() {
  return process.env.NEXT_PUBLIC_CHAIN_ID === '1'
    ? 'optimistic.etherscan.io'
    : 'goerli-optimism.etherscan.io';
}

export function getOpenSeaDomain() {
  return process.env.NEXT_PUBLIC_CHAIN_ID === '1'
    ? 'opensea.io'
    : 'testnets.opensea.io';
}
