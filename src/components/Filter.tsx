import React from 'react';
import './Filter.scss';
import dostava from '../img/dostava.jpg';
import jamstvo from '../img/jamstvo.jpg';

interface Props {
  setSamsung: () => void;
  setHuawei: () => void;
  setIphone: () => void;
  setXiaomi: () => void;
  closeSamsung: () => void;
  closeHuawei: () => void;
  closeIphone: () => void;
  closeXiaomi: () => void;
  setLowPrice: () => void;
  setMediumPrice: () => void;
  setHighPrice: () => void;
  setMegaPrice: () => void;
  closeLowPrice: () => void;
  closeMediumPrice: () => void;
  closeHighPrice: () => void;
  closeMegaPrice: () => void;
}

const Filter: React.FC<Props> = ({
  setSamsung,
  setHuawei,
  setIphone,
  setXiaomi,
  closeSamsung,
  closeHuawei,
  closeIphone,
  closeXiaomi,
  setLowPrice,
  setMediumPrice,
  setHighPrice,
  setMegaPrice,
  closeLowPrice,
  closeMediumPrice,
  closeHighPrice,
  closeMegaPrice,
}) => {
  return (
    <div className="Filter">
      <div className="boxes">
        <p className="headline">IZABERI BRAND</p>
        <input
          type="checkbox"
          id="box-1"
          onChange={(e) => (e.target.checked ? setSamsung() : closeSamsung())}
        />
        <label htmlFor="box-1">Samsung</label>

        <input
          type="checkbox"
          id="box-2"
          onChange={(e) => (e.target.checked ? setHuawei() : closeHuawei())}
        />
        <label htmlFor="box-2">Huawei</label>

        <input
          type="checkbox"
          id="box-3"
          onChange={(e) => (e.target.checked ? setIphone() : closeIphone())}
        />
        <label htmlFor="box-3">iPhone</label>

        <input
          type="checkbox"
          id="box-4"
          onChange={(e) => (e.target.checked ? setXiaomi() : closeXiaomi())}
        />
        <label htmlFor="box-4">Xiaomi</label>
      </div>

      <div className="boxes">
        <p className="headline">RASPON CIJENE</p>
        <input
          type="checkbox"
          id="box-5"
          onChange={(e) =>
            e.target.checked ? setMegaPrice() : closeMegaPrice()
          }
        />
        <label htmlFor="box-5">
          6000kn<i className="fas fa-plus"></i>
        </label>

        <input
          type="checkbox"
          id="box-6"
          onChange={(e) =>
            e.target.checked ? setHighPrice() : closeHighPrice()
          }
        />
        <label htmlFor="box-6">
          3000kn<i className="fas fa-arrows-alt-h"></i>6000kn
        </label>

        <input
          type="checkbox"
          id="box-7"
          onChange={(e) =>
            e.target.checked ? setMediumPrice() : closeMediumPrice()
          }
        />
        <label htmlFor="box-7">
          1500kn
          <i className="fas fa-arrows-alt-h"></i>3000kn
        </label>

        <input
          type="checkbox"
          id="box-8"
          onChange={(e) => (e.target.checked ? setLowPrice() : closeLowPrice())}
        />
        <label htmlFor="box-8">
          0kn<i className="fas fa-arrows-alt-h"></i>1500kn
        </label>
      </div>
      <div className="delivery">
        <img src={dostava} alt="dostava" />
      </div>
      <div className="delivery">
        <img src={jamstvo} alt="jamstvo" />
      </div>
    </div>
  );
};

export default Filter;
