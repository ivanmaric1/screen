import React from 'react';
import './Filter.scss';

interface Props {
  setSamsung: () => void;
  setHuawei: () => void;
  setIphone: () => void;
  setXiaomi: () => void;
  closeSamsung: () => void;
  closeHuawei: () => void;
  closeIphone: () => void;
  closeXiaomi: () => void;
  setPrice: (price: string) => void;
  removePrice: (price: string) => void;
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
  setPrice,
  removePrice,
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
            e.target.checked ? setPrice('mega') : removePrice('mega')
          }
        />
        <label htmlFor="box-5">
          6000kn<i className="fas fa-plus"></i>
        </label>

        <input
          type="checkbox"
          id="box-6"
          onChange={(e) =>
            e.target.checked ? setPrice('high') : removePrice('high')
          }
        />
        <label htmlFor="box-6">
          3000kn<i className="fas fa-arrows-alt-h"></i>6000kn
        </label>

        <input
          type="checkbox"
          id="box-7"
          onChange={(e) =>
            e.target.checked ? setPrice('medium') : removePrice('medium')
          }
        />
        <label htmlFor="box-7">
          1500kn
          <i className="fas fa-arrows-alt-h"></i>3000kn
        </label>

        <input
          type="checkbox"
          id="box-8"
          onChange={(e) =>
            e.target.checked ? setPrice('low') : removePrice('low')
          }
        />
        <label htmlFor="box-8">
          0kn<i className="fas fa-arrows-alt-h"></i>1500kn
        </label>
      </div>
    </div>
  );
};

export default Filter;
