import React, { Component } from 'react';
import WatchCard from './WatchCard';
import Watch from './Watch';
import './Watches.scss';

interface State {
  renderItem: boolean;
  itemVersion: string;
}

class Watches extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      renderItem: false,
      itemVersion: '',
    };
  }
  renderCards = () => {
    let phonesCards: any[] = [];
    let keys = Object.keys(watchesBase);

    keys.map((phone) => {
      phonesCards.push(
        <WatchCard
          ime={watchesBase[phone].ime}
          foto={watchesBase[phone].foto.prednja}
          cijena={watchesBase[phone].cijena}
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
      let item = Object.keys(watchesBase);
      let element;
      for (let i = 0; i < item.length; i++) {
        if (watchesBase[item[i]].ime === version) {
          element = watchesBase[item[i]];
        }
      }
      return (
        <Watch
          cijena={element.cijena}
          foto={element.foto}
          ime={element.ime}
          opis={element.opis}
          specifikacija={element.specifikacija}
          closePhoneItem={this.closePhoneItem}
        />
      );
    }

    return returned;
  };

  render() {
    return <div className="Watches">{this.renderContent()}</div>;
  }
}

export default Watches;

const watchesBase = {
  junior: {
    ime: 'Myki Junior Exclusive dječji pametni sat - Pink',
    opis:
      'Neka vam dijete uvijek bude na oku, čak i kad nije u tvojoj blizini! Uz MyKi Smart Watch uvijek ćete znati gdje se dijete nalazi, a Myki Smart Watch tvoj će mališan s užitkom nositi. ',
    cijena: '999,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/Mykisat__0002_Pink_201020091531_500x700.png',
    },
    specifikacija: {
      dimenzija: '56,20x14,30x38,70 mm',
      težina: '	45 g',
      zaslon: '	TFT LCD 1.4“ , 240x240 px',
      promjer: 'Promjer 27,94 mm (1,1 in)',
      memorija: '	Memorija pohrane (GB): 512 MB; Radna memorija (RAM): 256 MB',
      trajanjeBaterije: '	do 72 sati',
    },
  },
  gt2Classic: {
    ime: 'GT 2 Watch Classic',
    opis:
      'HUAWEI WATCH GT serija uvijek pomiče granice trajanja baterije pametnog sata. Uz HUAWEI samorazvojni nosivi čipset Kirin A1, dizajn dvostrukog čipa i inteligentnu tehnologiju za uštedu energije, sat možete bezbrižno koristiti danju i noću do 2 tjedna.',
    cijena: '1 599,00 kn',
    foto: {
      prednja: 'https://www.tele2.hr/upload/T0602145_200831165306_500x700.png',
    },
    specifikacija: {
      dimenzija: '45,9 mm x 45,9mm x 10,7 mm',
      težina: '41g ( bez remena )',
      zaslon: '1,2-inčni AMOLED 454 x 454 HD',
      promjer: 'Promjer od 33.02 mm, 1.3 inča',
      memorija: '4 GB',
      trajanjeBaterije: 'trajanje 14 dana',
    },
  },
  gt2Elegant: {
    ime: 'GT 2 Watch Elegant',
    opis:
      'HUAWEI WATCH GT serija uvijek pomiče granice trajanja baterije pametnog sata. Uz HUAWEI samorazvojni nosivi čipset Kirin A1, dizajn dvostrukog čipa i inteligentnu tehnologiju za uštedu energije, sat možete bezbrižno koristiti danju i noću do 2 tjedna.',
    cijena: '1 799,00 kn',
    foto: {
      prednja: 'https://www.tele2.hr/upload/T0602146_200831165231_500x700.png',
    },
    specifikacija: {
      dimenzija: '45,9 mm x 45,9mm x 10,7 mm',
      težina: '29g ( bez remena )',
      zaslon: '1,2 inčni AMOLED 390 x 390 HD, AMOLED zaslon osjetljiv na dodir',
      promjer: 'Promjer od 33.02 mm, 1.3 inča',
      memorija: '4 GB',
      trajanjeBaterije: ' 215 mAh, trajanje 7 dana',
    },
  },
  gt2Pro: {
    ime: 'GT2 Pro Watch Nebula Gray',
    opis:
      'Ovaj sat napravljen je od safirnog stakla i otporan je na ogrebotine, a neprimjetno se spaja s titanijskim kućištem za lagan i čvrst dizajn. Sjajna i koži prijateljska keramička poleđina osiguravaju ugodno nošenje. Sofisticiranom obradom, HUAWEI WATCH GT 2 Pro predstavlja profinjeni ukus uz savršenu ravnotežu umjetnosti i tehnologije.',
    cijena: '2 249,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/HuaweiGT2Pro_500x700px_201113111450_500x700.png',
    },
    specifikacija: {
      dimenzija: '46,7 mm x 46,7mm x 11,4 mm',
      težina: '52g ( bez remena )',
      zaslon:
        '1,39 inčni AMOLED 454 x 454 HD, AMOLED zaslon osjetljiv na dodir',
      promjer: 'Promjer od 33.02 mm, 1.3 inča',
      memorija: '4 GB',
      trajanjeBaterije: '455 mAh, trajanje 14 dana',
    },
  },
  galaxy3bronze: {
    ime: 'Galaxy Watch3 41mm BT Bronze',
    opis:
      'Sat koji se brine o Vama. Uz Galaxy Watch3 dobivate kombinaciju produktivnosti kao na pametnom telefonu i vodeće tehnologije za praćenje zdravlja u jednom premium i klasičnom uređaju. Naš najnapredniji Galaxy sat dosad, Galaxy Watch3 pomaže Vam da bez napora upravljate svojim životom i zdravljem – Vaša je dobrobit u Vašim rukama.',
    cijena: '2 699,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/T0602248novo_200831142720_500x700.png',
    },
    specifikacija: {
      dimenzija: ' 42.5 x 41.0 x 11.3 mm',
      težina: '48,2',
      zaslon:
        'Super AMOLED kapacitivni zaslon osjetljiv na dodir, 16M boja, Always On Display',
      promjer: '45 mm',
      memorija: '8 GB',
      trajanjeBaterije:
        'pojačano korištenje – do 43 sata; smanjeno korištenje do 120 sati',
    },
  },
  galaxy3black: {
    ime: 'Galaxy Watch3 45mm BT Black',
    opis:
      'Jedini pametni sat s precizno rotirajućim okvirom za navigaciju po aplikacijama. Biraj između dviju veličina kućišta, 45 mm ili 41 mm, od kojih svako dolazi s dojmljivim brojčanikom. Dostupan u vrhunskoj mistično crnoj, mistično sivoj i mistično brončanoj izvedbi, njegov se elegantan dizajn istaknut je u jedinstvenom rotirajućem okviru za izgled koji te ne prestaje oduševljavati.',
    cijena: '2 899,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/T0602249novo_200831142736_500x700.png',
    },
    specifikacija: {
      dimenzija: ' 42.5 x 41.0 x 11.3 mm',
      težina: '48,2',
      zaslon:
        'Super AMOLED kapacitivni zaslon osjetljiv na dodir, 16M boja, Always On Display',
      promjer: '45 mm',
      memorija: '8 GB',
      trajanjeBaterije:
        'pojačano korištenje – do 43 sata; smanjeno korištenje do 120 sati',
    },
  },
};
