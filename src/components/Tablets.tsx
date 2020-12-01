import React, { Component } from 'react';
import PhoneCard from './PhoneCard';
import Tablet from './Tablet';
import './Tablets.scss';

interface State {
  renderItem: boolean;
  itemVersion: string;
}

interface Props {
  addToCart: (ime: string, slika: string, cijena: string) => void;
}

class Tablets extends Component<Props, State> {
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
        <PhoneCard
          ime={tabletsBase[phone].ime}
          foto={tabletsBase[phone].foto.prednja}
          cijena={tabletsBase[phone].cijena}
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
        <Tablet
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

export default Tablets;

const tabletsBase = {
  eČitač: {
    ime: 'Kindle E-čitač 4GB Black',
    opis:
      'Podesivo prednje svjetlo omogućava ti da udobno čitaš satima, u kući i na otvorenom, danju i noću.Namjena izrađena za čitanje, sa zaslonom bez odsjaja od 167 ppi, koji izgleda i poput tiskanog papira, čak i na izravnom suncu.Čitanje bez ometanja. Označi odlomke, potraži definicije, prevedi riječi i prilagodi veličinu teksta, bez napuštanja stranice. Odaberite iz milijuna knjiga, novina i audio knjiga. Sadrži tisuće naslova da bi mogli ponijeti svoju biblioteku sa sobom. Jedno punjenje baterije traje tjednima, a ne satima.',
    cijena: '949,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/Kindle_front_210220_200320082833_500x700.png',
    },
    specifikacija: {
      dimenzija: '160x113x8,70 mm',
      težina: '174 g',
      zaslon: 'E - paper 6", 167dpi px',
      os: 'Kindle',
      memorija: '4GB',
      fotoaparat: 'nema',
      baterija: '4000 mAh',
    },
  },
  yoga: {
    ime: 'Lenovo Yoga Smart Tab',
    opis:
      'Lenovo Yoga Smart Tab s Google Assistantom nadograđuje revolucionarni multimedijski dizajn postolja za Yoga Tab i izvrsne zabavne značajke - uključujući FHD IPS zaslon i dvostruke JBL® stereo zvučnike - i dodaje snagu prijenosnog pametnog doma. Kad uređaj miruje, samo otvori postolje za oslobađanje prostora i otključaj Ambient način rada Google Assistant-a vizualnim povratnim informacijama - i upravljaj svijetom samo svojim glasom.',
    cijena: '2 499,00 kn',
    foto: {
      prednja: 'https://www.tele2.hr/upload/Yoga_200320083811_500x700.png',
    },
    specifikacija: {
      dimenzija: '24x242x166 mm',
      težina: '580 g',
      zaslon: 'IPS LCD 10.1", 1920x1200 px',
      os: 'Android 9.0',
      memorija: 'Memorija za pohranu: 64GB, micro SD do 256 GB',
      fotoaparat: '8 MP',
      baterija: 'Li-Polimer, 7000 mAh',
    },
  },
  tabA: {
    ime: 'SamsungGalaxy Tab A 10.1" 32GB LTE',
    opis:
      'Zabava je upravo postala malo bliža. Sastavili smo tablet koji je svestran i elegantan, a istodobno pristupačan jer zabava nove generacije pripada svim generacijama. Uz Galaxy Tab A (2019, 10.1") dobivaš vrhunsku zabavu po pristupačnoj cijeni.',
    cijena: '2 099,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/SamsungTABAFRONT_200619130611_500x700.png',
    },
    specifikacija: {
      dimenzija: '245,20x149,40x7,50 mm',
      težina: '470 g',
      zaslon: 'IPS LCD 10.1", 1920x1200 px',
      os: 'Android 9.0',
      memorija: 'Radna (RAM): 2 GB; Interna (ROM): 32 GB',
      fotoaparat: '8 MP',
      baterija: 'Li-Po, 6150 mAh',
    },
  },
  t3: {
    ime: 'Huawei MediaPad T3 10" WiFi Space Gray',
    opis:
      'Dodirni snagu briljantnog dizajna s HUAWEI MediaPad T3 10. Pogledaj svijet u živim bojama kroz živopisan zaslon od 9,6 inča. Osjeti kvalitetu u jednodijelnom, anodiziranom aluminijskom tijelu svemirskog doba.',
    cijena: '1 099,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/Tablet_front_210220_200320082921_500x700.png',
    },
    specifikacija: {
      dimenzija: '229,80x159,80x7,95 mm',
      težina: '460 g',
      zaslon: 'IPS LCD kapacitativni dodirnik 9.6", , 1280x800 px',
      os: 'Android 7.0',
      memorija: 'Radna (RAM): 2 GB; Interna (ROM): 16 GB',
      fotoaparat: '5 MP, autofokus',
      baterija: '4800 mAh',
    },
  },

  ideaPad: {
    ime: 'Lenovo IdeaPad 3 Silver',
    opis:
      'Iako se može cijeniti kao laptop za svakodnevnu upotrebu, IdeaPad 3 (15, AMD) predstavlja nešto više. Osim toga, radiš li na obiteljskom proračunu ili pripremaš proračunsku tablicu, zgodna numerička tipkovnica ubrzat će tvoju produktivnost.',
    cijena: '3 299,00 kn',
    foto: {
      prednja:
        'https://www.tele2.hr/upload/02_IDEAPAD_3_15INCH_IMR_PLATINUM_GREY_NONBACKLITKB_FPR_INTEL_HERO_FRONT_FACING_JD_201020091442_500x700.png',
    },
    specifikacija: {
      dimenzija: '362.2 mm x 253.4 mm x 19.9 mm',
      težina: '1,85 kg',
      zaslon: '15.6“ FHD ( 1920 X 1080 )',
      os: 'Windows 10 Home u 64 bit verziji',
      memorija: '256GB SSD',
      fotoaparat: '0.3 MP',
      baterija: '39Wh',
    },
  },
};
