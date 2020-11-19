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
  '5s': {
    ime: 'Garmin fenix 5S Sapphire',
    opis:
      'Za ozbiljne sportaše i avanturiste koji žele postići više, a ne nositi više – fēnix 5S savršeno je rješenje. To je naš vrhunski multisport sat koji nudi sve performanse u lakšem, elegantnijem, kompaktnijem dizajnu. Budite bolji nego jučer uz napredne funkcije koje će znatno utjecati na napredak vježbanja kao što su mjerenje pulsa na zapešću¹, ugrađeni profili aktivnosti, funkcije osnovne navigacije i praćenje performansi koje vam omogućuju bolju kontrolu nad mjerenjem učinkovitosti i napretkom vježbanja.',
    cijena: '4 999,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/Garmin/fenix-5/fenix-5s-1-500x500.jpg',
    },
    specifikacija: {
      dimenzija: '42.0 x 42.0 x 14.5 mm',
      težina: 'Sa silikonskim remenom: 67,0 g',
      zaslon:
        'Živopisni zaslon rezolucije 218 x 218 piksela koji je uvijek uključen',
      promjer: 'Promjer 27,94 mm (1,1 in)',
      memorija: '64 MB; dostupno 54 MB',
      trajanjeBaterije:
        'Do 9 dana u načinu rada pametnog sata (ovisno o postavkama),do 14 sati u GPS načinu rada i do 35 sati u načinu rada za uštedu energije UltraTrac',
    },
  },
  fenix6: {
    ime: 'Garmin fenix 6 Pro Solar, Mineral Blue/Whitestone',
    opis:
      'Robustan, ali sofisticiran dizajn sadrži velik zaslon od 1,3 inča. Testiran je u skladu s američkim vojnim standardima za otpornost na toplinu, udarce i vodu. Uskladite izgled sa svojim stilom života odabirom okvira od titanija, nehrđajućeg čelika ili okvira obloženog DLC slojem.',
    cijena: '6 999,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/garmin/2020/solar/fenix_6_pro_solar_mineral_blue_whitestone_1-450x450.png',
    },
    specifikacija: {
      dimenzija: '47 x 47 x 15.1 mm',
      težina: 'Čelik: 85 g (samo kućište: 62 g)',
      zaslon: '260 x 260 piksela',
      promjer: 'Promjer od 33.02 mm, 1.3 inča',
      memorija: '8 GB',
      trajanjeBaterije: '14 dana',
    },
  },
  suunto9: {
    ime: 'Suunto 9 Baro, Copper',
    opis:
      'Suunto 9 je multisport GPS sat namijenjen sportašima koji traže najbolje od svog sportskog sata. Sustav inteligentnog upravljanja životnim vijekom baterije s pametnim podsjetnicima osigurava da vaš sat traje onoliko dugo koliko vam je potrebno. Suunto 9 napravljen je za dugo, naporno treniranje i utrke, te ekstremne avanture.',
    cijena: '4 599,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/suunto/9-baro/suunto-9-g1-baro-copper-main-500x500.jpg',
    },
    specifikacija: {
      dimenzija: '130-230 mm',
      težina: '81 g / 2.86 oz',
      zaslon: '320 x 300',
      promjer: 'Promjer od 33.02 mm, 1.3 inča',
      memorija: '32 GB',
      trajanjeBaterije: 'Pametni sat: 14 dana / 16 dana uz solarno punjenje*',
    },
  },
  gt2: {
    ime: 'Huawei Watch GT 2 Pro, Night Black',
    opis:
      'Ovaj sat napravljen je od safirnog stakla i otporan je na ogrebotine, a neprimjetno se spaja s titanijskim kućištem za lagan i čvrst dizajn. Sjajna i koži prijateljska keramička poleđina osiguravaju ugodno nošenje. Sofisticiranom obradom, HUAWEI WATCH GT 2 Pro predstavlja profinjeni ukus uz savršenu ravnotežu umjetnosti i tehnologije.',
    cijena: '2 399,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/huawei/watch_gt_2_pro/huawei_watch_gt_2_pro_sport_1-500x500.jpg',
    },
    specifikacija: {
      dimenzija: '46,7 mm x 46,7 mm x 11,4 mm',
      težina: 'Otprilike 52 g (bez remena)',
      zaslon: '1,39-inčni AMOLED 454 x 454 HD',
      promjer: 'Promjer od 33.02 mm, 1.3 inča',
      memorija: '4 GB',
      trajanjeBaterije: 'Trajanje baterije: 14 dana uobičajenog korištenja.',
    },
  },
  galaxy3: {
    ime: 'Samsung Galaxy Watch 3',
    opis:
      'Sat koji se brine o Vama. Uz Galaxy Watch3 dobivate kombinaciju produktivnosti kao na pametnom telefonu i vodeće tehnologije za praćenje zdravlja u jednom premium i klasičnom uređaju. Naš najnapredniji Galaxy sat dosad, Galaxy Watch3 pomaže Vam da bez napora upravljate svojim životom i zdravljem – Vaša je dobrobit u Vašim rukama.',
    cijena: '3 909,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/samsung/galaxy-watch-3-titanium/galaxy-watch-3-titanium-1-500x500.jpg',
    },
    specifikacija: {
      dimenzija: '45.0 x 46.2 x 11.1 mm',
      težina: '43 g (bez narukvice)',
      zaslon:
        'Super AMOLED kapacitivni zaslon osjetljiv na dodir, 16M boja, Always On Display',
      promjer: '45 mm',
      memorija: '8 GB',
      trajanjeBaterije: 'Trajanje baterije: 14 dana uobičajenog korištenja.',
    },
  },
  vantage: {
    ime: 'Polar Vantage V, Orange',
    opis:
      'Vantage V sa zaslonom u boji osjetljivim na dodir prati vašu dnevnu aktivnost 24/7, broji potrošene kalorije i korake, te vam pomoću Sleep Plus programa daje povratne informacije o kvaliteti spavanja. Polarov test kondicije na temelju mjerenja otkucaja srca na zapešću testira vašu kondiciju u svakom trenutku, na bilo kojem mjestu. Funkcija Stanje oporavka vam prikazuje vrijeme potrebno za oporavak prije sljedećeg vježbanja. ',
    cijena: '2 999,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/polar/vantage-v/polar-vantage-v-orange-1-500x500.jpg',
    },
    specifikacija: {
      dimenzija: '46 x 46 x 13 mm',
      težina: '66 g',
      zaslon: 'Veličina 3,048 cm (1,2 inča), razlučivost 240 x 240 piksela.',
      promjer: '30 mm',
      memorija: '8 GB',
      trajanjeBaterije: 'Trajanje baterije do 30 sati u načinu vježbanja',
    },
  },
  polar: {
    ime: 'Polar Ignite, Pink/Rose',
    opis:
      'Polar Ignite je vodootporan fitnes sat sa naprednim mjeračem otkucaja srca na zapešću i integriranim sistemom GPS. Taj pratitelj vježbanja vam pruža sve informacije potrebne za poboljšanje vaše izvedbe i pomaže vam da pomaknete granice na pravi način. Polar Ignite prikazuje informacije o vašim  dnevnim aktivnostima i usmjerava vas prema uravnoteženom načinu života.',
    cijena: '1 599,00 kn',
    foto: {
      prednja:
        'https://img.polleosport.hr//cache/data/polar/ignite/polar-ignite-pink-rosegold-1-500x500.jpg',
    },
    specifikacija: {
      dimenzija: '43 × 43 × 8,5 mm',
      težina: '35 g (sa remenom), 21 g (bez remena)',
      zaslon:
        'Zaslon u boji na dodir (IPS TFT) sa senzorom ambijentalne svijetlosti (ALS), razlučivost 240 × 204. ',
      promjer: '30 mm',
      memorija: '8 GB',
      trajanjeBaterije:
        'Trajanje baterije do 17 u načinu vježbanja (GPS i otkucaji srca na zapešču), do 5 dana u načinu rada sa neprekidnim praćenjem broja otkucaja srca na zapešću.',
    },
  },
};
