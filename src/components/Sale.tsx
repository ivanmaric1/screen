import React, { Component } from 'react';
import ActionCard from './ActionCard';
import Action from './Action';
import './Tablets.scss';

interface State {
  renderItem: boolean;
  itemVersion: string;
}

interface Props {
  addToCart: (ime: string, slika: string, cijena: string) => void;
}

class Sale extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderItem: false,
      itemVersion: '',
    };
  }
  renderCards = () => {
    let phonesCards: any[] = [];
    let keys = Object.keys(tabletsBase);

    keys.map((phone) => {
      phonesCards.push(
        <ActionCard
          ime={tabletsBase[phone].ime}
          foto={tabletsBase[phone].foto.prednja}
          cijenaStara={tabletsBase[phone].cijenaStara}
          cijenaNova={tabletsBase[phone].cijenaNova}
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
      let item = Object.keys(tabletsBase);
      let element;
      for (let i = 0; i < item.length; i++) {
        if (tabletsBase[item[i]].ime === version) {
          element = tabletsBase[item[i]];
        }
      }
      return (
        <Action
          cijenaStara={element.cijenaStara}
          cijenaNova={element.cijenaNova}
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

export default Sale;

const tabletsBase = {
  s42: {
    ime: 'CAT S42 Dual SIM Black',
    opis:
      'MožeŠ ga uranjati u vodu te čistiti toplom vodom i sapunom. Otpornost na padove, prašinu i udarce - naši pametni telefoni izrađeni su od najotpornijih materijala, izvana i iznutra',
    cijenaStara: '1 899,00 kn',
    cijenaNova: '1 899,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/Catspoklonom_v2_201102140117_500x700.png',
    },
    specifikacija: {
      dimenzija: '161,30x77,20x12,70 mm',
      težina: '220 g',
      zaslon: 'IPS LCD 5,5, 720x1440 px',
      os: '	Android 10',
      memorija: '	Radna (RAM): 3 GB; Interna (ROM): 32 GB',
      fotoaparat: '13 MP, autofokus',
      baterija: '	Li-Po, 4200 mAh',
    },
  },
  alcatel: {
    ime: '20.38X Dual SIM',
    opis: 'Najjeftiniji mobilni uređaj na tržištu!',
    cijenaStara: '399,00 kn',
    cijenaNova: '199,00 kn',
    foto: {
      prednja: 'https://www.tele2.hr/upload/alcatel_200928152954_500x700.png',
    },
    specifikacija: {
      dimenzija: '124x51,50x12,75 mm',
      težina: '88 g',
      zaslon: 'TFT 2,4", 320x240 px',
      os: '	Android 5',
      memorija: 'Radna (RAM): 64 MB RAM; Interna (ROM): 128 MB ROM',
      fotoaparat: 'nema',
      baterija: '950 mAh',
    },
  },
  g9: {
    ime: 'Motorola Moto G9 Plus Navy Blue',
    opis: 'Sat na poklon!',
    cijenaStara: '1 999,00 kn',
    cijenaNova: '1 599,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/MotoG9Plusfront_201014140615_500x700.png',
    },
    specifikacija: {
      dimenzija: '	170x78,10x9,70 mm',
      težina: '223 g',
      zaslon: 'LTPS LCD 6,81", 1080x2400 px',
      os: '	Android 10',
      memorija: 'Radna (RAM): 4 GB; Interna (ROM): 128 GB',
      fotoaparat: '64 MP+ 8 MP + 2 MP + 2 MP',
      baterija: 'Li-Po, 5000 mAh',
    },
  },
  doro: {
    ime: 'Doro 632 Single SIM Midnight Blue',
    opis:
      'Mobitel s kamerom koja ima jednostavne funkcije GPS-a i kompasa. Olakšano dijeljenje fotografija i slanje video poruka. Dodatne značajke uključuju izdvojenu tipku za SMS, sigurnosne funkcije i veliki čitljivi sat na vanjskom zaslonu.',
    cijenaStara: '899,00 kn',
    cijenaNova: '599,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/Doro_PhoneEasy_632_midnight_blue_front_1912_200204144533_500x700.png',
    },
    specifikacija: {
      dimenzija: '104x53x20 mm',
      težina: '105 g',
      zaslon: 'QVGA 2.4", 320x240 px',
      os: '	Android 5',
      memorija: '	Interna (ROM): 75 MB',
      fotoaparat: '2 MP',
      baterija: '800 mAh',
    },
  },
};
