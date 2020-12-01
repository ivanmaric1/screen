import React, { Component } from 'react';
import PhoneCard from './PhoneCard';
import AdditionalEq from './AdditionalEq';
import './Tablets.scss';

interface State {
  renderItem: boolean;
  itemVersion: string;
}

interface Props {
  addToCart: (ime: string, slika: string, cijena: string) => void;
}

class Additional extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderItem: false,
      itemVersion: '',
    };
  }
  renderCards = () => {
    let phonesCards: any[] = [];
    let keys = Object.keys(additionalBase);

    keys.map((phone) => {
      phonesCards.push(
        <PhoneCard
          ime={additionalBase[phone].ime}
          foto={additionalBase[phone].foto.prednja}
          cijena={additionalBase[phone].cijena}
          openPhoneItem={this.openPhoneItem}
          brand=""
        />
      );
    });
    return phonesCards;
  };

  openPhoneItem = (event: React.MouseEvent) => {
    const target = event.target as any;
    const version = target.parentElement?.firstChild.innerHTML;
    this.setState({ renderItem: true, itemVersion: version });
  };

  closePhoneItem = () => {
    this.setState({ renderItem: false });
  };

  renderContent = () => {
    let returned: any[] = [];

    if (!this.state.renderItem) {
      returned = this.renderCards();
    } else {
      const version = this.state.itemVersion;
      let item = Object.keys(additionalBase);
      let element;
      for (let i = 0; i < item.length; i++) {
        if (additionalBase[item[i]].ime === version) {
          element = additionalBase[item[i]];
        }
      }
      return (
        <AdditionalEq
          cijena={element.cijena}
          foto={element.foto}
          ime={element.ime}
          opis={element.opis}
          specifikacija={element.specifikacija}
          closePhoneItem={this.closePhoneItem}
          addToCart={this.props.addToCart}
        />
      );
    }

    return returned;
  };

  render() {
    return <div className="Tablets">{this.renderContent()}</div>;
  }
}

export default Additional;

const additionalBase = {
  b535: {
    ime: 'Huawei B535 White CAT 7',
    opis:
      '2G: 850 / 900 / 1800 / 1900 / 3G: 900 / 2100 / 4G (LTE): 800 / 900 / 1800 / 2100 / 2600 (B1/3/7/8/20/32/38)',
    cijena: '899,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/Pokucni_internet_200915110028_500x700.png',
    },
    specifikacija:
      'Prijenos podataka: HSPA+ do 42,2 Mb/s, LTE 300/100 (CAT 7), Wi-Fi Hotspot (802.11b/g/n/ac/a/n), Wi-Fi MIMO 2x2 / Kompatibilnost: Windows 8.1, Windows 8, Windows 7, Windows 10, Windows Vista SP1/SP2, Windows XP SP3, Mac OS X / Eksterni ulazi: 3x LAN (RJ45), 1x WAN/LAN (RJ45), 1x USB 2.0, 1x Telefonski ulaz (RJ11), Micro SD utor / Dodatni ulazi za antene: DA, 2X LTE antena ulaza (SMA-J1.5) / Ostalo: WPS, do 64 aktivnih konekcija',
  },
  zte: {
    ime: 'ZTE MF927 White MiFi CAT4 Router',
    opis:
      '2G: 850 / 900 / 1800 / 1900 / 3G: 850 / 900 / 2100 / 4G (LTE): 2100 / 1800 / 850 / 2600 / 900 / 800 / 2300',
    cijena: '549,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/MF927U4CroatiaTELE2_240220_200415152218_500x700.png',
    },
    specifikacija:
      'Kompatibilnost: Windows 8.1, Windows 8, Windows 7, Windows 10, Windows Vista SP1/SP2, Windows XP SP3, Mac OS X / Baterija: 2000 mAh vrijeme rada do 7h / Ostalo: WPA/WPA2, do 32 aktivnih konekcija',
  },
};
