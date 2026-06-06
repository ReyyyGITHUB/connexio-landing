export const DOWNLOAD_LINKS = {
  windows: 'https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_x64-setup.exe',
  mac: 'https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_aarch64.dmg',
  linuxAppImage: 'https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_amd64.AppImage',
  linuxDebian: 'https://github.com/yandanp/Connexio/releases/download/v0.5.0/Connexio_0.5.0_amd64.deb',
};

export const getOSLink = (osType: 'mac' | 'windows' | 'linux') => {
  switch (osType) {
    case 'windows':
      return DOWNLOAD_LINKS.windows;
    case 'linux':
      return DOWNLOAD_LINKS.linuxAppImage;
    default:
      return DOWNLOAD_LINKS.mac;
  }
};
