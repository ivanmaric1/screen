import React, { Component, ReactElement, useState } from 'react';
import Filter from './Filter';
import Phone from './Phone';
import PhoneCard from './PhoneCard';
import './Phones.scss';

interface State {
  brand: string;
}

class Phones extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { brand: 'all' };
  }

  setBrand = (brand: string) => {
    this.setState({ brand });
  };

  renderCards = () => {
    let phonesCards: ReactElement[] = [];

    if (this.state.brand === 'all' || this.state.brand === 'samsung') {
      let keys = Object.keys(phonesBase.samsung);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.samsung[phone].ime}
            foto={phonesBase.samsung[phone].foto.prednja}
            cijena={phonesBase.samsung[phone].cijena}
          />
        );
      });
    }

    if (this.state.brand === 'all' || this.state.brand === 'huawei') {
      let keys = Object.keys(phonesBase.huawei);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.huawei[phone].ime}
            foto={phonesBase.huawei[phone].foto.prednja}
            cijena={phonesBase.huawei[phone].cijena}
          />
        );
      });
    }

    if (this.state.brand === 'all' || this.state.brand === 'iphone') {
      let keys = Object.keys(phonesBase.iphone);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.iphone[phone].ime}
            foto={phonesBase.iphone[phone].foto.prednja}
            cijena={phonesBase.iphone[phone].cijena}
          />
        );
      });
    }

    if (this.state.brand === 'all' || this.state.brand === 'xiaomi') {
      let keys = Object.keys(phonesBase.xiaomi);
      keys.map((phone) => {
        phonesCards.push(
          <PhoneCard
            ime={phonesBase.xiaomi[phone].ime}
            foto={phonesBase.xiaomi[phone].foto.prednja}
            cijena={phonesBase.xiaomi[phone].cijena}
          />
        );
      });
    }

    console.log(phonesCards);

    return phonesCards;
  };

  render() {
    return (
      <div className="Phones">
        <Filter setBrand={this.setBrand} />
        {this.renderCards()}
      </div>
    );
  }
}

export default Phones;

const phonesBase = {
  samsung: {
    s20: {
      ime: 'Samsung Galaxy S20 Ultra Dual SIM Cosmic Black',
      opis:
        'Upoznaj Galaxy S20, S20+ i S20 Ultra. Revolucionarnim snimanjem 8K videozapisa mijenjaš način na koji snimaš ne samo videozapise, već i fotografije.1 Dodajte Samsung Knox sigurnost, inteligentnu bateriju, snažni procesor i masovnu pohranu, i Galaxy S20 serija otkriva sasvim novi svijet za mobilne uređaje.',
      cijena: '9 800,00 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/smg988_z3_front_black_191219_201005112158_500x700.png',

        zadnja:
          'https://www.tele2.hr/upload/S20Ultra_back_black_060220_200211103622_500x700.png',
      },
      specifikacija: {
        dimenzija: '151x71,80x7,90 mm',
        težina: '168 g',
        zaslon: 'Dynamic AMOLED 6.3" , 1080x2280 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
        fotoaparat: '16 MP + 12 MP + 12 MP',
        baterija: 'Li-Ion, 3500 mAh',
      },
    },
    fold: {
      ime: 'Galaxy Fold Black',
      opis:
        'Promijenili smo oblik mobitela, ali i budućnosti. Novina u tehnologiji izrade zaslona: preklopivi Infinity Flex zaslon.Zapanjujući 7,3-inčni Dynamic AMOLED zaslon koji prkosi očekivanjima. Napravljen od tankog fleksibilnog slojevitog polimera, to je najveći zaslon na Galaxy pametnom mobitelu dosad.Zglob čini otvaranje lakim i blagim. Dizajnersko čudo nadahnuto preciznošću mehanizma ručnog sata, zglob se simetrično pomiče kako bi se nježno zaključao. Tako se mobitel Galaxy Fold intuitivno zatvara poput knjige.',
      cijena: '15 199,00 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/SamsungFold_galaxy_black_front_1812_201001114158_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/SamsungFold_galaxy_black_back_1812_200304090708_500x700.png',
      },
      specifikacija: {
        dimenzija: '160,90x117,90x6,90 mm',
        težina: '263 g',
        zaslon:
          'Preklopni Dynamic AMOLED – otvoren / Super AMOLED zatvoren – prednja strana, (1536x2152) / 720x1680 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 12 GB; Interna (ROM): 512 GB',
        fotoaparat: ' 12 MP + 12 MP + 16 MP',
        baterija: '4380 mAh',
      },
    },
    zFlip: {
      ime: 'Galaxy Z Flip Purple Mirror',
      opis:
        'Galaxy Z Flip preklapa se do iznenađujuće male veličine čime se postiže izvanredno dizajnirani telefon koji pristaje u tvoj džep, torbu ili modni dodatak',
      cijena: '11 199 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/sm_f700f_galaxyzflip_140220__0007_fronttabletop_purple_200223132743_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/sm_f700f_galaxyzflip_140220__0009_back_purple_200223132917_500x700.png',
      },
      specifikacija: {
        dimenzija: '167,30x73,60x7,20 mm',
        težina: '183 g',
        zaslon:
          '	Preklopni Dynamic AMOLED – otvoren / Super AMOLED zatvoren – prednja strana, 1080x2636 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
        fotoaparat: '12 MP + 12 MP, autofokus',
        baterija: '	Li-Po, 3300 mAh',
      },
    },
    note10: {
      ime: 'Galaxy Note10 Dual SIM Aura Black',
      opis:
        'Vrlo elegantan nehrđajući čelik i staklo savršeno se stapaju - sve u impresivno tankom dizajnu.',
      cijena: '6 449 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/500x700__0026_samsungnote10_front_pen_aurablack_201005110947_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/samsungnote10_back_pen_aurablack_030120_200304091451_500x700.png',
      },
      specifikacija: {
        dimenzija: '151x71,80x7,90 mm',
        težina: '168 g',
        zaslon: 'Dynamic AMOLED 6.3" , 1080x2280 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
        fotoaparat: '16 MP + 12 MP + 12 MP',
        baterija: 'Li-Ion, 3500 mAh',
      },
    },
    s10: {
      ime: 'Galaxy S10 Lite Dual SIM Black',
      opis:
        'Boje iz Magical Prism palete S10 Lite uređaja izgledaju zadivljujuće svaki put kad ih pogledaš. Zahvaljujući uglađenim i zaobljenim rubovima koji omogućuju ergonomsko prijanjanje, S10 Lite predstavlja savršen spoj udobnog ležanja u ruci i oku ugodnog dizajna.',
      cijena: '4 999 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/galaxys10_lite_front_prism_black_290120_201001114843_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/galaxys10_lite_back_prism_black_290120_200306084311_500x700.png',
      },
      specifikacija: {
        dimenzija: '162,50x75,60x8,10 mm',
        težina: '186 g',
        zaslon: 'Super AMOLED 6.7", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 128 GB',
        fotoaparat: '48 MP + 12 MP + 5 MP, autofokus',
        baterija: 'Li-Ion, 4500 mAh',
      },
    },
    a71: {
      ime: 'Galaxy A71 Dual Sim Black',
      opis:
        'Super AMOLED Plus tehnologija prikaza boja, koja se nalazi u podlozi simetrično poravnatog Infinity-O zaslona dijagonale 6,7“, Galaxy A71 uređaju donosi realističan prikaz boja u svemu što gledaš i radiš – od igranja videoigara i gledanja filmova do pregledavanja interneta i obavljanja više zadataka u isto vrijeme. Zaslon ne mora biti prepreka da počneš više uživati u onom što voliš.',
      cijena: '3 399 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/SM_galaxya71_black_front_240120_500x700_201001114110_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/SM_galaxya71_black_back_240120_500x700_200305141858_500x700.png',
      },
      specifikacija: {
        dimenzija: '163,60x76x7,70 mm',
        težina: '179 g',
        zaslon: 'Super AMOLED 6.7", 2400x1080 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat: '64 MP + 12 MP + 5 MP + 5 MP, autofokus',
        baterija: 'Li-Po, 4500 mAh',
      },
    },
    a51: {
      ime: 'Galaxy A51 Dual SIM Black',
      opis:
        'Infinity-O zaslon A51 uređaja optimizira vizualnu simetriju. Sada možeš gejmati, gledati, surfati i multitaskati bez prekida na zaslonu širokog formata dijagonale 6,5“ i FHD+ razlučivosti - a sve to omogućuje ti Super AMOLED tehnologija. Uživaj u iskustvu upotrebe pametnog telefona koji okvir zaslona svodi na najmanju moguću mjeru i daje najviše zaslonskog prostora po svakom inču.',
      cijena: '2 549 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/Samsung_galaxya51_black_front_080120_500x700_201001114341_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/Samsung_galaxya51_black_back_080120_500x700_200305141943_500x700.png',
      },
      specifikacija: {
        dimenzija: '163,60x76x7,70 mm',
        težina: '172 g',
        zaslon: 'Super AMOLED kapacitivni dodirnik 6.5", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM): 128 GB',
        fotoaparat: '48 MP + 5 MP+ 5 MP+ 12 MP',
        baterija: 'Li-Po, 4000 mAh',
      },
    },
    a31: {
      ime: 'Galaxy A31 Dual SIM Black',
      opis:
        'Infinity-O zaslon A51 uređaja optimizira vizualnu simetriju. Sada možeš gejmati, gledati, surfati i multitaskati bez prekida na zaslonu širokog formata dijagonale 6,5“ i FHD+ razlučivosti - a sve to omogućuje ti Super AMOLED tehnologija. Uživaj u iskustvu upotrebe pametnog telefona koji okvir zaslona svodi na najmanju moguću mjeru i daje najviše zaslonskog prostora po svakom inču.',
      cijena: '2 199 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/08_galaxya31_black_frontcopy_201005110726_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/galaxya31_black_240820__0004_Back_200825101345_500x700.png',
      },
      specifikacija: {
        dimenzija: '159,30x73,10x8,60 mm',
        težina: '185 g',
        zaslon: 'Super AMOLED kapacitivni dodirnik 6.4", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM): 64 GB',
        fotoaparat:
          '48 MP + 8 MP + 5 MP + 5 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Po, 5000 mAh',
      },
    },
    a10: {
      ime: 'Galaxy A10 Dual SIM Black',
      opis:
        '6,2 inča HD+ zaslona na mobitelu koji voliš gledati. Bez obzira voliš li humoristične serije ili MMORPG igre, Infinity-V zaslon na Galaxy A10 mobitelu mijenja način na koji ih doživljavaš i stavlja te usred akcije. Provjeri kamo će te doživljaj odvesti na v-cut zaslonu.',
      cijena: '1 099 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/SM_Galaxy_A10__0000_front_200826100032_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/SM_Galaxy_A10__0002_back_200826095855_500x700.png',
      },
      specifikacija: {
        dimenzija: '155,60x75,80x8,10 mm',
        težina: '168 g',
        zaslon: 'IPS LCD kapacitativni dodirnik 6.2", 720x1520 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 2 GB; Interna (ROM): 32 GB',
        fotoaparat: '	13 MP, autofokus',
        baterija: '	Li-Ion, 3400 mAh',
      },
    },
  },
  huawei: {
    p40: {
      ime: 'P40 Pro+ Dual SIM Black',
      opis:
        'Govoriš sam s Ultra Vision Leica peterostrukom kamerom snimajući fotografije i videozapise u bilo koje vrijeme i bilo gdje. Revoluciraj svoje iskustvo brzine i snage uz vrhunski Kirin 990 5G čipset. Inovativni dizajn nadograđuje tvoju vizualnu zabavu i ergonomsku udobnost. Istraži sada i budućnost uz HUAWEI P40 Pro +.',
      cijena: '5 449 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/HuaweiP40ProBLACK_201001112036_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/HuaweiP40ProBACK_200629142321_500x700.png',
      },
      specifikacija: {
        dimenzija: '148,90x71,06x8,50 mm',
        težina: '175 g',
        zaslon: '	OLED 6.1“ , 1080x2340 px',
        os: 'Android 10 bez Google servisa',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 128 GB',
        fotoaparat: '50 MP + 16 MP + 8 MP ',
        baterija: 'Li-Po, 3800 mAh',
      },
    },
    p30: {
      ime: 'P30 Dual SIM Black',
      opis:
        'Jasnije, šire, bliže. Istraži svijet iz nove perspektive. Pronađi još iznenađenja u svijetu koji te okružuje i pretvori ih u dragocjene uspomene. HUAWEI P30 pomiče granice mobilne fotografije.',
      cijena: '3 449 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/HuaweiP30crni_201001111332_500x700.png',
        zadnja: 'https://www.tele2.hr/upload/p30back_190327134814_500x700.png',
      },
      specifikacija: {
        dimenzija: '149,10x71,36x7,57 mm',
        težina: '165 g',
        zaslon: '	OLED 6.1“ , 1080x2340 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat: '40 MP + 16 MP + 8 MP, autofokus',
        baterija: 'Li-Po, 3650 mAh',
      },
    },
    p40lite: {
      ime: 'P40 Lite Dual SIM Midnight Black',
      opis:
        'Svijet je pun ljepota koje čekaju da ih otkriješ. S 4 stražnje kamere, HUAWEI P40 lite slika šire, jasnije i bliže nego što si ikad mogao zamisliti. Snimaj kinematografske portrete s bokeh objektivom, a zatim se prebaci na makro objektiv i snimi super detaljne fotografije prirodnih ljepota. Imaš sve mogućnosti na dlanu koristeći isti telefon. Osjećaj je kao da imaš profesionalni foto studio u džepu.',
      cijena: '1 999 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/p40liteblack_200522103324_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/p40lite110520_bez_black_back_200513141210_500x700.png',
      },
      specifikacija: {
        dimenzija: '159,20x76,30x8,70 mm',
        težina: '183 g',
        zaslon: 'LTPS LCD 6.4", 1080x2310 px',
        os: 'Android 10 bez Google servisa',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat: '48 MP + 8 MP + 2 MP+ 2 MP , autofokus',
        baterija: 'Li-Po, 4200 mAh',
      },
    },
    pSmartZ: {
      ime: 'P Smart Z Dual SIM Blue',
      opis:
        'Jedinstveni 6.59-inčni HUAWEI Ultra FullView zaslon pruža iznimno široku sliku. Iskusi neograničenu zabavu tijekom gledanja videozapisa, igranja igara ili čitanja online knjiga, a sve na zaslonu koji gotovo da i nema okvir.',
      cijena: '1 899 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/psmartzblue_front_201001112158_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/psmartzblue_back_1312_200317092747_500x700.png',
      },
      specifikacija: {
        dimenzija: '163,50x77,30x8,80 mm',
        težina: '196 g',
        zaslon: 'LTPS LCD kapacitivni dodirnik 6.59“, 1080x2340 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM): 64 GB',
        fotoaparat: '16 MP + 2 MP, autofokus',
        baterija: 'Li-Ion, 4000 mAh',
      },
    },
    y6: {
      ime: 'Y6 2019 Dual SIM Black',
      opis:
        'Otkrij novi svijet bez granica na 6,09-inčnom Dewdrop HD+ zaslonu koji ima 87%-tni omjer ekrana u odnosu na kućište i omogućuje kvalitetniji pogled na videozapise, slike i najdraže e-knjige. HUAWEI Y6 2019 također blokira štetno plavo svjetlo i posjeduje TÜV Rheinland certifikat.',
      cijena: '899 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/HuaweiY62019black_front_1312_200204142656_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/HuaweiY62019black_back_1312_200317091006_500x700.png',
      },
      specifikacija: {
        dimenzija: '156,30x73,50x8 mm',
        težina: '150 g',
        zaslon: 'IPS LCD kapacitativni dodirnik 6.09“ , 720x1560 px',
        os: 'Android 9.0',
        memorija: 'Radna (RAM): 2 GB; Interna (ROM): 32 GB',
        fotoaparat: '13 MP, autofokus',
        baterija: '	Li-Ion, 3020 mAh',
      },
    },
  },
  iphone: {
    12: {
      ime: '12 128GB Black',
      opis:
        '5G brzina. A14 Bionic, najbrži čip u pametnom telefonu. OLED zaslon od ruba do ruba. Keramički štit s četiri puta boljim performansama pada. I noćni način rada na svakoj kameri. iPhone 12 ima sve. Keramički štit. Jasno tvrđi od bilo kojeg stakla pametnog telefona.',
      cijena: '8 649 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/iPhone12_Black_500x700px_201111140531_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/Black__0003_iPhone12Back_201111140606_500x700.png',
      },
      specifikacija: {
        dimenzija: '146,70x71,50x7,40 mm',
        težina: '164 g',
        zaslon: '	OLED 6,1", 1170 x 2532 px',
        os: 'iOS 14.1',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM):128',
        fotoaparat: '12 MP + 12 MP',
        baterija: '2815 mAh',
      },
    },
    xs: {
      ime: 'XS Max 64 GB Space Gray',
      opis:
        'Najpametniji i najmoćniji čip za pametne telefone. Najnovija generacija Neural Enginea omogućuje fenomenalne doživljaje proširene stvarnosti, prekrasne portrete s kontrolom dubine i velike brzine pri svemu što radiš. Novi senzor pruža bolju kvalitetu slike, vjerniji prikaz boja i smanjuje šum na fotografijama snimljenim pri slabom svjetlu.',
      cijena: '8 649 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/iphoneXSmax_front_051020__0001_gray_201005135955_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/iPhoneXsMax_back_gray_030419_190404141924_500x700.png',
      },
      specifikacija: {
        dimenzija: '157,70x77,40x7,70 mm',
        težina: '208 g',
        zaslon: 'OLED 6.1“ , 2688x1242 px, 16M boja',
        os: 'iOS',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM):64 GB',
        fotoaparat: '12 MP + 12 MP, autofokus',
        baterija: 'Li-Ion, 3174 mAh',
      },
    },
    11: {
      ime: '11 64GB Green',
      opis:
        'Potpuno novi sustav dvojne kamere. Prebaci se sa širokokutnog fotkanja na ultraširokokutno. Redizajnirano sučelje koristi novu ultraširokokutnu kameru koja ti prikazuje što se događa izvan okvira — i omogućuje ti da to snimiš. Snimaj i uređuj videozapise jednostavno kao i fotografije. Najpopularnija kamera na svijetu dobila je posve novu perspektivu.',
      cijena: '6 699 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/iphoneXSmax_front_051020__0001_gray_201005135955_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/iPhoneXsMax_back_gray_030419_190404141924_500x700.png',
      },
      specifikacija: {
        dimenzija: '150,90x75,70x8,30 mm',
        težina: '194 g',
        zaslon: 'Liquid Retina LCD',
        os: 'iOS 13',
        memorija: 'Radna (RAM): 4 GB; Interna (ROM):64 GB',
        fotoaparat: '12 MP + 12 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Ion, 3110 mAh',
      },
    },
    xr: {
      ime: 'XR 64 GB Product Red',
      opis:
        'Kontrola dubine. Dubinsku oštrinu na portretima sada možeš prilagoditi i kada je fotografija već snimljena. Pametni HDR. Nove sekundarne sličice, brži senzor i moćni čip A12 Bionic izvlače više detalja iz svjetla i sjene na tvojim fotografijama.',
      cijena: '5 699 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/iphoneXSmax_front_051020__0001_gray_201005135955_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/iPhoneXsMax_back_gray_030419_190404141924_500x700.png',
      },
      specifikacija: {
        dimenzija: '150,90x75,70x8,30 mm',
        težina: '194 g',
        zaslon: 'IPS LCD kapacitativni dodirnik 6.2", 1792x828 px, 16M boja',
        os: 'iOS',
        memorija: 'Radna (RAM): 3 GB; Interna (ROM): 64 GB',
        fotoaparat: '12 MP, autofokus',
        baterija: 'Li-Ion, 2942 mAh',
      },
    },
  },
  xiaomi: {
    mi10: {
      ime: 'Mi 10T Pro Dual SIM Lunar Silver',
      opis:
        'Xiaomi je odigrao istaknutu ulogu u definiranju segmenta kamera od 108MP, a Mi 10T Pro nastavlja to nasljeđe. Uz OIS i podršku za 8K video, Mi 10T Pro postavlja novi standard. Nadovezujući se na našu postojeću tehnologiju, uvrstili smo nove i dinamične značajke softvera za fotografiju, kao što su klonovi za fotografiju i video, načini duge ekspozicije, time-lapse selfie, tempirani prasak i dvostruki videozapis za povišenu kreativnost i privlačnost.',
      cijena: '3 599 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/iphoneXSmax_front_051020__0001_gray_201005135955_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/iPhoneXsMax_back_gray_030419_190404141924_500x700.png',
      },
      specifikacija: {
        dimenzija: '165,10x76,40x9,30 mm',
        težina: '218 g',
        zaslon: 'IPS LCD 6,67", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 8 GB; Interna (ROM): 128 GB',
        fotoaparat:
          '108 MP + 13 MP + 5 MP, autofokus, optički zoom, digitalni zoom',
        baterija: '5000 mAh',
      },
    },
    note9: {
      ime: 'Redmi Note 9 Pro Dual SIM White',
      opis:
        'Redmi Note 9 Pro sadrži snažnu četverostruku kameru od 64MP, spremnu za svaku situaciju. Snimi vrlo jasne fotografije pomoću glavne kamere od 64MP. Napravi videozapise u kazališnom stilu izravno sa svog pametnog telefona s 4K rezolucijom. A selfiei su još uzbudljiviji uz selfie slow motion.',
      cijena: '3 599 kn',
      foto: {
        prednja:
          'https://www.tele2.hr/upload/iphoneXSmax_front_051020__0001_gray_201005135955_500x700.png',
        zadnja:
          'https://www.tele2.hr/upload/iPhoneXsMax_back_gray_030419_190404141924_500x700.png',
      },
      specifikacija: {
        dimenzija: '165,70x76,70x8,80 mm',
        težina: '209 g',
        zaslon: 'IPS LCD 6.67", 1080x2400 px',
        os: 'Android 10',
        memorija: 'Radna (RAM): 6 GB; Interna (ROM): 128 GB',
        fotoaparat:
          '64 MP + 8 MP + 5 MP + 2 MP, autofokus, optički zoom, digitalni zoom',
        baterija: 'Li-Po, 5020 mAh',
      },
    },
  },
};

/*
   <Phone
        ime={'Samsung Galaxy S20 Ultra Dual SIM Cosmic Black'}
        opis={
          'Upoznaj Galaxy S20, S20+ i S20 Ultra. Revolucionarnim snimanjem 8K videozapisa mijenjaš način na koji snimaš ne samo videozapise, već i fotografije.1 Dodajte Samsung Knox sigurnost, inteligentnu bateriju, snažni procesor i masovnu pohranu, i Galaxy S20 serija otkriva sasvim novi svijet za mobilne uređaje.'
        }
        cijena={'9 800,00 kn'}
        foto={{
          prednja:
            'https://www.tele2.hr/upload/smg988_z3_front_black_191219_201005112158_500x700.png',

          zadnja:
            'https://www.tele2.hr/upload/S20Ultra_back_black_060220_200211103622_500x700.png',
        }}
        specifikacija={{
          dimenzija: '151x71,80x7,90 mm',
          težina: '168 g',
          zaslon: 'Dynamic AMOLED 6.3" , 1080x2280 px',
          os: 'Android 9.0',
          memorija: 'Radna (RAM): 8 GB; Interna (ROM): 256 GB',
          fotoaparat: '16 MP + 12 MP + 12 MP',
          baterija: 'Li-Ion, 3500 mAh',
        }}
      />
*/
